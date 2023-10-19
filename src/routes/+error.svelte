<script>
    import { page } from "$app/stores";
    import { goto } from '$app/navigation';
    import  logo  from '$lib/images/logo.png'   
    //console.log($page.error.message)
  </script>
  
 
  <div class=" text-center sm:flex-row">
    <section class="p-8 border-gray-500 rounded">
        <picture>
            <img src={logo}
                    alt="welcome">
        </picture>

        <h1 class="text-center text-4xl">{$page.status}</h1>
        <p class="pb-8">Internal Error</p>

       
        <button class="text-center bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
                on:click={()=> goto("/calendar")}>Go Back
		</button>
    </section>
</div>


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
