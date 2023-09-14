<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import CardComp from "$lib/components/cardCom.svelte";
  import { Dcodes } from '../../Store.js';

  
  export let payload 

  Dcodes.subscribe((data)=>{
    payload = data
    console.log("payload:", payload)
  })

</script>


<CardComp {payload} />


<div>
  {#each payload as item}
    <div>
    {item.key} - {item.value} 
    </div>  
{/each}
</div>

