<script>
  import Map from "../ui/Map.svelte";
  import TopicExplorer from "../ui/TopicExplorer.svelte";
  import BasePage from "../ui/BasePage.svelte";
  import DesignSystemPanel from "../ui/DesignSystemPanel.svelte";
  let serviceTitle = "Census Atlas components";
  let description = "Complex components made in Svelte with ONS Design System building blocks";
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<BasePage {serviceTitle} {description}>
  <h1>Census Atlas Components</h1>
  <DesignSystemPanel title="Map placeholder" code={`<Map />`}><Map /></DesignSystemPanel>
  <DesignSystemPanel title="Topic explorer" code={`<TopicExplorer />`}><TopicExplorer /></DesignSystemPanel>
</BasePage>
