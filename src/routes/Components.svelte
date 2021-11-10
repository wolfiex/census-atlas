<script>
  import BasePage from "../ui/BasePage.svelte";
  let serviceTitle = "Census Atlas components";
  let description = "Complex components made in Svelte with ONS Design System building blocks"
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<BasePage {serviceTitle} {description}>
  <h1>Census Atlas Components</h1>

  <h2>Component</h2>
</BasePage>
