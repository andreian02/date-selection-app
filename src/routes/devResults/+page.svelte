<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import { Dcodes, doorSector, homeowners, yearKeys } from '../../Store.js';

  export let sector
  export let payload 
  export let keys
  export let birthYear


  console.log("Result Table")

  doorSector.subscribe((data)=>{
    sector = data
    console.log("sector:", sector)
  })

  Dcodes.subscribe((data)=>{
    payload = data
    console.log("payload:", payload)
  })
 
  homeowners.subscribe((data)=>{
    keys = data
    console.log("Owner1:", keys[0], "Owner2:", keys[1] )
  })

  yearKeys.subscribe((data)=>{
    birthYear = data
  })


</script>


<ResultTable {payload}, {sector} {keys} {birthYear}/>


<div>
  {#each payload as item}
    <div>
     {item.key} - {item.value} 
    </div>  
{/each}
</div>



