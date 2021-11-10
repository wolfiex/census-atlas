<script>
  import CensusAtlas from "./routes/CensusAtlas.svelte";
  import CensusAtlasV2 from "./routes/CensusAtlasV2.svelte";
  import Components from "./routes/Components.svelte";
  import DesignSystemApp from "./routes/DesignSystemApp.svelte";
  import { Router, Link, Route } from "svelte-routing";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Census Atlas (Legacy)</Link>
    <Link to="/census-atlas">Census Atlas (V2)</Link>
    <Link to="/components">Components</Link>
    <Link to="/design-system">Design System</Link>
  </nav>
  <div>
    <Route path="/" component={CensusAtlas} />
    <Route path="/census-atlas" component={CensusAtlasV2} />
    <Route path="/components" component={Components} />
    <Route path="/design-system" component={DesignSystemApp} />
  </div>
</Router>
