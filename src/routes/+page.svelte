<script>
	import { goto } from '$app/navigation';    
	export let data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="mb-2 text-3xl font-bold tracking-tight md:text-5xl py-2">Hello World</h1>
			<picture class="flex">
				<img src='https://i.pinimg.com/564x/4b/d7/b5/4bd7b55b6d72ba73b6a1fc0c8ffa62b1.jpg'
				alt="welcome">
			</picture>

	<h2 class="font-semibold text-2xl text-black">择日</h2>
		<div class="h-10 text-gray-500 m-8 p-5 text-center items-center mt-2">
			<!-- <p>择日是将选日期人的出生干支信息与当日的五行干支信息进行运算，去掉冲、克、刑、害对自身不好的日子，挑选出生助自身的好日子。</p> -->
			<p class="text-center text-xl tracking-tight p-5">
				{data.Ldate} ·
				{data.Year}年 · {data.Month}月 · {data.Day}日
			</p>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      on:click={()=> goto('/calendar')}>
                      start
            </button>
		</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
		/* justify-content: center; */
	}

	h1 {
		width: 100%;
	}

	picture {
		width: 50%;
		height: 50%;
		top: 0;
		display: block;
	}
</style>
