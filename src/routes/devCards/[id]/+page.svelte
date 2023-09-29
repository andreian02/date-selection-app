<!-- individual card page -->

<script>
    import { Dcodes } from '../../../Store';
    import { page } from '$app/stores'
    import {Solar, Lunar} from 'lunar-javascript'

    import { logoHandle } from "$lib/components/logoHandle";

    const cardId = parseInt($page.params.id)

    export let payload
    export let logofiller 
    

    Dcodes.subscribe((data)=>{
    payload = data
    console.log("please work.")
    console.log(payload)
    })



    function getDatesById(cardId) {
      for (const item of payload) {
        
        if (item.andex === cardId) {
          
          return item;
        }
      }
      return null;
    }

    function getUrl(payload){
      let index = (cardId)
      let elem = (payload[index]['dayEl'])

      console.log("d:",index)
      console.log("s:", elem)
      let url = logoHandle(elem)
      console.log(url)
    
      return url 
      
    }

    function getDetails(payload){
      let index = (cardId)
      console.log("ddd:",index)
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
    console.log("RESULT DATE:",result.date)


    let  url = getUrl(payload)
    const detail = getDetails(payload)
    
    const [day, month, year] = (result.date).split('/').map(Number);
    const dateObject = new Date(year, month - 1, day); // Month is 0-based, so we subtract 1


    //const dateObject = new Date(result.date);
    console.log('dateobject:', dateObject)
    
    var d = Lunar.fromDate(dateObject);
    // console.log(Ldate)
    let can = d.getTimeYi();
    let cannot = d.getTimeJi();
    let zhixing = d.getZhiXing()
    //console.log(Ldate)

</script>


<!-- Id:{cardId} -->

<body>
  <div class="max-w-lg mx-auto my-10 bg-white rounded-lg p-5">
    <img class="w-24 h-24 rounded-full mx-auto" src={url} alt="element">
    <h2 class="text-center text-2xl font-semibold mt-3">{result.date}</h2>
    <!-- <p class="text-center text-gray-600 mt-1">{detail.t0}</p>
    <p class="text-center text-gray-600 mt-1">{detail.z0}</p> -->
    <div class="flex justify-center mt-5">
      <p class="text-blue-500  mx-3">得令</p>
      <p class="text-blue-500  mx-3">得地</p>
      <p class="text-blue-500  mx-3">身旺</p>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">每日宜忌: </h3>
      <h3 class="text-base my-2">十二值星: {zhixing}</h3>
      <p class="text-gray-600">宜: {can}</p>
      <p class="text-gray-600">忌: {cannot}</p>

      <!-- <p class="text-gray-600 mt-2">{detail.t0}</p>
      <p class="text-gray-600 mt-2">{detail.z0}</p>
       -->
      <!-- <p class="text-center text-gray-600 mt-1">{detail.t0}</p>
      <p class="text-center text-gray-600 mt-1">{detail.z0}</p> -->
      
    </div>
  </div>
</body>






