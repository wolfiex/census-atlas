import { getContext } from 'svelte'
import collapse from 'svelte-collapse'

export let key;
export let active=false;
    
const store = getContext('svelte-collapsible-accordion')
$: params = { 
    open: $store.key === key, 
    duration: $store.duration,
    easing: $store.easing
}
function handleToggle () {
    if (params.open) {
        store.update(s => Object.assign(s, { key: null }))
                  active = false
    }
    else {
        store.update(s => Object.assign(s, { key }))
                  active = true
    }
}
