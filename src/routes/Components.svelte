<script>
  import BasePage from "../ui/BasePage.svelte";
  import DesignSystemPanel from "../ui/DesignSystemPanel.svelte";
  import CategorySelector from "../ui/CategorySelector.svelte";
  import ExploreByAreaComponent from "../ui/ExploreByAreaComponent.svelte";
  import ExploreByTopic from "../ui/ExploreByTopic.svelte";
  import Feedback from "../ui/Feedback.svelte";
  import Topic from "../ui/Topic.svelte";
  import UseCensusData from "../ui/UseCensusData.svelte";

  let topicList1 = [
    { title: "How does general health differ across England and Wales?", href: "#" },
    { title: "Which areas are home to people who provide the most unpaid care?", href: "#" },
    { title: "What can we learn about long-term health issues and/or disability?", href: "#" },
  ];
  let topicList2 = [{ title: "Get Census datasests", href: "#" }];
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<BasePage>
  <h1>Census Atlas Components</h1>

  <h2>Component</h2>
  <DesignSystemPanel title="Category selector" code={`<CategorySelector />`}>
    <CategorySelector />
  </DesignSystemPanel>
  <DesignSystemPanel title="Explore by area" code={`<ExploreByAreaComponent />`}>
    <ExploreByAreaComponent />
  </DesignSystemPanel>
  <DesignSystemPanel title="Explore by topic" code={`<ExploreByTopic />`}>
    <ExploreByTopic />
  </DesignSystemPanel>
  <DesignSystemPanel title="Feedback" code={`<Feedback />`}>
    <Feedback />
  </DesignSystemPanel>

    <DesignSystemPanel
      title="Topic component-1"
      code={`<Topic topicList={topicList1} cardTitle="Health - Census 2021">
  The 2021 Census tells us a lot about the health of people living in England and Wales live and. 
  <a href="#">Choose a data option from the full list</a> or explore one of these suggestions.
</Topic>`}
    >
      <Topic topicList={topicList1} cardTitle="Health - Census 2021"
        >The 2021 Census tells us a lot about the health of people living in England and Wales live and. <a href="#">
          Choose a data option from the full list</a
        > or explore one of these suggestions.
      </Topic>
    </DesignSystemPanel>

    <DesignSystemPanel
      title="Topic component-2"
      code={`<Topic topicList={topicList2} cardTitle="Need something specific from Census?">
    Explore correlations between two indicators in <a href="#">advanced mode</a>.
  </Topic>`}
    >
      <Topic topicList={topicList2} cardTitle="Need something specific from Census?"
        >Explore correlations between two indicators in <a href="#">advanced mode</a>.
      </Topic>
    </DesignSystemPanel>

    <DesignSystemPanel
      title="Topic component-3"
      code={`<Topic cardTitle="General health with other indicators"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.</Topic
  >`}
    >
      <Topic cardTitle="General health with other indicators"
        >Explore correlations between two indicators in <a href="#">advanced mode</a>.
      </Topic>
    </DesignSystemPanel>
  <DesignSystemPanel title="Use census data" code={`<UseCensusData />`}>
    <UseCensusData />
  </DesignSystemPanel >
</BasePage>
