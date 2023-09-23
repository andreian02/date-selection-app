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
          console.log(item)
          return item;
        }
      }
      return null;
    }

    const result = getDatesById(cardId)
    console.log(result)
    console.log("RESULT DATE:",result.date)
    
    const [day, month, year] = (result.date).split('/').map(Number);
    const dateObject = new Date(year, month - 1, day); // Month is 0-based, so we subtract 1


    //const dateObject = new Date(result.date);
    console.log('dateobject:', dateObject)
    
    var d = Lunar.fromDate(dateObject);
    // console.log(Ldate)
    let can = d.getTimeYi();
    let cannot = d.getTimeJi();
    //console.log(Ldate)

</script>


<h1>Details about this Date {cardId} </h1>


<p>{result.date} </p>
<p>{result.door} </p>
<p>{result.dayEl} </p>

<p>{can}</p>
<p>{cannot}</p>


