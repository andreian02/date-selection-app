<!-- individual card page -->

<script>
    import { goto } from '$app/navigation';    
    import { Dcodes, homeowners, protocolMode } from '../../../Store';
    import { jieQistrength } from '../../../dtools.js'
    
    
    import { page } from '$app/stores'
    import { Lunar } from 'lunar-javascript'

    import { logoHandle } from "$lib/components/logoHandle";

    const cardId = parseInt($page.params.id)


    export let keys
    export let payload
    export let protocolM
    export let dayPayload
    //export let logofiller 

    protocolMode.subscribe((data)=>{
    protocolM = data
    })
    
    Dcodes.subscribe((data)=>{
    payload = data
    
    //console.log(payload)
    })

    homeowners.subscribe((data)=>{
    keys = data
    console.log("Owner1:", keys[0], "Owner2:", keys[1] )
   })


    function getDatesById(cardId) {
      for (const item of payload) {
        
        if (item.andex === cardId) {
          console.log("Individual payload result")
          return item;
          

        }
      }
      return null;
    }

    function getUrl(payload){
      let index = (cardId)
      let elem = (payload[index]['dayEl'])
      //console.log("d:",index)
      //console.log("s:", elem)
      let url = logoHandle(elem)
      //console.log(url)
      return url 
      
    }

    function getDetails(payload){
      let index = (cardId)
      //console.log("ddd:",index)
      let r = payload.filter(payload => payload.andex === index);
      let t0 = r[0]['gValue']
      let z0 = r[0]['zValue']
      console.log("tgdz:", r[0]['gValue'], r[0]['zValue'])
      return {
       t0,z0
      }
    }

    const result = getDatesById(cardId)
    console.log(result)
    console.log("Mode:", protocolM)
    console.log("RESULT DATE:",result.date)


    dayPayload = jieQistrength(result)
    console.log("day:")
    console.log(dayPayload)
    console.log('SCORE:',dayPayload.d4.reOrderSeq)
    const jsonString = JSON.stringify(dayPayload.d4.reOrderSeq, null, 2);
    console.log('string:',jsonString);


    const score = dayPayload.d4.reOrderSeq 
    for (const key in score) {
      if (score.hasOwnProperty(key)) {
        score[key] = Math.round(score[key]) + 3;
      }
    }
    console.log("mscore:", score)

    let e_data =[]
    e_data.push(score)


    let  url = getUrl(payload)
    const detail = getDetails(payload)
    
    const [day, month, year] = (result.date).split('/').map(Number);
    const dateObject = new Date(year, month - 1, day); // Month is 0-based, so we subtract 1
    //const dateObject = new Date(result.date);
    //console.log('dateobject:', dateObject)
    
    var d = Lunar.fromDate(dateObject);
    // console.log(Ldate)
    let can = d.getTimeYi();
    let cannot = d.getTimeJi();
    let zhixing = d.getZhiXing()
    //console.log(Ldate)

    import { LayerCake, Svg } from 'layercake';
    //import { scaleLinear } from 'd3-scale';
  
    import Radar from '$lib/components/Radar.svelte';
    import AxisRadial from '$lib/components/AxisRadial.svelte';

    // This example loads csv data as json using @rollup/plugin-dsv
    //import s_data from '$lib/data/radarScores.js';
    //console.log('s_data',s_data)
    //console.log('s_data_r',e_data)
    // const seriesKey = 'name';
    //const xKey = ['木','火', '土', '金', '水'];
    //const seriesNames = Object.keys(s_data[0]).filter(d => d !== seriesKey);
    
    const xKey = dayPayload.d4.pOrder
    const seriesNames = Object.keys(e_data[0]);
    
    e_data.forEach(d => {
      seriesNames.forEach(name => {
        d[name] = +d[name];
      });
    });

</script>


<!-- Id:{cardId} -->

<!-- Id:{cardId} -->

<body>
  <div class="mx-auto my-5 bg-white rounded-lg p-1">
    <img class="w-24 h-24 rounded-full mx-auto" src={url} alt="element">
    <h2 class="text-center text-xl font-semibold m-1">{result.date}</h2>
    <!-- <p class="text-center text-gray-600 mt-1">{detail.t0}</p>
    <p class="text-center text-gray-600 mt-1">{detail.z0}</p> -->
    <div class="flex justify-center mt-2">
      <p class="text-blue-500  mx-3">{dayPayload.d1}</p>
      <p class="text-blue-500  mx-3">{dayPayload.d2}</p>
      <p class="text-blue-500  mx-3">{dayPayload.d3}</p>
    </div>
    
    <div class="chart-container">
      <LayerCake
        padding={{ top: 30, right: 0, bottom: 7, left: 0 }}
        x={xKey}
        xDomain={[0, 10]}
        xRange={({ height }) => [0, height / 2]}
        data={e_data}
      >
        <Svg>
          <AxisRadial/>
          <Radar/>
        </Svg>
      </LayerCake>
    </div>


    <div class="mt-2 text-center">
      <h3 class="text-2xl font-semibold">时日月年</h3>
      <h3 class="text-lg text-gray-600">{detail.t0}</h3>
      <h3 class="text-lg text-gray-600">{detail.z0}</h3>
    </div>
    
    <div class="flex justify-center mt-3">
      <p class="text-blue-500 text-sm mx-3">{jsonString}</p>
    </div>


    <div class="mt-5 text-center">
      <h3 class="text-xl font-semibold">每日宜忌: </h3>
      <p class="text-gray-600">宜: {can}</p>
      <p class="text-gray-600">忌: {cannot}</p>
      <br/>
      <h3 class="text-blue-500 text-center">十二值星: {zhixing}</h3>
    </div>
    
    <!-- <div class="mt-5 text-center">
      {keys[0]} Owner details!
    </div> -->

    <br/>
    
    <div class="justify-center text-center py-8">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        on:click={()=> goto('/devResults')}>
        Return
      </button>
      
    </div>
  </div>
 
</body>



<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 250px;
  }

</style>





