<script>
	import { socials } from '$lib/site-config';
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>


<div class="text-column">
	<div class="flex flex-col items-center p-10">
		<img class="mb-3 w-24 h-24 rounded-full shadow-lg" alt="profile" src="https://avatars.githubusercontent.com/u/36339564?v=4">
		<h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Andrei Lim</h3>
		<span class="text-sm text-gray-500 dark:text-gray-400">Developer</span>
		<div class="flex justify-center mt-5">
			{#each socials as { title, link }}
			<a href={link} class="text-blue-500 hover:text-blue-700 mx-3">{title}</a>
			{/each}
		</div>
		  <div class="m-10">
			<h3 class="text-xl font-semibold">About this App</h3>
			<p class="text-gray-600 mt-2">
				This app is designed to help you make life's most significant transitions with confidence by identifying the perfect auspicious dates for your move-in or other important life events.
			</p>
		  </div>
	</div>
</div>
