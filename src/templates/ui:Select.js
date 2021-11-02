import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();


export let options;
export let selected;
export let search = false;
export let placeholder = 'Select an option';

// var filtered=[]

let expanded = false;
let filter = '';
let name;
let el;
let input;

$: regex = filter ? new RegExp(filter, 'i') : null;
$: filtered = regex ? options.filter(option => regex.test(option.AREANM)) : options;
$: (selected || selected == null) && setName();

function setName() {
  if (selected) {
    name = options.find(d => d.AREACD == selected).AREANM;
  } else {
    name = null;
  }
}

function toggle(ev) {
  ev.stopPropagation();
  filter = '';
  expanded = !expanded;
}

$: if (input && expanded) {
  input.focus();
}

function unSelect(ev) {
  dispatch('select', {
    code: null
  });
  ev.stopPropagation();
  selected = null;
  name = null;
}

function submit(ev) {
  if (ev.keyCode === 13 && filtered[0]) {
    ev.preventDefault();
    select(filtered[0]);
  }
}

function select(option) {
  dispatch('select', {
    code: option.AREACD
  });
  selected = option.AREACD;
  expanded = false;
}

$: document.onclick = function(e) {
  if(e.target !== el){
    expanded = false;
  }
};
