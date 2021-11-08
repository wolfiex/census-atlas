<script>
    export let options = [];
</script>

<div class="ons-field">
    <label class="ons-label  " for="select">Question topic
    </label>
    <select id="select" name="select" class="ons-input ons-input--select">
        {#each options as option}
            <option value={option.value} selected={option.selected} disabled={option.disabled}>{option.label}</option>
        {/each}
    </select>
</div>