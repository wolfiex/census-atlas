<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ExampleComponent from "./ExampleComponent.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Census Atlas/ExampleComponent"
  component={ExampleComponent}
  argTypes={{
    text: { control: "text" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ExampleComponent {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
  args={{
    text: "This is an Example Component",
  }}
/>
