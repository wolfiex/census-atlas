<script>
  export let id;
  export let value;
  export let checked = false;
</script>

<p class="ons-checkboxes__item">
  <span class="ons-checkbox ">
    <input type="checkbox" {id} class="ons-checkbox__input ons-js-checkbox " bind:checked />
    <label class="ons-checkbox__label" for={id} id="{id}-label"><slot /></label>
  </span>
</p>
