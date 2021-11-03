import { onMount } from "svelte";
import { ckmeans } from "simple-statistics";

import MapComponent, { map, bounds, latlon, mapZoom } from "./MapComponent.svelte";


import Group from "./Group.svelte";
// import MapComponent from "./MapComponent.svelte";
import MapSource from "./MapSource.svelte";
import MapLayer from "./MapLayer.svelte";
import ColChart from "./charts/Histogram.svelte";
import Loader from "./ui/Loader.svelte";
import Select from "./ui/Select.svelte";
import Panel from "./ui/Panel.svelte";
import { default as PanelSection } from "./ui/CustomAccordionPanel.svelte";
import { default as Indicate2L } from "./ui/groupselect_2layer.svelte";
import { default as Geolocate } from "./geolocate.svelte";


import { getNomis, getBreaks, processData } from "./utils.js";
import { csv, json } from "d3-fetch";


const showmap = true; //debug tool 


import { boundurl, lsoaurl, geography, tabledata, lsoabldg, lsoabounds, ladvector, lsoadata } from './datastore.js'
import { data, lad_dta, location, lsoa, lad, selectData, selectItem } from './datastore.js';
import { get_data } from './datastore.js';
import { colors, } from './constants.js';


// import {timer,timer_as,connect} from './debug_ws.js'
// console.warn(Object.getOwnPropertyNames(Geolocate.prototype),Geolocate.prototype.initgeo().then(console.warn)
// )



// OBJECTS


// DATA
let indicators;
let ladlist;
let lsoalookup;



// STATE
let selectCode = "QS119EW005";
let mapLocation = null;


let selectMeta = {code:''};


let loading = true;


$: $selectItem, console.warn('sitem', $selectItem)
$: selectMeta, console.warn('smeta', selectMeta)


async function initialise() {
    // await connect()
    // timer_as(get_data)
    await get_data()
    mapLocation = {
        zoom: 11,
        lon: +location.lon,
        lat: +location.lat
    };
    // no need to be blocking
    json(lsoaurl).then((data) => {
        lsoalookup = data;
    });

    json(tabledata)
        .then((json) => {
            indicators = json;
            setIndicator(indicators, selectCode);
            if (!$selectItem) {
                $selectItem = indicators[0].children[0].children[0];
            }
            setIndicator(indicators, selectCode);
        });



}
/// END "INIT"


function setIndicator(indicators, code) {
    // nest to find indicator with code  - do we need childen or is it a name ref 
    indicators.forEach(indicator => {
        if (indicator.code && indicator.code == code) {
            $selectItem = indicator;
        } else if (indicator.children) {
            setIndicator(indicator.children, code);
        }
    });
}



selectItem.subscribe(
    function setSelect() {
        if ($selectItem){ // & selectMeta.code != $selectItem.code) {
            let code = selectCode = $selectItem.code;
            const c3 = code.slice(0, 3)
            const c7 = code.slice(0, 7)

            const group = indicators.find(d => d.code === c3)

            selectMeta = {
                code: code,
                group: group,
                table: group.children.find(d => d.code === c7),
                cell: +code.slice(7, 10)
            };

            loadData();
            // changeURL();
        }
    }
)




function loadData() {
    console.log("loading data...");

    loading = true;
    if ($data[$selectItem.code]) {
        $selectData = $data[$selectItem.code];
        console.log("data loaded from memory!");
        if ($lad.selected) {
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

            console.log("lsoa", dataset.lsoa.data);

            dataset.lsoa.data.forEach(function (d) {
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


            let proc = processData(res, lsoalookup);
            dataset.lsoa.index = proc.lsoa.index;
            dataset.lad.data = proc.lad.data;
            dataset.lad.index = proc.lad.index;

            let ladVals = proc.lad.data.map(d => d.perc);
            let ladChunks = ckmeans(ladVals, 5);
            dataset.lad.breaks = getBreaks(ladChunks);

            dataset.ew.data = proc.ew.data;

            $data[$selectItem.code] = dataset;

            $selectData = dataset;
            console.log("data loaded from csv!");

            console.warn('sdata', $selectData, $lad.selected)
            if ($lad.selected) {
                setColors();
            }
            loading = false;
        });
    }

}

function doSelect() {
    if ($lad.selected != $lad.selectedPrev) {
        $lad.selectedPrev = $lad.selected;
        if (
            $lad.selected &&
            $lsoa.selected &&
            !$lad_dta
                .get($lad.selected)
                .children.includes($lsoa.selected)
        ) {
            $lsoa.selected = null;
        }
        setColors();
    }
}

function setColors() {
    let newdata = JSON.parse(JSON.stringify($data[$selectItem.code]));
    if ($lad.selected) {
        // re-color dataset
        newdata.lsoa.data.forEach(d => {
            if (lsoalookup[d.code].parent == $lad.selected) {
                d.fill = d.color;
                d.selected = true;
            } else {
                d.fill = d.muted;
                d.selected = false;
            }
        });

        let b = $lad_dta.get($lad.selected);
        

        if (!$lsoa.selected) {
            $bounds = [b.minx, b.miny, b.maxx, b.maxy];
            // map.fitBounds(bounds, { padding: 20 });
        }
    }
    $selectData = newdata;
    console.warn('colselect', $selectData)
}

function getSib(type, diff) {
    if (type == "lad") {
        let index =
            $selectData.lad.data.findIndex(d => d.code == $lad.selected) +
            diff;
        if (index >= 0 && index < $selectData.lad.data.length) {
            $lsoa.selected = null;
            $lad.selected = $selectData.lad.data[index].code;
        }
    } else if (type == "lsoa") {
        let filtered = $selectData.lsoa.data.filter(d =>
            $lad_dta.get($lad.selected).children.includes(d.code)
        );
        let index =
            filtered.findIndex(d => d.code == $lsoa.selected) + diff;
        if (index >= 0 && index < filtered.length) {
            $lsoa.selected = filtered[index].code;

            // Fit to parent LAD
            $bounds = $lad_dta.get($lad.selected);
            // map.fitBounds($bounds, { padding: 20 });
        }
    }
}





// REACT


$: $map, console.warn('maap', $map)

// $: selectItem && setSelect(); // Update meta when selection updates
$: $lad.highlighted = lsoalookup && $lsoa.hovered
    ? lsoalookup[$lsoa.hovered].parent
    : null;
$: $lad.selected = lsoalookup && $lsoa.selected
    ? lsoalookup[$lsoa.selected].parent
    : $lad.selected;
//
$: if ($lad_dta & $lad.name)
    $lad.name = $lad_dta.get($lad.selected).AREANM || null;

$: $data[selectCode] &&
    ($lad.selected || $lad.selected == null) &&
    doSelect();



// geolocate 
latlon.subscribe(() => {
    if ($latlon) {
        var ll = $latlon
        console.warn("trigger update", ll);
        let dist = [99999, null];
        for (let [key, val] of $lad_dta) {
            let dt = Math.sqrt(
                (ll.latitude - val.lat) ** 2 +
                (ll.longitude - val.lon) ** 2
            );

            if (dt < dist[0]) dist = [dt, val];

        }
        $bounds = [dist[1].minx, dist[1].miny, dist[1].maxx, dist[1].maxy]
        //$latlon = false;
    }
})




// FUNCTIONS
// function changeURL() {
//     let hash = `#/${selectCode||''}/${$lad.selected ? $lad.selected : ""}/${$lsoa.selected ? $lsoa.selected : ""}/${mapLocation.zoom},${mapLocation.lon},${mapLocation.lat}`;
//     if (hash != window.location.hash) {
//         history.pushState(undefined, undefined, hash);
//     }
// }


// // CODE
// // Update state based on URL
// let hash = window.location.hash == "" ? "" : window.location.hash.split("/"); 
// if (hash.length == 5) {
//     let zoom, lon, lat, other,ls;
//     [zoom, selectCode, $lad.selected, ls, other] = hash;
//     [zoom, lon, lat] = other.split(",");
//     alert(ls)

//     $lsoa.selected = ls;

//     mapLocation = {
//         zoom,
//         lon,
//         lat
//     };
// }

// // Respond to URL change
// function hashChange() {
//     console.warn("hash", location.hash, window.location.hash);
//     if (location.hash === "") {
//         console.warn("nohash");
//         return None;
//     }


//     let hash = location.hash.split("/");

//     if (selectCode != hash[1]) {
//         selectCode = hash[1];
//         setIndicator(indicators, selectCode);
//     }
//     if ($lsoa.selected != hash[3]) {
//         $lsoa.selected = hash[3] != "" ? hash[3] : null;
//     } else if ($lad.selected != hash[2]) {
//         $lad.selected = hash[2] != "" ? hash[2] : null;
//     }
//     if (
//         `${mapLocation.zoom},${mapLocation.lon},${mapLocation.lat}` != hash[4]
//     ) {
//         console.warn("haaa", hash);
//         let loc = hash[4].split(",");
//         mapLocation = { zoom: loc[0], center: [loc[1], loc[2]] };
//         map.jumpTo(mapLocation);
//     }
// }
// window.onpopstate = hashChange
// function newLocale(dist) {
//     // location.hash = `#/${selectCode}/${dist[1].AREACD
//     // }//${14},${
//     //   dist[1].lon
//     // },${dist[1].lat}`;
//     // history.pushState(undefined, undefined, hash);
//     // hashChange

//     console.warn("newlocale", dist);
//     // location.hash = hash;
//     $lsoa.null = null;
//     $lsoa.selected = null;
//     $lad.selected = dist[1].AREACD;
//     $lad.name = dist[1].AREANM;

//     $bounds = [dist[1].minx, dist[1].miny, dist[1].maxx, dist[1].maxy]


// }

// $: if ( $map) {

//     $map.on("moveend", () => {
//         let center = $map.getCenter();
//         mapLocation = {
//             zoom: $map.getZoom().toFixed(0),
//             lon: center.lng,
//             lat: center.lat
//         };
//         // changeURL();
//     });
// }





onMount(initialise);
