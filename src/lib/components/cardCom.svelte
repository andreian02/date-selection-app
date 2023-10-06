<!-- cards landing -->
<script>
    export let payload
    import { logoHandle } from "./logoHandle";

    let path = '/devCards/'
    let logofiller = [];


    function setURL(){
      for (let i =0; i<payload.length; i++){
        let dayElement = payload[i].dayEl
        //console.log("index:", i,"Day Element:", dayElement)
        let elementlink = logoHandle(dayElement)
        //console.log(elementlink)
        logofiller.push({id:payload[i].andex,
                    eLink:elementlink,
        })
      } return logofiller
    } 
    logofiller = (setURL(payload))
    //console.log("logo:" ,logofiller)

    

</script>


<!-- Individual Result-->
<section class="py-10 bg-gray-10">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each payload as item1 (item1.andex)}
      {#each logofiller as item2 (item2.id)}
        {#if item1.andex === item2.id}
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
            <a href={path + item1.andex}>
              <div class="m-2 flex gap-4 items-center">
                <img class="h-12 w-12 rounded-full" alt="element" src={item2.eLink} />
                <div>
                  <h3 class="text-lg text-sm text-gray-700 dark:text-white">{item1.andex} ▶ {item1.date}</h3>
                  <span class="text-sm tracking-wide text-gray-600 dark:text-gray-400">TBC</span>
                </div>
              </div>

              <div class="rounded-[calc(1.5rem-1px)] p-4 bg-white dark:bg-gray-900">
                <p class="text-gray-700 dark:text-gray-300">{item1.gValue}</p>  
                <p class="text-gray-700 dark:text-gray-300">{item1.zValue}</p>  
                <button class="text-sm">...</button>    
              </div>
            </a>
          </article>
        {/if}
      {/each}
    {/each}
  </div>
</section>


