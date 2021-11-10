<script>
  export let showAll = true;
</script>

<div id="accordion" class="ons-accordion">
  {#if showAll}
    <button
      type="button"
      class="ons-btn ons-js-collapsible-all ons-u-mb-s ons-u-d-no ons-btn--secondary ons-btn--small"
      data-close-all="Hide all"
      data-group="accordion"
    >
      <span class="ons-btn__inner ons-js-collapsible-all-inner">Show all</span>
    </button>
  {/if}
  <slot />
</div>
