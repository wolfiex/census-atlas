<script>
  export let label;
  export let id;
  export let name;
  export let options = [];
</script>

<div class="ons-field">
  <label class="ons-label " for={name}>{label}</label>
  <select {id} {name} class="ons-input ons-input--select">
    {#each options as option}
      <option value={option.value} selected={option.selected} disabled={option.disabled}>{option.label}</option>
    {/each}
  </select>
</div>
