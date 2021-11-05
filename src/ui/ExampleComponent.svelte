<script>
    import ONSButton from "./ons/ONSButton.svelte"
/**
 * Example Component props
 */
export let text;
</script>

<div class="example-component">
    {text}
    <ONSButton>Click me</ONSButton>
</div>

<style>
    .example-component {
        background-color: aqua;
    }
</style>