import { feature } from "topojson-client";
import { csvParse, autoType } from "d3-dsv";
<<<<<<< HEAD
import { get } from 'svelte/store';
=======
import { get } from "svelte/store";
import { bbox } from "@turf/turf";
>>>>>>> 881cd6a... refactors processData function

export async function getLsoaData(url) {
  let response = await fetch(url);
  let string = await response.text();
  let data = await csvParse(string, autoType);
  return data;
}

export async function getTopo(url, layer) {
  let response = await fetch(url);
  let topojson = await response.json();
  let geojson = await feature(topojson, layer);
  return geojson;
}

export async function getNomis(url, geographicCodesStore, indicatorCode) {
	let geoCodesStore = get(geographicCodesStore)
	if (geoCodesStore.length == 0) {
		let geoCodes = await dataService.getGeographicCodes(url)
		geographicCodesStore.set(geoCodes)
	}
	return await dataService.getNomisData(url, geographicCodesStore, selectedCategoryTotals, indicatorCode)
  }
  return await dataService.getNomisData(
    url,
    geographicCodesStore,
    selectedCategoryTotals,
    indicatorCode
  );
}

export function processData(data, lookup) {
  let lsoa = {
    index: {},
  };
  let lad = {
    data: [],
    index: {},
  };
  let englandAndWales = {
    data: {
      value: 0,
      count: 0,
    },
  };
  let ladTemp = {};

  data.forEach((d) =>
    calculateAggregateData(d, lsoa, lookup, lad, ladTemp, englandAndWales)
  );
  let keys = Object.keys(lad.index);
  keys.forEach((key) => calculateLadPercentages(lad, ladTemp, key));
  lad.data.sort((a, b) => a.perc - b.perc);

  englandAndWales.data.perc =
    (englandAndWales.data.value / englandAndWales.data.count) * 100;

  return {
    lsoa: lsoa,
    lad: lad,
    englandAndWales: englandAndWales,
  };
}

function calculateAggregateData(
  lsoaData,
  lsoa,
  lookup,
  lad,
  ladTemp,
  englandAndWales
) {
  lsoa.index[lsoaData.code] = lsoaData;
  let parent = lookup[lsoaData.code].parent;
  if (!lad.index[parent]) {
    lad.index[parent] = {
      code: parent,
      value: lsoaData.value,
      count: lsoaData.count,
    };
    ladTemp[parent] = [lsoaData];
  } else {
    lad.index[parent].value += lsoaData.value;
    lad.index[parent].count += lsoaData.count;
    ladTemp[parent].push(lsoaData);
  }
  englandAndWales.data.value += lsoaData.value;
  englandAndWales.data.count += lsoaData.count;
}

function calculateLadPercentages(lad, ladTemp, key) {
  lad.index[key].perc = (lad.index[key].value / lad.index[key].count) * 100;
  lad.index[key].median = ladTemp[key][Math.floor(ladTemp[key].length / 2)];
  lad.data.push(lad.index[key]);
}

export function getBreaks(chunks) {
  let breaks = [];

  chunks.forEach((chunk) => {
    breaks.push(chunk[0]);
  });

  breaks.push(chunks[chunks.length - 1][chunks[chunks.length - 1].length - 1]);

  return breaks;
}

export function getThresholds(domain, exp, count = 32) {
  const offset = exp == 1 ? domain[0] : 0;
  const scale = domain[1] - offset;
  const breaks = [offset];
  const brek = 1 / count;
  for (let i = 1; i <= count; i++) {
    let node = Math.pow(i * brek, 1 / exp) * scale + offset;
    if (node > domain[0]) {
      breaks.push(node);
    }
  }
  return breaks;
}
<<<<<<< HEAD
=======

export function testFunction() {
  return true;
}
>>>>>>> 881cd6a... refactors processData function
