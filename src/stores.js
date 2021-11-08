import { writable , get } from 'svelte/store';
import {csv} from "d3-fetch";

export const geographicCodes = writable([]);
export const selectedCategoryTotals = writable([])
export const selectedCategory = writable("")


export const bounds = writable([-5.737, 49.882,2.166, 56.014]);
export const lad_dta = writable(null);

export async function get_data(url) {
    // load simple CSV of lad boundaries
    await csv(url).then(bd => {
        lad_dta.set(new Map(
            bd.map(d => {
                d.children = d.children.split(",");
                return [d.AREACD, d];
            })
        )
        )
    });


    // console.warn("loaded bounds", bounds);
    // console.warn("loaded lad_dta", get(lad_dta))

    // get a random starting location (should geolocation not already be enabled)
    var location = get(lad_dta).get(
        [...get(lad_dta).keys()][Math.floor(Math.random() * get(lad_dta).size)]
    )

    // console.warn("starting location", location);
    return location



}


