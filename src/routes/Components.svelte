<script>
  import ONSCensusApp from "../ui/ons/ONSCensusApp.svelte";
  import TopicExplorer from "../ui/TopicExplorer.svelte";
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<h1>Census Atlas Components</h1>

<h2>Component</h2>

<ONSCensusApp>
  <TopicExplorer />
</ONSCensusApp>
