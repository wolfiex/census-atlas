
<!-- Script autogenerated by Svelte-Jinja (author: Dan Ellis) -->

<!-- Use templates folder to update -->


<main>
    

  <main transition:fly={{x: '100%', opacity: 1}}>
  <nav style="{side==='left'?'left':'right'}:0;">
    <div>
    <slot name='head' style='left:0'>  </slot>
    <button style='position:absolute;right:0' on:click={() => show = !show} >{show? `hide ${desc} ` : ` show ${desc}` }</button>
    </div>

    {#if show}
    <slot></slot>
    {/if}
  </nav>
  </main>

</main>


<script>
    import { fly } from 'svelte/transition';
export let show = true;
export let side ='left';
export let desc = 'panel';

</script>


<style>
    
main{height:40%;}

	main nav{
		box-sizing: border-box;
		padding: 24px;
		height:auto;
		z-index: 2;
		width: auto;
    max-width:30%;
    min-width: 150px;
		position: absolute;
	}
	@media (max-width: 970px) {
		main nav{
			/* width: 30%; */

		}
	}
	@media (max-width: 670px) {
		main nav {
			width: auto;
			top: 70%;
      display:block;
		}
	}

    nav {
      border-radius:8px;
      position: fixed;
      top: 0;
      height: auto;
      padding: 2rem 1rem 0.6rem;
      /* border-left: 1px solid #aaa; */
      background: #fff;
      overflow-y: auto;
      display: inline-block;

	     /* width: 10rem; */
}

button{
    width:auto;
    color:steelblue;
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
