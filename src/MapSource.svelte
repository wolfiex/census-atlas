<script>
	// import { getContext } from 'svelte';
	export let id;
	export let type;
	export let url = null;
	export let props = {};
	export let data = null;
	export let layer = null;
	export let promoteId = null;
	export let minzoom = null;
	export let maxzoom = null;

	let loaded = false;
	let debug = true;

	if (debug === false) console.log = () => {};

	// const { getMap } = getContext('map');
	// const map = getMap();

	import { map } from "./MapComponent.svelte";

	console.warn("maaaaaaaa", $map);

	if ($map.getSource(id)) {
		$map.removeSource(id);
	}

	function isSourceLoaded() {
		if ($map.isSourceLoaded(id)) {
			loaded = true;
			console.log(id + " loaded!");
		} else {
			setTimeout(() => {
				console.log("...");
				isSourceLoaded();
			}, 500);
		}
	}

	function isMapLoaded() {
		if ($map.isStyleLoaded(id)) {
			addSource();
		} else {
			setTimeout(() => {
				console.log("...");
				isMapLoaded();
			}, 500);
		}
	}

	// Set optional source properties
	if (minzoom) {
		props.minzoom = minzoom;
	}
	if (maxzoom) {
		props.maxzoom = maxzoom;
	}
	if (layer && promoteId) {
		props.promoteId = {};
		props.promoteId[layer] = promoteId;
	} else if (promoteId) {
		props.promoteId = promoteId;
	}

	function addSource() {
		console.log(id + " map source loading...");
		if (type == "geojson") {
			if (data) {
				$map.addSource(id, {
					type: type,
					data: data,
					...props,
				});
				isSourceLoaded();
			} else if (url) {
				$map.addSource(id, {
					type: type,
					data: url,
					...props,
				});
				isSourceLoaded();
			}
		} else if (type == "vector") {
			$map.addSource(id, {
				type: type,
				tiles: [url],
				...props,
			});
			isSourceLoaded();
		}
	}

	isMapLoaded();
</script>

{#if loaded}
	<slot />
{/if}
