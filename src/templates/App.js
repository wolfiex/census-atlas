import { onMount } from "svelte";
import { ckmeans } from "simple-statistics";

import Group from "./Group.svelte";
import MapComponent from "./MapComponent.svelte";
import MapSource from "./MapSource.svelte";
import MapLayer from "./MapLayer.svelte";
import ColChart from "./charts/Histogram.svelte";
import Loader from "./ui/Loader.svelte";
import Select from "./ui/Select.svelte";
import { getData, getNomis, getBreaks, getTopo, processData } from "./utils.js";
import { csv, json } from "d3-fetch";

import Panel from "./ui/Panel.svelte";
import { default as PanelSection } from "./ui/CustomAccordionPanel.svelte";
import { default as Indicate2L } from "./ui/groupselect_2layer.svelte";
import { default as Geolocate } from "./geolocate.svelte";

const showmap = false;

// console.warn(Object.getOwnPropertyNames(Geolocate.prototype),Geolocate.prototype.initgeo().then(console.warn)
// )

var panels = {
    data: {
        key: "data",
        title: "Select Indicator",
        text: `This is where you select an indicator to view. `,
        active: true
    },
    area: {
        key: "area",
        title: "Pick an area",
        text: `This is where you select an area`,
        active:true,
    },
    infobox: {
        key: "Info",
        title: "Summary",
        text: `Summary details of your selection.`,
        active: true
    },
    chart: {
        key: "Chart",
        title: "",
        text: `A comparison chart of your inicator with the avarage.`,
        active: true
    }
};

// CONFIG
// const apiurl = "https://www.nomisweb.co.uk/api/v01/dataset/";
// const apikey = "0x3cfb19ead752b37bb90da0eb3a0fe78baa9fa055";

// const ladtopdesc;
const boundurl =
    "https://raw.githubusercontent.com/wolfiex/TopoStat/main/ladb_20.csv";
const lsoaurl =
    "https://raw.githubusercontent.com/wolfiex/TopoStat/main/lsoa11_20.json";

const geography = "TYPE298";
const mapstyle = "https://bothness.github.io/ons-basemaps/data/style-omt.json";
const tabledata =
    "https://bothness.github.io/census-atlas/data/indicators.json";
// const ladtopo = {
//   url: "https://bothness.github.io/census-atlas/data/lad_boundaries_2020.json",
//   layer: "LA2020EW",
//   code: "AREACD",
//   name: "AREANM",
// };
const lsoabldg = {
    url: "https://cdn.ons.gov.uk/maptiles/buildings/v1/{z}/{x}/{y}.pbf",
    layer: "buildings",
    code: "lsoa11cd"
};
const lsoabounds = {
    url: "https://cdn.ons.gov.uk/maptiles/administrative/lsoa/v2/boundaries/{z}/{x}/{y}.pbf",
    layer: "lsoa",
    code: "areacd"
};
const ladvector = {
    url: "https://cdn.ons.gov.uk/maptiles/administrative/authorities/v1/boundaries/{z}/{x}/{y}.pbf",
    layer: "authority",
    code: "areacd"
};
const lsoadata =
    "https://bothness.github.io/census-atlas/data/lsoa2011_lad2020.csv";

const colors = {
    base: ["#d5f690", "#5bc4b1", "#2e9daa", "#0079a2", "#005583", "#cccccc"],
    muted: ["#f5fce2", "#d7ede8", "#cbe2e5", "#c2d7e3", "#bdccd9", "#f0f0f0"]
};

// OBJECTS
let map = null;

// DATA
let indicators;
let ladlist;
let latlon = undefined;
let lsoalookup;
let data = {};
let active = {
    lsoa: {
        selected: null,
        geometry: null,
        hovered: null
    },
    lad: {
        selected: null,
        selectedPrev: null,
        hovered: null,
        highlighted: null
    }
};

// STATE
let selectCode = "QS119EW005";
let mapLocation = null;

let lad_dta;

let selectItem;
let selectMeta;
let selectData;
let loading = true;

let mapLoaded = false;
let mapZoom = null;

// FUNCTIONS
function changeURL() {
    let hash = `#/${selectCode||''}/${active.lad.selected ? active.lad.selected : ""}/${active.lsoa.selected ? active.lsoa.selected : ""}/${mapLocation.zoom},${mapLocation.lon},${mapLocation.lat}`;
    if (hash != window.location.hash) {
        history.pushState(undefined, undefined, hash);
    }
}

function setIndicator(indicators, code) {
    indicators.forEach(indicator => {
        if (indicator.code && indicator.code == code) {
            selectItem = indicator;
        } else if (indicator.children) {
            setIndicator(indicator.children, code);
        }
    });
}

async function initialise() {
    await csv(boundurl).then(bounds => {
        lad_dta = new Map(
            bounds.map(d => {
                d.children = d.children.split(",");
                return [d.AREACD, d];
            })
        );
    });

    let location = lad_dta.get(
        [...lad_dta.keys()][Math.floor(Math.random() * lad_dta.size)]
    );

    mapLocation = {
        zoom: 11,
        lon: +location.lon,
        lat: +location.lat
    };

    // no need to be blocking
    json(tabledata).then(json => {
        indicators = json;

        setIndicator(indicators, selectCode);

        if (!selectItem) {
            selectItem = indicators[0].children[0].children[0];
        }
    });

    json(lsoaurl).then(data => {
        lsoalookup = data;
    });
}
/// END "INIT"

function setSelect() {
    if (!(selectMeta && selectItem && selectMeta.code == selectItem.code)) {
        let code = selectItem.code;
        let group = indicators.find(d => d.code == code.slice(0, 3));
        let table = group.children.find(d => d.code == code.slice(0, 7));
        let cell = +code.slice(7, 10);

        selectCode = code;

        selectMeta = {
            code: selectItem.code,
            group: group,
            table: table,
            cell: cell
        };

        loadData();
        changeURL();
    }
}

function loadData() {
    console.log("loading data...");

    loading = true;
    if (data[selectItem.code]) {
        selectData = data[selectItem.code];
        console.log("data loaded from memory!");
        if (active.lad.selected) {
            setColors();
        }
        loading = false;
    } else {
        // let url = `${apiurl}${selectMeta.table.nomis}${selectMeta.cell}&geography=${geography}&uid=${apikey}`;
        let url = `https://bothness.github.io/census-atlas/data/lsoa/${selectMeta.code}.csv`;
        getNomis(url, selectMeta.cell).then(res => {
            let dataset = {
                lsoa: {},
                lad: {},
                ew: {}
            };
            res.sort((a, b) => a.perc - b.perc);
            dataset.lsoa.data = res;

            let vals = res.map(d => d.perc);
            let chunks = ckmeans(vals, 5);
            let breaks = getBreaks(chunks);
            dataset.lsoa.breaks = breaks;
            //

            console.log("2eeee", dataset.lsoa.data);

            dataset.lsoa.data.forEach(function(d) {
                var n = 4;
                if (d.perc <= breaks[1]) {
                    n = 0;
                } else if (d.perc <= breaks[2]) {
                    n = 1;
                } else if (d.perc <= breaks[3]) {
                    n = 2;
                } else if (d.perc <= breaks[4]) {
                    n = 3;
                }
                d.color = colors.base[n];
                d.muted = colors.muted[n];
                d.fill = colors.base[n];
            });

            console.log("a", res, "b", lsoalookup);

            let proc = processData(res, lsoalookup);
            dataset.lsoa.index = proc.lsoa.index;
            dataset.lad.data = proc.lad.data;
            dataset.lad.index = proc.lad.index;

            let ladVals = proc.lad.data.map(d => d.perc);
            let ladChunks = ckmeans(ladVals, 5);
            dataset.lad.breaks = getBreaks(ladChunks);

            dataset.ew.data = proc.ew.data;

            data[selectItem.code] = dataset;

            selectData = dataset;
            console.log("data loaded from csv!");
            if (active.lad.selected) {
                setColors();
            }
            loading = false;
        });
    }
}

function doSelect() {
    if (active.lad.selected != active.lad.selectedPrev) {
        active.lad.selectedPrev = active.lad.selected;
        if (
            active.lad.selected &&
            active.lsoa.selected &&
            !lad_dta
                .get(active.lad.selected)
                .children.includes(active.lsoa.selected)
        ) {
            active.lsoa.selected = null;
        }

        setColors();
        changeURL();
    }
}

function setColors() {
    let newdata = JSON.parse(JSON.stringify(data[selectItem.code]));
    if (active.lad.selected) {
        // re-color dataset
        newdata.lsoa.data.forEach(d => {
            if (lsoalookup[d.code].parent == active.lad.selected) {
                d.fill = d.color;
                d.selected = true;
            } else {
                d.fill = d.muted;
                d.selected = false;
            }
        });

        let b = lad_dta.get(active.lad.selected);
        let bounds = [b.minx, b.miny, b.maxx, b.maxy];

        if (!active.lsoa.selected) {
            map.fitBounds(bounds, { padding: 20 });
        }
    }
    selectData = newdata;
}

function getSib(type, diff) {
    if (type == "lad") {
        let index =
            selectData.lad.data.findIndex(d => d.code == active.lad.selected) +
            diff;
        if (index >= 0 && index < selectData.lad.data.length) {
            active.lsoa.selected = null;
            active.lad.selected = selectData.lad.data[index].code;
        }
    } else if (type == "lsoa") {
        let filtered = selectData.lsoa.data.filter(d =>
            lad_dta.get(active.lad.selected).children.includes(d.code)
        );
        let index =
            filtered.findIndex(d => d.code == active.lsoa.selected) + diff;
        if (index >= 0 && index < filtered.length) {
            active.lsoa.selected = filtered[index].code;

            // Fit to parent LAD
            let b = lad_dta.get(active.lad.selected);
            map.fitBounds([b.minx, b.miny, b.maxx, b.maxy], { padding: 20 });
        }
    }
}

// CODE
// Update state based on URL
let hash = window.location.hash == "" ? "" : window.location.hash.split("/");
if (hash.length == 5) {
    let zoom, lon, lat, other;
    [zoom, selectCode, active.lad.selected, active.lsoa.selected, other] = hash;
    [zoom, lon, lat] = other.split(",");

    mapLocation = {
        zoom,
        lon,
        lat
    };
}

// Respond to URL change
function hashChange() {
    console.warn("hash", location.hash, window.location.hash);
    if (location.hash === "") {
        console.warn("nohash");
        return None;
    }


    let hash = location.hash.split("/");

    if (selectCode != hash[1]) {
        selectCode = hash[1];
        setIndicator(indicators, selectCode);
    }
    if (active.lsoa.selected != hash[3]) {
        active.lsoa.selected = hash[3] != "" ? hash[3] : null;
    } else if (active.lad.selected != hash[2]) {
        active.lad.selected = hash[2] != "" ? hash[2] : null;
    }
    if (
        `${mapLocation.zoom},${mapLocation.lon},${mapLocation.lat}` != hash[4]
    ) {
        console.warn("haaa", hash);
        let loc = hash[4].split(",");
        mapLocation = { zoom: loc[0], center: [loc[1], loc[2]] };
        map.jumpTo(mapLocation);
    }
}
    // window.onpopstate = hashChange

    $: selectItem && setSelect(); // Update meta when selection updates
    $: active.lad.highlighted = lsoalookup && active.lsoa.hovered
        ? lsoalookup[active.lsoa.hovered].parent
        : null;
    $: active.lad.selected = lsoalookup && active.lsoa.selected
        ? lsoalookup[active.lsoa.selected].parent
        : active.lad.selected;
    //
    $: if (lad_dta & active.lad.name)
        active.lad.name = lad_dta.get(active.lad.selected).AREANM || null;

    $: data[selectCode] &&
        (active.lad.selected || active.lad.selected == null) &&
        doSelect();

    $: if (!mapLoaded && map) {
        mapLoaded = true;

        map.on("moveend", () => {
            let center = map.getCenter();
            mapLocation = {
                zoom: map.getZoom().toFixed(0),
                lon: center.lng,
                lat: center.lat
            };
            changeURL();
        });
    }

    $: if (latlon) {
        console.warn("trigger update", latlon);

        let dist = [99999, null];
        for (let [key, val] of lad_dta) {
            // console.warn(key + " = " + value);
            let dt = Math.sqrt(
                (latlon.latitude - val.lat) ** 2 +
                    (latlon.longitude - val.lon) ** 2
            );

            if (dt < dist[0]) {
                dist = [dt, val];
            }
        }
        newLocale(dist);

        latlon = false;
    }

    function newLocale(dist) {
        // location.hash = `#/${selectCode}/${dist[1].AREACD
        // }//${14},${
        //   dist[1].lon
        // },${dist[1].lat}`;
        // history.pushState(undefined, undefined, hash);
        // hashChange

        console.warn("newlocale", dist);
        // location.hash = hash;
        active.lsoa.null = null;
        active.lsoa.selected = null;
        active.lad.selected = dist[1].AREACD;
        active.lad.name = dist[1].AREANM;

        map.fitBounds(
            [dist[1].minx, dist[1].miny, dist[1].maxx, dist[1].maxy],
            { padding: 20 }
        );
    }

    onMount(initialise);
