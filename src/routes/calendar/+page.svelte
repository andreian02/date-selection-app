<script>
    
    import CalendarForm from '$lib/components/calendarFormV2.svelte';
    
</script>



<svelte:head>
	<title>Calendar</title>
	<meta name="description" content="Date Selection App" />
</svelte:head>



<section>
	<picture>
		<img src='https://i.pinimg.com/564x/4b/d7/b5/4bd7b55b6d72ba73b6a1fc0c8ffa62b1.jpg'
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
