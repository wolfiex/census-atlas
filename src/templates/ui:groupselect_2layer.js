import Select from 'svelte-select';

const complexItems = [
    {value: 'chocolate', label: 'Chocolate', group: 'Sweet'},
{value: 'pizza', label: 'Pizza', group: 'Savory'},
{value: 'cake', label: 'Cake', group: 'Sweet'},
{value: 'chips', label: 'Chips', group: 'Savory'},
{value: 'ice-cream', label: 'Ice Cream', group: 'Sweet'}
];

const groupBy = (item) => item.group;
const optionIdentifier = 'id';
const getOptionLabel = (option) => option.name;
const getSelectionLabel = (option) => option.name;