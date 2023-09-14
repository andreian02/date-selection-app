<script>
    export let payload
    export let keys
    export let sector
    export let birthYear
    
</script>


<div class="p-6 flex">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">择日 ｜ Date Selection Results</h2>
        <h4 class="font-medium text-gray-600 m-2">
          Input Details:
        </h4>
        <p class="text-gray-500 m-2">
          Person 1 Details: {keys[0]}
        </p>
        <p class="text-gray-500 m-2">
          Person 2 Details: {keys[1]}
        </p>
        <p class="text-gray-500 mx-2 mb-6">
          Door Sector: {sector}
        </p>
  
  
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                      <th scope="col" class="text-center px-6 py-4">
                        Date (五行)
                      </th>
                      <th scope="col" class="px-6 py-4">
                        年 - 月 - 日 - 时
                      </th>
                      <th scope="col" class="px-6 py-4">
                        命主 (年柱)
                      </th>
                      <th scope="col" class="px-6 py-4">
                        门方为
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Category2
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Placeholder
                      </th>
                  </tr>
                
              </thead>
              <tbody>
                {#each payload as item} 
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 text-xs text-center text-gray-700 whitespace-nowrap dark:text-white">
                        <p>{item.detail} ({item.dayEl})</p>
                        
                      </th>
                      <td class="px-6 py-4 text-base">
                        <p>{item.hvalue}</p>
                        <p>{item.evalue}</p>
                      </td>
                      <td class="px-6 py-4 text-base">
                        <p>{birthYear[0].hYear} | {birthYear[1].hYear}</p>
                        <p>{birthYear[0].eYear} | {birthYear[1].eYear}</p>
                      </td>
                      <td class="px-6 py-4 text-base">
                        {item.door}
                      </td>
                  </tr>
                  {/each}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>