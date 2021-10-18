
import { Accordion } from 'svelte-collapsible'
import { default as AccordionItem } from './CustomAccordionItem.svelte' 


// export let items
export let key
export let all

let item = all[key]