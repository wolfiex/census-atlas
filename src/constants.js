/* Svelte constants module 
A file containing runtime constants not related to data, mapping or UI
*/

//IMPORTS
import { writable, get } from 'svelte/store';


// FIXED CONSTANTS
export const colors = {
    base: ["#d5f690", "#5bc4b1", "#2e9daa", "#0079a2", "#005583", "#cccccc"],
    muted: ["#f5fce2", "#d7ede8", "#cbe2e5", "#c2d7e3", "#bdccd9", "#f0f0f0"]
};



// WRITABLE CONSTANTS


export const panels = writable({// panel info
    data: {
        key: "data",
        title: "Select Indicator",
        text: `This is where you select an indicator to view. `,
        active: false
    },
    area: {
        key: "area",
        title: "Pick an area",
        text: `This is where you select an area`,
        active: false,
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
})