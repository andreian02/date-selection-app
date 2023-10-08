<script>
	import  logo  from '$lib/images/logo.png'   
    import CalendarForm from '$lib/components/calendarFormV2.svelte';
</script>


<svelte:head>
	<title>Calendar</title>
	<meta name="description" content="Date Selection App" />
</svelte:head>


<section>
	<picture>
		<img src={logo}
				alt="welcome">
	</picture>
    <CalendarForm/>
</section>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.1;
	}

	picture{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20%;
		width: 20%;
		
	}

</style>
