<script>
    import { Dcodes } from '../../../Store';
    import { page } from '$app/stores'
    import {Solar, Lunar} from 'lunar-javascript'
    
    const cardId = parseInt($page.params.id)

    export let payload 

    Dcodes.subscribe((data)=>{
    payload = data
    })

    function getDatesById(cardId) {
      for (const item of payload) {
        
        if (item.andex === cardId) {
          return item;
        }
      }
      return null;
    }

    const result = getDatesById(cardId)
    console.log(result)
    console.log(result.date)

    const dateObject = new Date(result.date);
    console.log('dateobject:', dateObject)
    
    var Ldate = Lunar.fromDate(dateObject);
    console.log(Ldate)

    console.log(Ldate.getYearInChinese());
    console.log(Ldate.getMonthInChinese());
    console.log(Ldate.getDayInChinese());

    //console.log(Ldate)
    let can = (Ldate.getDayYi())
    let cannot = (Ldate.getDayJi())
    console.log(can, cannot)

    console.log(Ldate.getZhiXing());


</script>


<h1>Details about this Date {cardId} </h1>


<p>{result.date} </p>
<p>{result.door} </p>
<p>{result.dayEl} </p>


<p>{can}</p>
<p>{cannot}</p>


