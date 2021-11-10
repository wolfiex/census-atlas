<script>
  import BasePage from "../ui/BasePage.svelte";
  let serviceTitle = "Explore Census";
  let description = "Here’s a place where we tell users what the Census Atlas is and what it can do for them";
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<BasePage {serviceTitle} {description}>
  <h1>Census Atlas ALPHA</h1>
</BasePage>

<style lang="scss" global>
  /* @import '../../node_modules/@ons/design-system/scss/main.scss';
   * XXX: This fails for many reasons. Sticking to global CSS for now with only variables exposed via SCSS. */
  @import "../../node_modules/@ons/design-system/css/main";
  @import "../../node_modules/@ons/design-system/scss/vars/_index.scss";
</style>
