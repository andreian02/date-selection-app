<script>
    export let payload
    export let keys
    export let sector
    export let birthYear
    export let sectorElement
    export let period
    export let protocolM

    
    // function filterData() {
    //   return payload.filter((item) => item.dayEl != "金");}

    //   payload = filterData()    
</script>


<div class="p-6 flex">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">择日 ｜ Date Selection Results</h2>
        <h4 class="font-medium text-gray-600 m-2">
          Input Details:
        </h4>
        {#if protocolM == 'protocol-one'}
          <p class="mx-2 mb-6"></p>
        {:else}
        <p class="text-gray-500 m-2">
          Person 1 DOB: {keys[0]}
        </p>
        <p class="text-gray-500 m-2">
          Person 2 DOB: {keys[1]}
        </p>
        <p class="text-gray-500 mx-2 mb-6">
          Door Sector: {sector} | {sectorElement}
        </p>
        {/if}
        <!-- <p class="text-gray-500 mx-2 mb-6">
          Current Period: {period}
        </p> -->
  
  
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                      <th scope="col" class="text-center px-4 py-4">
                        Date (五行)
                      </th>
                      <th scope="col" class="px-4 py-4">
                        年 月 日 时
                      </th>
                      <th scope="col" class="px-4 py-4">
                        命主 (年柱)
                      </th>
                      <th scope="col" class="px-4 py-4">
                        TBC 1
                      </th>
                      <th scope="col" class="px-4 py-4">
                        TBC 2
                      </th>
                      <th scope="col" class="px-4 py-4">
                        TBC 3
                      </th>
                      <th scope="col" class="px-4 py-4">
                        TBC 4
                      </th>
                      <th scope="col" class="px-4 py-4">
                        Score
                      </th>
                  </tr>
                
              </thead>
              <tbody>
                {#each payload as item} 
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-4 py-4 text-xs text-center text-gray-700 whitespace-nowrap dark:text-white">
                        <p>{item.date} ({item.dayEl})</p>
                      </th>
                      <td class="px-4 py-4 text-base">
                        <p>{item.gValue}</p>
                        <p>{item.zValue}</p>
                      </td>
                      <td class="px-4 py-4 text-base">
                        {#if protocolM == 'protocol-one'}
                          <p></p>
                        {:else}
                        {#if birthYear.length >1}
                            <p>{birthYear[0].gYear}·{birthYear[1].gYear}</p>
                            <p>{birthYear[0].zYear}·{birthYear[1].zYear}</p>
                        {:else}
                            <p>{birthYear[0].gYear}</p>
                            <p>{birthYear[0].zYear}</p>
                        {/if}
                        {/if}
                      </td>
                      <td class="px-4 py-4 text-base">
                        {item.score}
                      </td>
                      <td class="px-4 py-4 text-base">
                        xxx
                      </td>
                      <td class="px-4 py-4 text-base">
                        yyy
                      </td>
                      <td class="px-4 py-4 text-base">
                        zzz
                      </td>
                      <td class="px-4 py-4 text-base">
                        {item.score}
                      </td>
                  </tr>
                  {/each}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>