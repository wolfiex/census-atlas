import { latlon } from "./MapComponent.svelte";
export let width = "20px";
export let tooltip =
    "Use Current Location. Note - this feature may require you to allow location access from your device.";
let clickpos;
let show = true && navigator.geolocation;




import { onMount } from "svelte";
onMount(() => {
    if (initgeo() & (window.location.hash.split('/')[2] === '')) {
        if (clickpos) clickpos.click();
    }
});

// Usage
// import {default as Geolocate} from "./geolocate.svelte";
// <Geolocate width='30px' tooltip=false bind:mypos=position></Geolocate>

//console.log(Object.getOwnPropertyNames(Geolocate.prototype),Geolocate.prototype.initgeo())

export async function initgeo() {
    console.warn(window.location.hash);

    if (navigator.geolocation) {
        // check permissions
        const location = navigator.permissions.query({ name: "geolocation" });
        // set a timeout for check as we dont want to halt execution
        const location_timeout = new Promise((resolve, reject) => {
            setTimeout(resolve, 200, { state: "unknown" }); //100ms
        });
        // race the two conditions
        var permission = await Promise.race([location, location_timeout]);

        console.log("Location:", permission.state);

        switch (permission.state) {
            case "granted":
                return true;
                break;
            case "pending":
                console.log(
                    "locational permission to be prompted. Skipping response for now"
                );
                return false;
                break;
            case "unknown":
                console.log("checking permissions took too long - skipping");
                return false;
                break;
            default:
                show = false;
                return undefined;
        }
    }
}

function showPosition() {
    if (navigator.geolocation) {
        initgeo();

        navigator.geolocation.getCurrentPosition(function (pos) {
            $latlon = pos.coords;
            console.warn('Location Change:', $latlon);
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
