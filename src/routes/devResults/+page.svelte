<!-- this is result page.  -->
<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import { Dcodes, doorSector, homeowners, yearKeys } from '../../Store.js';
  import {answersheet, checkElement, version2, version3, version4, version5} from '../../Utils.js'

  export let sector
  export let payload 
  export let keys
  export let birthYear

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

 
  export let data
  let sectorElement = checkElement(sector)

  let 合1 = ""
  let 冲1 = ""
  let 合2 = ""
  let 冲2 = ""

  let 合3 = ""
  let 冲3 = ""
  let 合4 = ""
  let 冲4 = ""

  console.log("b-year",birthYear)
  console.log("Testing cheatsheet and answersheet g1", birthYear[0].gYear)
  console.log("Testing cheatsheet and answersheet z1", birthYear[0].zYear)
  

  let 合_1 = answersheet(birthYear[0].gYear).合
  let 冲_1 = answersheet(birthYear[0].gYear).冲

  let 合_2 = answersheet(birthYear[1].gYear).合
  let 冲_2 = answersheet(birthYear[1].gYear).冲

  let 合_3 = answersheet(birthYear[0].zYear).L合
  let 冲_3 = answersheet(birthYear[0].zYear).冲

  let 合_4 = answersheet(birthYear[1].zYear).L合
  let 冲_4 = answersheet(birthYear[1].zYear).冲

  
  //Analying Tiangan
  version2(payload, birthYear, 合_1,合_2,冲_1,冲_2) //version2 is to check 天干 合/冲 关系
  version3(payload, birthYear, 合_3,合_4,冲_3,冲_4) //version3 is to check 地支 合/冲 关系
  version4(payload, birthYear) //version4 is to check 地支 三合/三会 关系
  version5(payload, birthYear) //version5 is to check 地支 刑,破,害 关系
  
</script>


<ResultTable {payload} {sector} {sectorElement} {keys} {birthYear}/>


<div class="m-4">
<p>sector: {sector} | {sectorElement}</p>
<p>Owner1: {keys[0]}  ({birthYear[0].gYear}|{birthYear[1].gYear}) </p> 
<p>Owner2: {keys[1]}  ({birthYear[0].zYear}|{birthYear[1].zYear}) </p>
</div>



<div class="m-4">

    <div>Select Date / DayE / HStm / O1 & O2 / Analysis Score / DrE </div> 
    {#each payload as item}
      <div>
        {item.date}·({item.dayEl})
        -
        门: {sectorElement} 
        -
        {item.gValue}·{item.zValue} 
        -
        P1: {birthYear[0].gYear}{birthYear[0].zYear} · P2: {birthYear[1].gYear} {birthYear[1].zYear}
        
        天干关系: {item.天干合冲}·{item.天干六合}·{item.天干合关系}
        地支关系: {item.地支合冲}·{item.地支合五行}·{item.地支合关系}
        地支关系: {item.地支三合三会五行}·{item.地支三合三会关系}
        地支关系: {item.地支三刑}·{item.地支破害}·{item.地支自刑}

      </div>  
    {/each}
</div>








