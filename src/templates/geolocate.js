export let position = undefined;
export let width = '20px'
export let tooltip = 'Use Current Location. Note - this feature may require you to allow location access from your device.'



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
       setTimeout(resolve, 100, {state: undefined}); //100ms
     });
     // race the two conditions
     var permission = await Promise.race([location, location_timeout])




    console.log('Location:',permission.state)
  //
  //    navigator.geolocation.watchPosition(function(position) {
  //   console.log("i'm tracking you!");
  // },
  // function(error) {
  //   if (error.code == error.PERMISSION_DENIED)
  //     console.log("you denied me :-(");
  // });



  switch(permission) {
    case 'granted':
       return navigator.geolocation.getCurrentPosition(function(pos) {
            pos = pos.coords
            console.log(pos)
            return pos
        });
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
                // var positionInfo = "Your current position is (" + "Latitude: " + pos.coords.latitude + ", " + "Longitude: " + pos.coords.longitude + ")";
                pos = pos.coords
                // return pos
                position = pos;
                console.log(pos)
                return pos

            });
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }
