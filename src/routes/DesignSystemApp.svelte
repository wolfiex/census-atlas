<script>
  import ONSCensusApp from "../ui/ons/ONSCensusApp.svelte";
  import ONSAccordion from "../ui/ons/ONSAccordion.svelte";
  import ONSBacklink from "../ui/ons/ONSBacklink.svelte";
  import ONSBreadcrumbs from "../ui/ons/ONSBreadcrumbs.svelte";
  import ONSBreadcrumb from "../ui/ons/partials/ONSBreadcrumb.svelte";
  import ONSButton from "../ui/ons/ONSButton.svelte";
  import ONSCard from "../ui/ons/ONSCard.svelte";
  import ONSCheckboxes from "../ui/ons/ONSCheckboxes.svelte";
  import ONSCheckbox from "../ui/ons/partials/ONSCheckbox.svelte";
  import ONSCollapsible from "../ui/ons/ONSCollapsible.svelte";
  import ONSTextField from "../ui/ons/ONSTextField.svelte";
  import ONSRadios from "../ui/ons/ONSRadios.svelte";
  import ONSRadio from "../ui/ons/partials/ONSRadio.svelte";
  import ONSTextArea from "../ui/ons/ONSTextArea.svelte";
  import ONSShare from "../ui/ons/ONSShare.svelte";
  import ONSHeader from "../ui/ons/ONSHeader.svelte";
  import ONSSelect from "../ui/ons/ONSSelect.svelte";
  import CategorySelector from "../ui/CategorySelector.svelte";
  import Topic from "../ui/Topic.svelte";
  import ONSSkipLink from "../ui/ons/ONSSkipLink.svelte";
  import UseCensusData from "../ui/UseCensusData.svelte";
  import ExploreByTopic from "../ui/ExploreByTopic.svelte";
  import Feedback from "../ui/Feedback.svelte";
  import ExploreByAreaComponent from "../ui/ExploreByAreaComponent.svelte";
  import ONSExternalHeaderWithDescription from "../ui/ons/ONSExternalHeaderWithDescription.svelte"
  import DesignSystemCode from "../ui/DesignSystemCode.svelte";
  import DesignSystemPanel from "../ui/DesignSystemPanel.svelte";
  let hint = "This is a hint";
  let dataToConsume = [
    {
      categoryTitle: "Population Basics",
      subcategory: [
        {
          subcategoryTitle: "Residence Type",
          subcategoryList: [
            "Lives in a household",
            "Lives in a communal establishment",
            "Communal establishments with persons sleeping rough identified",
          ],
        },
      ],
    },
    {
      categoryTitle: "Health",
      subcategory: [
        {subcategoryTitle: "General health", subcategoryList: ["Very good", "Good", "Fair", "Bad", "Very bad"]},
        {
          subcategoryTitle: "Effect of long-term ill health...",
          subcategoryList: ["Not limited", "Limited a little", "Limited a lot"],
        },
      ],
    },
  ];

  let topicList1 = [
    {title: "How does general health differ across England and Wales?", href: "#"},
    {title: "Which areas are home to peoplle who provide the most unpaid care?", href: "#"},
    {title: "What can we learn about long-term health issues and/or disability?", href: "#"},
  ];

  let topicList2 = [{ title: "Get Census datasests", href: "#" }];
  let serviceTitle = "Design System";
  let serviceDescription = "Components implemented with Svelte";
  let topicList2 = [{title: "Get Census datasests", href: "#"}];
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<ONSSkipLink />
<ONSExternalHeaderWithDescription serviceTitle={serviceTitle} description={serviceDescription}/>
<ONSSkipLink/>
<ONSHeader/>

<ONSCensusApp>
  <DesignSystemPanel
    title="Backlink"
    code={`<ONSBacklink href="/home"/>`}>
    <ONSBacklink href="/home"/>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Breadcrumbs"
    code={`<ONSBreadcrumbs>
  <ONSBreadcrumb href="/home">Home</ONSBreadcrumb>
  <ONSBreadcrumb href="/home/layer-1">Layer 1</ONSBreadcrumb>
</ONSBreadcrumbs>`}>
    <ONSBreadcrumbs>
      <ONSBreadcrumb href="/home">Home</ONSBreadcrumb>
      <ONSBreadcrumb href="/home/layer-1">Layer 1</ONSBreadcrumb>
    </ONSBreadcrumbs>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Button"
    code={`<p>
    <ONSButton onClick={() => alert("Custom on click handler")}>Custom onclick handler</ONSButton>
  </p>
  <p>
    <ONSButton secondary>Secondary</ONSButton>
  </p>
  <p>
    <ONSButton small>Small</ONSButton>
  </p>
  <p>
    <ONSButton secondary small>Secondary small</ONSButton>
  </p>
  <p>
    <ONSButton disabled>Disabled</ONSButton>
  </p>`}>

    <p>
      <ONSButton onClick={() => alert("Custom on click handler")}>Custom onclick handler</ONSButton>
    </p>
    <p>
      <ONSButton secondary>Secondary</ONSButton>
    </p>
    <p>
      <ONSButton small>Small</ONSButton>
    </p>
    <p>
      <ONSButton secondary small>Secondary small</ONSButton>
    </p>
    <p>
      <ONSButton disabled>Disabled</ONSButton>
    </p>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Card"
    code={`<ONSCard title="ONS Card" href="/home">Card</ONSCard>`}>
    <ONSCard title="ONS Card" href="/home">Card</ONSCard>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Checkboxes"
    code={`<ONSCheckboxes>
  <ONSCheckbox id="mobile">Mobile</ONSCheckbox>
  <ONSCheckbox id="laptop">Laptop</ONSCheckbox>
  <ONSCheckbox id="tablet">Tablet</ONSCheckbox>
</ONSCheckboxes>`}>
    <ONSCheckboxes>
      <ONSCheckbox id="mobile">Mobile</ONSCheckbox>
      <ONSCheckbox id="laptop">Laptop</ONSCheckbox>
      <ONSCheckbox id="tablet">Tablet</ONSCheckbox>
    </ONSCheckboxes>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Collapsible"
    code={`<ONSCollapsible title="Collapsible">
  <span>here is the collapsible content</span>
</ONSCollapsible>`}>
    <ONSCollapsible title="Collapsible">
      <span>here is the collapsible content</span>
    </ONSCollapsible>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Input"
    code={`<ONSTextField id="text-field">Text field</ONSTextField>`}>
    <ONSTextField id="text-field">Text field</ONSTextField>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Select"
    code={`<ONSSelect
    label="Select city"
    options={[
      { value: "london", label: "London" },
      { value: "bristol", label: "Bristol", selected: true },
      { value: "oxford", label: "Oxford", disabled: true },
    ]}
  />`}>
    <ONSSelect
      label="Select city"
      options={[
      { value: "london", label: "London" },
      { value: "bristol", label: "Bristol", selected: true },
      { value: "oxford", label: "Oxford", disabled: true },
    ]}
    />
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Text area"
    code={`<ONSTextArea id="text-area" hint="this is a hint for text area">Text area</ONSTextArea>`}>
    <ONSTextArea id="text-area" hint="this is a hint for text area">Text area</ONSTextArea>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Radios"
    code={`  <ONSRadios name="ethnicity">
    <ONSRadio id="asian">Asian</ONSRadio>
    <ONSRadio id="black">Black</ONSRadio>
    <ONSRadio id="mixed">Mixed</ONSRadio>
    <ONSRadio id="white">White</ONSRadio>
    <ONSRadio id="other">Other</ONSRadio>
  </ONSRadios>`}>
    <ONSRadios name="ethnicity">
      <ONSRadio id="asian">Asian</ONSRadio>
      <ONSRadio id="black">Black</ONSRadio>
      <ONSRadio id="mixed">Mixed</ONSRadio>
      <ONSRadio id="white">White</ONSRadio>
      <ONSRadio id="other">Other</ONSRadio>
    </ONSRadios>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Accordion"
    code={`<ONSAccordion {dataToConsume} />`}>
    <ONSAccordion {dataToConsume}/>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Category selector"
    code={`<CategorySelector />`}>
    <CategorySelector />
  </DesignSystemPanel>
  
  <DesignSystemPanel
    title="Share"
    code={`<ONSShare url="https://www.google.com/">Share this page</ONSShare>`}>
    <ONSShare url="https://www.google.com/">Share this page</ONSShare>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="Topic Component-1"
    code={`<Topic topicList={topicList1} cardTitle="Health - Census 2021">
  The 2021 Census tells us a lot about the health of people living in England and Wales live and. 
  <a href="#">Choose a data option from the full list</a> or explore one of these suggestions.
</Topic>`}
  >
    <Topic topicList={topicList1} cardTitle="Health - Census 2021"
    >The 2021 Census tells us a lot about the health of people living in England and Wales live and. <a href="#">
      Choose a data option from the full list</a
    > or explore one of these suggestions.
    </Topic
    >
  </DesignSystemPanel>

  <DesignSystemPanel title="Topic Component-2" code={`<Topic topicList={topicList2} cardTitle="Need something specific from Census?">
    Explore correlations between two indicators in <a href="#">advanced mode</a>.
  </Topic>`}>
    <Topic topicList={topicList2} cardTitle="Need something specific from Census?"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.
    </Topic
    >
  </DesignSystemPanel>

  <DesignSystemPanel title="Topic Component-3" code={`<Topic cardTitle="General health with other indicators"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.</Topic
  >`}>

    <Topic cardTitle="General health with other indicators"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.
    </Topic
    >
  </DesignSystemPanel>

  <DesignSystemPanel title="Use Census Data" code={`<UseCensusData location="Crewe" />`}>
    <UseCensusData/>
  </DesignSystemPanel>

  <DesignSystemPanel title="Explore by Topic" code={`<ExploreByTopic />`}>
    <ExploreByTopic/>
  </DesignSystemPanel>

  <DesignSystemPanel title="Feedback" code={`<Feedback />`}>
    <Feedback/>
  </DesignSystemPanel>

  <DesignSystemPanel
    title="ONS search component"
    code={`<ExploreByAreaComponent>Search for an area to find out how it compares to others</ExploreByAreaComponent>`}
  >
    <ExploreByAreaComponent>Search for an area to find out how it compares to others</ExploreByAreaComponent>
  </DesignSystemPanel>

  <DesignSystemPanel title="Design system code block">
    <DesignSystemCode code={`<DesignSystemCode code={\`<App />\`} />`}/>
  </DesignSystemPanel>
</ONSCensusApp>

<Feedback/>

<style lang="scss">
  /* @import '../../node_modules/@ons/design-system/scss/main.scss';
   * XXX: This fails for many reasons. Sticking to global CSS for now with only variables exposed via SCSS. */
  @import "../../node_modules/@ons/design-system/scss/vars/_index.scss";

  h2 {
    margin-top: 32px;
  }
</style>
