<script>
import { fly } from 'svelte/transition';
export let show = true;

</script>

<style>
	main nav{
		box-sizing: border-box;
		padding: 24px;
		z-index: 2;
		width: 40%;
		position: absolute;
	}
	@media (max-width: 900px) {
		main nav{
			width: 50%;
		}
	}
	@media (max-width: 670px) {
		main nav {
			width: 100%;
			top: 70%;
		}
	}
    
    nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      padding: 2rem 1rem 0.6rem;
      border-left: 1px solid #aaa;
      background: #fff;
      overflow-y: auto;
      display: inline-block;
      
	     /* width: 10rem; */
}

button{
    width:25px;
    height:25px;
    border:1px black;
    position:relative;
    display:inline-block;
    top:0;
    z-index: 1000;
    /* left:auto; */
    /* right:0px; */
}

</style>

<!-- <main>
	<slot></slot>
</main> -->


{#if show}
  <main>
  <nav transition:fly={{x: '100%', opacity: 1}}>
    <slot></slot>
  </nav>
  </main>
{/if}
<button on:click={() => show = !show} >{show? '<' : '>' }</button>
