<script>
	import { goto } from '$app/navigation'; 
	import  logo2  from '$lib/images/logo.png'   
	export let data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Date Selection App" />
</svelte:head>

<section>
	<!-- <h1 class="text-3xl font-bold tracking-tight md:text-5xl py-2">Hello World</h1> -->
			<picture class="flex">
				<img src={logo2}
				alt="welcome">
			</picture>

	<h2 class="font-semibold text-2xl text-black">择日</h2>
		<div class="h-10 text-gray-500 m-8 p-5 text-center items-center mt-2">
			<!-- <p>择日是将选日期人的出生干支信息与当日的五行干支信息进行运算，去掉冲、克、刑、害对自身不好的日子，挑选出生助自身的好日子。</p> -->
			<p class="text-center text-xl tracking-tight p-5">
				<li>{data.Ldate}</li>
				<li>{data.Year}年 · {data.Month}月 · {data.Day}日 · {data.Time}时</li>
			</p>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
					on:click={()=> goto('/calendar')}>
					Start
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

	/* h1 {
		width: 100%;
	} */

	li {
  		list-style-type: none;
	}

	picture {
		width: 40%;
		height: 40%;
		top: 0;
		display: block;
	}
</style>
