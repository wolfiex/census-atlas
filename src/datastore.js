import { writable, get } from 'svelte/store';
import { csv, json } from "d3-fetch";


export const lad_dta = writable(null);
export const location = writable(null);
export const selectData = writable(undefined);


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


// export const location = writable(undefined);
var a = {
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
export let active = writable(
    a)


$: console.warn('lad', get(lad_dta))

/* URL spec */
const boundurl = "https://raw.githubusercontent.com/wolfiex/TopoStat/main/ladb_20.csv";





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
Notes:s

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