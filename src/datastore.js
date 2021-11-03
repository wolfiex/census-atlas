/* Data module 
All functions data related
*/

import { writable, get } from 'svelte/store';
import { csv, json } from "d3-fetch";


export const lad_dta = writable(null);
export const location = writable(null);
export const selectData = writable(undefined);
export const data = writable(new Object());

//selections
export const selectItem = writable(null)

export let lsoa = writable({
    selected: null,
    geometry: null,
    hovered: null
});

export let lad = writable({
    selected: null,
    geometry: null,
    hovered: null
});





/* URL spec */
export const boundurl = "https://raw.githubusercontent.com/wolfiex/TopoStat/main/ladb_20.csv";
export const lsoaurl ="https://raw.githubusercontent.com/wolfiex/TopoStat/main/lsoa11_20.json";

export const geography = "TYPE298";
export const tabledata ="https://bothness.github.io/census-atlas/data/indicators.json";
export const lsoadata = "https://bothness.github.io/census-atlas/data/lsoa2011_lad2020.csv";

export const lsoabldg = {
    url: "https://cdn.ons.gov.uk/maptiles/buildings/v1/{z}/{x}/{y}.pbf",
    layer: "buildings",
    code: "lsoa11cd"
};
export const lsoabounds = {
    url: "https://cdn.ons.gov.uk/maptiles/administrative/lsoa/v2/boundaries/{z}/{x}/{y}.pbf",
    layer: "lsoa",
    code: "areacd"
};
export const ladvector = {
    url: "https://cdn.ons.gov.uk/maptiles/administrative/authorities/v1/boundaries/{z}/{x}/{y}.pbf",
    layer: "authority",
    code: "areacd"
};

// CONFIG
// const apiurl = "https://www.nomisweb.co.uk/api/v01/dataset/";
// const apikey = "0x3cfb19ead752b37bb90da0eb3a0fe78baa9fa055";



// FUNCTIONS

export async function get_data() {

    // load simple CSV of lad boundaries
    await csv(boundurl).then(bounds => {
        lad_dta.set(new Map(
            bounds.map(d => {
                d.children = d.children.split(",");
                return [d.AREACD, d];
            })
        )
        )
    });

    // get a random starting location (should geolocation not already be enabled)
    location.set(get(lad_dta).get(
        [...get(lad_dta).keys()][Math.floor(Math.random() * lad_dta.size)]
    ))



}



/*


Notes:

cant batch define with vars from here
var a,b,c;
[a,b,c] = [1.,2,4]

Lots of what is done here can be done using
getCotext
and setContext
!!!!!!!

When importing you need module scripts for exports 
and non module for onMount should you want to export
both a component and a fn

other




*/