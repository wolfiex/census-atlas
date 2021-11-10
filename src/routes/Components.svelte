<script>
  import TopicExplorer from "../ui/TopicExplorer.svelte";
  import BasePage from "../ui/BasePage.svelte";
  import DesignSystemPanel from "../ui/DesignSystemPanel.svelte";
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<BasePage>
  <h1>Census Atlas Components</h1>
  <DesignSystemPanel title="Topic explorer" code={`<TopicExplorer />`}><TopicExplorer /></DesignSystemPanel>
</BasePage>
