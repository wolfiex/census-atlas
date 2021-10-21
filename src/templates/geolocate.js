export let position = undefined;
export let width = '20px'

export let tooltip = 'Get Current Location'

// Usage
// import {default as Geolocate} from "./geolocate.svelte";
// <Geolocate width='30px' tooltip=false bind:mypos=position></Geolocate>


function showPosition() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                // var positionInfo = "Your current position is (" + "Latitude: " + pos.coords.latitude + ", " + "Longitude: " + pos.coords.longitude + ")";
                pos = pos.coords
                // return pos
                position = pos;
                console.log(pos)

            });
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }
