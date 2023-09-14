<script>
	export let data

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="mb-2 text-3xl font-bold tracking-tight md:text-5xl py-2">Hello World</h1>

	<h1>
		<span>
			<picture class="items-center justify-center">
				<!-- <source srcset={welcome_sky} type="image/webp" /> -->
				<!-- <img src={welcome_fallback} alt="Welcome" /> -->
				<img src='https://images.unsplash.com/photo-1494537145451-0503649ed805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3264&q=80'
				alt="welcome">
			</picture>
		</span>		
	</h1>
	<br />
	
	<h2 class="font-semibold text-xl text-gray-600"> 择日系统 </h2>
	<div class="h-10 text-gray-500 mb-6 items-center mt-1">
		择日是将选日期人的出生干支信息与当日的五行干支信息进行运算，去掉冲、克、刑、害对自身不好的日子，挑选出生助自身的好日子。
	<p class="mb-2 text-center tracking-tight p-8">
		{data.Ldate} ·
		{data.Year}年 {data.Month}月 {data.Day}日
	</p>
	</div>

	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	picture {
		
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
