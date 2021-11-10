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
  import Topic from "../ui/Topic.svelte";
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
        { subcategoryTitle: "General health", subcategoryList: ["Very good", "Good", "Fair", "Bad", "Very bad"] },
        {
          subcategoryTitle: "Effect of long-term ill health...",
          subcategoryList: ["Not limited", "Limited a little", "Limited a lot"],
        },
      ],
    },
  ];

  let topicList1 = [
    { title: "How does general health differ across England and Wales?", href: "#" },
    { title: "Which areas are home to peoplle who provide the most unpaid care?", href: "#" },
    { title: "What can we learn about long-term health issues and/or disability?", href: "#" },
  ];

  let topicList2 = [{ title: "Get Census datasests", href: "#" }];
</script>

<svelte:head>
  <script defer src="/build/ons-design-system.js"></script>
</svelte:head>

<ONSHeader />
<ONSCensusApp>
  <h2>Backlink</h2>
  <ONSBacklink href="/monkeys" />

  <h2>Breadcrumbs</h2>
  <ONSBreadcrumbs>
    <ONSBreadcrumb href="/home">Home</ONSBreadcrumb>
    <ONSBreadcrumb href="/home/layer-1">Layer 1</ONSBreadcrumb>
  </ONSBreadcrumbs>

  <h2>Button</h2>

  <p><ONSButton onClick={() => alert("Custom on click handler")}>Custom onclick handler</ONSButton></p>
  <p><ONSButton secondary>Secondary</ONSButton></p>
  <p><ONSButton small>Small</ONSButton></p>
  <p><ONSButton secondary small>Secondary small</ONSButton></p>
  <p><ONSButton disabled>Disabled</ONSButton></p>

  <h2>Card</h2>

  <ONSCard title="ONS Card" href="/home">Card</ONSCard>

  <h2>Checkboxes</h2>

  <ONSCheckboxes>
    <ONSCheckbox id="mobile">Mobile</ONSCheckbox>
    <ONSCheckbox id="laptop">Laptop</ONSCheckbox>
    <ONSCheckbox id="tablet">Tablet</ONSCheckbox>
  </ONSCheckboxes>

  <ONSCollapsible title="Collapsible">
    <span>here is the collapsible content</span>
  </ONSCollapsible>

  <h2>Input</h2>
  <ONSTextField id="text-field">Text field</ONSTextField>

  <h2>Select</h2>
  <ONSSelect
    label="Select city"
    options={[
      { value: "london", label: "London" },
      { value: "bristol", label: "Bristol", selected: true },
      { value: "oxford", label: "Oxford", disabled: true },
    ]}
  />

  <h2>Text area</h2>
  <ONSTextArea id="text-area" hint="this is a hint for text area">Text area</ONSTextArea>

  <h2>Radios</h2>
  <ONSRadios name="ethnicity">
    <ONSRadio id="asian">Asian</ONSRadio>
    <ONSRadio id="black">Black</ONSRadio>
    <ONSRadio id="mixed">Mixed</ONSRadio>
    <ONSRadio id="white">White</ONSRadio>
    <ONSRadio id="other">Other</ONSRadio>
    <p>anything</p>
  </ONSRadios>

  <ONSAccordion {dataToConsume} />

  <h2>Share</h2>
  <ONSShare url="https://www.google.com/">Share this page</ONSShare>

  <h2>Topic Component-1</h2>

  <Topic topicList={topicList1} cardTitle="Health - Census 2021"
    >The 2021 Census tells us a lot about the health of people living in England and Wales live and. <a href="#">
      Choose a data option from the full list</a
    > or explore one of these suggestions.</Topic
  >

  <h2>Topic Component-2</h2>

  <Topic topicList={topicList2} cardTitle="Need something specific from Census?"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.</Topic
  >

  <h2>Topic Component-3</h2>

  <Topic cardTitle="General health with other indicators"
    >Explore correlations between two indicators in <a href="#">advanced mode</a>.</Topic
  >
</ONSCensusApp>

<style lang="scss" global>
  /* @import '../../node_modules/@ons/design-system/scss/main.scss';
     * XXX: This fails for many reasons. Sticking to global CSS for now with only variables exposed via SCSS. */
  @import "../../node_modules/@ons/design-system/css/census";
  @import "../../node_modules/@ons/design-system/scss/vars/_index.scss";
</style>
