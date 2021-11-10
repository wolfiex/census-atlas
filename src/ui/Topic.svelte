<script>
  export let cardTitle = "";
  export let id = "card";
  export let topicList = [];
</script>

<div class="ons-card" aria-labelledBy="{id}-title" aria-describedBy="text">
  <h2 class="ons-u-fs-m" id="{id}-title">{cardTitle}</h2>
  <p id="{id}-text">
    <slot />
  </p>
  {#if topicList}
    <ul class="ons-list ons-list--bare">
      {#each topicList as topic}
        <li class="ons-list__item">
          <a href={topic.href} class="ons-list__link">{topic.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
