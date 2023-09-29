<script>
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
    {item.andex} - {item.date} 
    </div>  
{/each}
</div>

