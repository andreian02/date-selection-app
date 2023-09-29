<script>
    
    import CalendarForm from '$lib/components/calendarFormV2.svelte';
    
</script>



<svelte:head>
	<title>Calendar</title>
	<meta name="description" content="Calendar App" />
</svelte:head>

<section>
    <CalendarForm/>
</section>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
