
import { Accordion } from 'svelte-collapsible'
import { default as AccordionItem } from './CustomAccordionItem.svelte'
import { panels } from '../constants.js'

// export let items
export let key

export let selected = null;

let item = $panels[key]

