<!-- this is result page.  -->
<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import { Dcodes, doorSector, homeowners, yearKeys, protocolMode } from '../../Store.js';
  import {answersheet, transistor, version1, version2, version3, version4, version5, cleanup} from '../../Utils.js'
  import {checkElement} from '../../helper.js'
  import {defaultDates, jieQidetect} from '../../dtools.js'
	import NewTable from "$lib/components/newTable.svelte";

  export let sector
  export let payload 
  export let keys
  export let birthYear
  export let protocolM

  console.log("--------------------------------")
  console.log("Result Table:")
 
  homeowners.subscribe((data)=>{
    keys = data
    console.log("Owner1:", keys[0], "Owner2:", keys[1] )
  })

  doorSector.subscribe((data)=>{
    sector = data
    console.log("sector:", sector)
  })

  Dcodes.subscribe((data)=>{
    payload = data
    console.log("payload:", payload)
  })

  yearKeys.subscribe((data)=>{
    birthYear = data
  })

 
  // export let data
  let sectorElement = checkElement(sector)


  let protocol;
  let period;
  let result_details;

  protocolMode.subscribe((data)=>{
    protocolM = data
  })


  console.log("$PAYLOD:", payload, )
  //period = jieQidetect(payload) // insert period to result table. 
  
  console.log("check protocol:", protocolM)
  if (protocolM == "protocol-one"){
      let protocolone = true
      console.log(protocolone)
  } 


  console.log("check for default dates")
  
  console.log("b-year",birthYear, "length:", birthYear.length)
  

  console.log("----------------------------------------------------")
  result_details = transistor(birthYear)
  
  console.log('p:',protocolM)
  if (protocolM === 'protocol-one'){
      console.log("running protocol 1")
      version1(payload)

  } 
  else {
    console.log("running protocol 2")
    version1(payload)
    version2(payload, birthYear)
    version3(payload, birthYear) //version3 is to check 地支 合/冲 关系
    version4(payload, birthYear) //version4 is to check 地支 三合/三会 关系
    version5(payload, birthYear) //version5 is to check 地支 刑,破,害 关系

    console.log("doing clean up")
    cleanup(payload)
    
  }

</script>

<!-- {#if protocolM == 'protocol-one'}
  <ResultTable {payload} {protocolM}/>
{:else}
  <ResultTable {payload} {sector} {sectorElement} {keys} {birthYear}/>
{/if} -->

<!-- <ResultTable {payload} {sector} {sectorElement} {keys} {birthYear}/> -->
<NewTable {payload} {sector} {sectorElement} {keys} {birthYear}/>

<!-- <div class="m-4">
<p>sector: {sector} | {sectorElement}</p>
{#if birthYear.length >1}
<ul>
  <p>Owner1: {keys[0]}  ({birthYear[0].gYear}|{birthYear[1].gYear}) </p> 
  <p>Owner2: {keys[1]}  ({birthYear[0].zYear}|{birthYear[1].zYear}) </p>
</ul>
{:else}
  <p>Owner1: {keys[0]}  ({birthYear[0].gYear})</p> 
  <p>Owner2: {keys[1]}  ({birthYear[0].zYear})</p>
{/if}
</div> -->









