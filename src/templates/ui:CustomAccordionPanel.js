
import { Accordion } from 'svelte-collapsible'
import { default as AccordionItem } from './CustomAccordionItem.svelte'


// export let items
export let key
export let all
export let selected=null;

let item = all[key]
