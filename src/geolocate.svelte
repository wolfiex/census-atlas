
<!-- Script autogenerated by Svelte-Jinja (author: Dan Ellis) -->

<!-- Use templates folder to update -->


<main>
    <!--  we are using a template so need to escape the main block in order to insert svelte directives -->

</main>
<svelte:options accessors/>

<main width={width} tabindex="0" on:keyup={(e)=> (e.key === 'Enter' || e.keyCode === 13)?  showPosition():null }>

{#if show}

<button
  on:click={showPosition} data-tooltip={tooltip} bind:this={clickpos} >


  <svg version="1.1" id="Layer_1" width={width} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">

  	<g>
  		<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M256,478.609
  			C133.25,478.609,33.391,378.75,33.391,256S133.25,33.391,256,33.391S478.609,133.25,478.609,256S378.75,478.609,256,478.609z"/>
  	</g>
  <g>
  		<path d="M411.826,256c0-9.217,7.479-16.696,16.696-16.696h15.85c-8.008-91.021-80.654-163.667-171.676-171.676v15.85
  			c0,9.217-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.479-16.696-16.696v-15.85c-91.021,8.008-163.667,80.654-171.676,171.676
  			h15.85c9.217,0,16.696,7.479,16.696,16.696c0,9.217-7.479,16.696-16.696,16.696h-15.85
  			c8.008,91.021,80.654,163.667,171.676,171.676v-15.85c0-9.217,7.479-16.696,16.696-16.696c9.217,0,16.696,7.479,16.696,16.696
  			v15.85c91.021-8.008,163.667-80.654,171.676-171.676h-15.85C419.305,272.696,411.826,265.217,411.826,256z M342.929,191.442
  			l-47.083,94.498c-0.855,2.139-4.425,6.045-7.679,7.345l-94.499,47.417c-6.344,3.339-14.023,2.003-19.366-3.006
  			c-5.01-5.341-6.344-13.023-3.006-19.367l47.415-94.496c1.301-3.252,5.219-6.83,7.347-7.681l94.499-47.081
  			c6.344-3.006,14.023-2.003,19.031,3.338C344.932,177.419,345.933,185.098,342.929,191.442z"/>
  	</g>
    </svg>

</button>

{/if}

</main>


<script>
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

</script>


<style>
    button{
  outline: none;
  background-color: transparent;
  border: none;
  color: gray;
  padding: auto;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
path{
  fill:#222;
  stroke:#222;
}

path:hover{
  fill:steelblue;
  stroke:steelblue;
}


[data-tooltip] {
position: relative;
z-index: 2;
display: block;
}

[data-tooltip]:before,
[data-tooltip]:after {
visibility: hidden;
opacity: 0;
pointer-events: none;
transition: .2s ease-out;
transform: translate(-50%, 5px)
}

[data-tooltip]:before {
position: absolute;
bottom: 100%;
left: 50%;
margin-bottom: 5px;
padding: 7px;
width: 100%;
min-width: 70px;
max-width: 250px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
background-color: #000;
background-color: hsla(0, 0%, 20%, 0.9);
color: #fff;
content: attr(data-tooltip);
text-align: center;
font-size: 14px;
line-height: 1.2;
transition: .2s ease-out;
border-radius: 5px;
}

[data-tooltip]:after {
position: absolute;
bottom: 100%;
left: 50%;
width: 0;
border-top: 5px solid #000;
border-top: 5px solid hsla(0, 0%, 20%, 0.9);
border-right: 5px solid transparent;
border-left: 5px solid transparent;
content: " ";
font-size: 0;
line-height: 0;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
visibility: visible;
opacity: 1;
transform: translate(-50%, 0)
}
[data-tooltip=false]:hover:before,
[data-tooltip=false]:hover:after {
visibility: hidden;
opacity: 0;
}

</style>
