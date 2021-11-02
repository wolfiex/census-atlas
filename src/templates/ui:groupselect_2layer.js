import Select from 'svelte-select';

function handleSelect(e) {
console.warn(e.detail.value);
}
const complexItems = [
    {value: 'chocolate', label: 'Chocolate', group: 'Sweet'},
{value: 'pizza', label: 'Pizza', group: 'Savory'},
{value: 'cake', label: 'Cake', group: 'Sweet'},
{value: 'chips', label: 'Chips', group: 'Savory'},
{value: 'ice-cream', label: 'Ice Cream', group: 'Sweet'}
];

let len = complexItems.length + [...new Set(complexItems.map(item => item.group))].length;
const groupBy = (item) => item.group;

console.warn(len);


export let ariaValues = (values) => {
    return `Option ${values}, selected.`;
  }
  
  export let ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  }
  
  export let ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  }