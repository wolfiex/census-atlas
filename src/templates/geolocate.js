export let position = undefined;
export let width = '20px'
export let tooltip = 'Use Current Location. Note - this feature may require you to allow location access from your device.'
let clickpos;

import { onMount } from "svelte";
onMount(()=>{
if (initgeo){
  clickpos.click()
}
})


// Usage
// import {default as Geolocate} from "./geolocate.svelte";
// <Geolocate width='30px' tooltip=false bind:mypos=position></Geolocate>


export async function initgeo(){
  //console.log(Object.getOwnPropertyNames(Geolocate.prototype),Geolocate.prototype.initgeo())
   if(navigator.geolocation) {

     // check permissions
     const location = navigator.permissions.query({ name: 'geolocation' })
     // set a timeout for check as we dont want to halt execution
     const location_timeout = new Promise((resolve, reject) => {
       setTimeout(resolve, 200, {state: undefined}); //100ms
     });
     // race the two conditions
     var permission = await Promise.race([location, location_timeout])

    console.log('Location:',permission.state)

  switch(permission.state) {
    case 'granted':
      return true
      break;
    case 'pending':
      console.log('locational permission to be prompted. Skipping response for now')
      return false
      break;
    default:
      return undefined
  }


   }
}



function showPosition() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                position = pos.coords;
                console.warn(position)

            });
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }
