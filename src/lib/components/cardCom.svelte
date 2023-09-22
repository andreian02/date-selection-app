<script>
    export let payload
</script>


<!-- Product List -->

<section class="py-10 bg-gray-10">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each payload as item} 
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="m-2 flex gap-4 items-center">
          <img class="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
          <div>
            <h3 class="text-lg font-medium text-gray-700 dark:text-white">{item.date}</h3>
            <span class="text-sm tracking-wide text-gray-600 dark:text-gray-400">{item.dayEl}</span>
          </div>
        </div>
      
        <div class="rounded-[calc(1.5rem-1px)] p-4 bg-white dark:bg-gray-900">
        <p class="text-gray-700 dark:text-gray-300">{item.gValue}</p>  
        <p class="text-gray-700 dark:text-gray-300">{item.zValue}</p>  
        <button class="text-sm">...</button>    
      </a>
    </article>
    {/each}
  </div>
</section>


