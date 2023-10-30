<script>
	import { blur } from 'svelte/transition';
	import Header from '../lib/components/Header.svelte';
	import Analytics from "$lib/+analytics.svelte";
	// import './styles.css';
	import "../app.css";
	export let data
</script>
{#key data.pathname}
<div in:blur={{ duration: 400, delay: 600, amount: 5 }} out:blur={{ duration: 400 }}>
	<div class="app">
		<Header />

		<main>
			<Analytics />
			<slot />
		</main>

		<footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
			<span class="text-sm">© 2023 Andrei Lim</span>
		</footer>
	</div>
</div>
{/key}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
