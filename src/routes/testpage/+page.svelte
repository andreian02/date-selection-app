<script>
	import Newswitch from '$lib/components/newswitch.svelte';
	
	export let value = 'dark';
	let isSwitchedOn = false;

	function handleSwitch() {
    isSwitchedOn = !isSwitchedOn;
	console.log(isSwitchedOn)
  }

	
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>
	<br>

	<Newswitch bind:value={value} onSwitch={handleSwitch} label="Select Mode:"/>
 
</div>
