<script>
	import { slide } from "svelte/transition";
	export let i;
	export let show;
	export let showCollapse;
	export let item;
</script>

<style>
	.collapse__header {
	  padding: 1rem;
      text-align: center;
	  
	  transition: background 200ms ease-in-out;
	}
	.collapse__header:hover {
	  background: #f7f7f7;
      fill-opacity: 1;
	}
	.collapse__body {
	  padding: 1rem;
	  /* background: #2b6cb0; */
    
	}
</style>

<div class="collapse__header" on:click={showCollapse(i)}>
		{item}
</div>
{#if show === i}
	<div class="collapse__body bg-opacity-50" transition:slide>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper augue mauris. Integer eu libero non lorem bibendum sodales vel accumsan massa. Morbi ut porta elit, vel 					lacinia erat. Aliquam vel lorem facilisis, laoreet odio quis, ullamcorper arcu. Nullam commodo pretium erat at dictum. Donec vehicula facilisis scelerisque. Vestibulum auctor.
	</div>
{/if}