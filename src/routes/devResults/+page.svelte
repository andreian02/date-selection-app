<!-- this is result page.  -->

<script>
  import ResultTable from "$lib/components/resultTable.svelte";
  import { Dcodes, doorSector, homeowners, yearKeys } from '../../Store.js';

  import {checkElement, version2, version3, version4, version5} from '../../Utils.js'

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


  let stemName1 = birthYear[0].gYear
  let stemName2 = birthYear[1].gYear

  let stemName3 = birthYear[0].zYear
  let stemName4 = birthYear[1].zYear

  
  合1 = (data.stemMap.queryProperty(stemName1, '合' ))
  冲1 = (data.stemMap.queryProperty(stemName1, '冲' ))
  合2 = (data.stemMap.queryProperty(stemName2, '合' ))
  冲2 = (data.stemMap.queryProperty(stemName2, '冲' ))

  合3 = (data.stemMap.queryProperty(stemName3, 'L合' ))
  冲3 = (data.stemMap.queryProperty(stemName3, '冲' ))
  合4 = (data.stemMap.queryProperty(stemName4, 'L合' ))
  冲4 = (data.stemMap.queryProperty(stemName4, '冲' ))
  
  // console.log('############################')
  // console.log(合1,合2,冲1,冲2)
  // console.log(合3,合4,冲3,冲4)

  //Analying Tiangan
  version2(payload, birthYear, 合1,合2,冲1,冲2)
  version3(payload, birthYear, 合3,合4,冲3,冲4)
  version4(payload, birthYear)
  version5(payload, birthYear)
  
</script>


<ResultTable {payload}, {sectorElement} {keys} {birthYear}/>





<div class="m-4">
<p>sector: {sector} | {sectorElement}</p>
<p>Owner1: {keys[0]}  ({birthYear[0].gYear}|{birthYear[1].gYear}) </p> 
<p>Owner2: {keys[1]}  ({birthYear[0].zYear}|{birthYear[1].zYear}) </p>
</div>



<div class="m-4">
  
    <div>Select Date / DayE / HStm / O1 & O2 / Analysis Score / DrE </div> 
    {#each payload as item}
    <div>
     {item.date} - {item.dayEl} 
     -
     门卦:  {sectorElement} 
     -
      {item.gValue} / {item.zValue} 
     -
     Owner 1: {birthYear[0].gYear} {birthYear[0].zYear} - Owner 2: {birthYear[1].gYear} {birthYear[1].zYear}
     - 天干关系: {item.tganhe} {item.chonghe1}
       地支关系: {item.dzhihe} {item.chonghe2}
    </div>  
{/each}
</div>








