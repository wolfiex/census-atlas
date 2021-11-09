
<script>
    export let dataToConsume;
</script>

<div id="accordion" class="ons-accordion">
    <button type="button" class="ons-btn ons-js-collapsible-all ons-u-mb-s ons-u-d-no ons-btn--secondary ons-btn--small" data-close-all="Hide all" data-group="accordion">
        <span class="ons-btn__inner ons-js-collapsible-all-inner">Show all</span>
    </button>
    {#each dataToConsume as indicator}
    <div id="accordion-1" class="ons-collapsible ons-js-collapsible ons-collapsible--accordion" data-btn-close="Hide" data-group="accordion">
        <div class="ons-collapsible__heading ons-js-collapsible-heading">
            <div class="ons-collapsible__controls">
                <h2 class="ons-collapsible__title">{indicator.categoryTitle}</h2>
                <span class="ons-collapsible__icon">
          <svg class="ons-svg-icon " viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
            <path d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z" transform="translate(-5.02 -1.59)" />
          </svg>
        </span>
                <button type="button" class="ons-btn ons-collapsible__btn ons-js-collapsible-button ons-u-d-no ons-u-d-no@xxs@s ons-btn--secondary ons-btn--small">
                    <span class="ons-btn__inner ons-js-collapsible-button-inner">Show</span>
                </button>
            </div>
        </div>
        <div id="accordion-1-content" class="ons-collapsible__content ons-js-collapsible-content">
            {#each indicator.subcategory as subcategory}
            <h3 class="ons-related-links__title ons-u-fs-r--b ons-u-mb-xs">{subcategory.subcategoryTitle}</h3>
            <ul class="ons-list ons-list--bare">
                {#each subcategory.subcategoryList as finalIndicator}
                <li class="ons-list__item">
                    <a href="#" class="ons-list__link  ">{finalIndicator}</a></li>
                {/each}
            </ul>
            {/each}
        </div>
    </div>
    {/each}
</div>