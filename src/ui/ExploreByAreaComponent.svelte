<script>
  import SearchIcon from "./ons/svg/SearchIcon.svelte";
  export let id = "search-field";
  export let userInputValue = "";
  export let hint = "Enter a postcode or a town,city or area";
  export let placeholder = "WS3 1PL";
  export let buttonText = "Choose";
  export let label = "Explore by area";
</script>

<div class="ons-field ons-grid--gutterless">
  <div class="ons-grid__col ons-col-6@m">
    <label class="ons-label ons-label--with-description " for={id}>{label}</label>
    <p><slot /></p>
    {#if hint}
      <span id="description-hint" class="ons-label__description  ons-input--with-description">
        {hint}
      </span>
    {/if}
    <input
      type="search"
      {id}
      class="ons-input ons-input--text ons-input-type__input"
      {placeholder}
      bind:value={userInputValue}
    />
    <button type="submit" class="ons-btn ons-u-mt-s ons-btn--small">
      <span class="ons-btn__inner">
        <SearchIcon />
        {buttonText}</span
      >
    </button>
  </div>
</div>
