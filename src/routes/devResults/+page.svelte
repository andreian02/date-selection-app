<!-- this is result page.  -->
<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import { Dcodes, doorSector, homeowners, yearKeys, protocolMode } from '../../Store.js';
  import {answersheet, transistor, checkElement, version1, version2, version3, version4, version5} from '../../Utils.js'
  import {defaultDates, jieQidetect} from '../../dtools.js'

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

  //let 合1 = ""
  // let 冲1 = ""
  // let 合2 = ""
  // let 冲2 = ""

  // let 合3 = ""
  // let 冲3 = ""
  // let 合4 = ""
  // let 冲4 = ""
  let currentMode;
  let protocol;
  let period;
  let result_details;

  protocolMode.subscribe((data)=>{
    protocolM = data
  })




  console.log("$PAYLOD:", payload, )
  period = jieQidetect(payload) // insert period to result table. 
  
  console.log("check protocol:", protocolM)
  if (protocolM == "protocol-one"){
      let protocolone = true
      let currentMode = "one"
      console.log(protocolone, currentMode)
  } 



  console.log("check for default dates")
  

  console.log("b-year",birthYear, "length:", birthYear.length)
  if (birthYear.length >1){
    protocol = defaultDates(birthYear)
    console.log("Testing cheatsheet and answersheet g1", birthYear[0].gYear)
    console.log("Testing cheatsheet and answersheet z1", birthYear[0].zYear)
    console.log("Testing cheatsheet and answersheet g2", birthYear[1].gYear)
    console.log("Testing cheatsheet and answersheet z2", birthYear[1].zYear)

  } else {
    console.log("Testing cheatsheet and answersheet g1", birthYear[0].gYear)
    console.log("Testing cheatsheet and answersheet z1", birthYear[0].zYear)
  }
  

  console.log("----------------------------------------------------")
  result_details = transistor(birthYear)
  
  // console.log("--rddd-------------------------------------------------")
  // console.log(result_details)

  // let 合_1 = answersheet(birthYear[0].gYear).合
  // let 冲_1 = answersheet(birthYear[0].gYear).冲

  // let 合_2 = answersheet(birthYear[1].gYear).合
  // let 冲_2 = answersheet(birthYear[1].gYear).冲

  // let 合_3 = answersheet(birthYear[0].zYear).L合
  // let 冲_3 = answersheet(birthYear[0].zYear).冲

  // let 合_4 = answersheet(birthYear[1].zYear).L合
  // let 冲_4 = answersheet(birthYear[1].zYear).冲

  
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
    
  }

  //Analying Tiangan
  //version2(payload, birthYear, 合_1,合_2,冲_1,冲_2) //version2 is to check 天干 合/冲 关系
  
  // //default runs
  // version1(payload)

  // version2(payload, birthYear)
  // version3(payload, birthYear) //version3 is to check 地支 合/冲 关系
  // version4(payload, birthYear) //version4 is to check 地支 三合/三会 关系
  // version5(payload, birthYear) //version5 is to check 地支 刑,破,害 关系

</script>

{#if protocolM == 'protocol-one'}
  <ResultTable {payload} {protocolM}/>
{:else}
  <ResultTable {payload} {sector} {sectorElement} {keys} {birthYear}/>
{/if}

<div class="m-4">
<p>sector: {sector} | {sectorElement}</p>

<!-- <p>Owner1: {keys[0]}  ({birthYear[0].gYear}|{birthYear[1].gYear}) </p> 
<p>Owner2: {keys[1]}  ({birthYear[0].zYear}|{birthYear[1].zYear}) </p> -->

{#if birthYear.length >1}

<ul>
  <p>Owner1: {keys[0]}  ({birthYear[0].gYear}|{birthYear[1].gYear}) </p> 
  <p>Owner2: {keys[1]}  ({birthYear[0].zYear}|{birthYear[1].zYear}) </p>
</ul>

{:else}
  <p>Owner1: {keys[0]}  ({birthYear[0].gYear})</p> 
  <p>Owner2: {keys[1]}  ({birthYear[0].zYear})</p>
{/if}

</div>


<div class="m-4">

    <div>Select Date / DayE / HStm / O1 & O2 / Analysis Score / DrE </div> 
    {#each payload as item}
      <div>
        {#if protocolM == 'protocol-one'}
          P1:
          P2: 
        {:else}
        {item.date}·({item.dayEl})
        -
        门: {sectorElement} 
        -
        {item.gValue}·{item.zValue} 
        -
          {#if birthYear.length >1}
              P1: {birthYear[0].gYear}{birthYear[0].zYear} · P2: {birthYear[1].gYear} {birthYear[1].zYear}
          {:else}
              P1: {birthYear[0].gYear}{birthYear[0].zYear}
          {/if}

          天干关系: {item.天干合冲}·{item.天干六合}·{item.天干合关系}
          地支关系: {item.地支合冲}·{item.地支合五行}·{item.地支合关系}
          地支关系: {item.地支三合三会五行}·{item.地支三合三会关系}
          地支关系: {item.地支三刑}·{item.地支破害}·{item.地支自刑}
        {/if}

      </div>  
    {/each}
</div>








