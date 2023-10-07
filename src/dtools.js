
import { Lunar } from 'lunar-javascript'


export function zHourConverts(input){
    let range;
    if (input == 0){
        range = "23:00 - 00:59"
    } else if (input == 1){
        range = "01:00 - 02:59"
    } else if (input == 2){
        range = "03:00 - 04:59"
    } else if (input == 3){
        range = "05:00 - 06:59"
    } else if (input == 4){
        range = "07:00 - 08:59"
    } else if (input == 5){
        range = "09:00 - 10:59"
    } else if (input == 6){
        range = "11:00 - 12:59"
    } else if (input == 7){
        range = "13:00 - 14:59"
    } else if (input == 8){
        range = "15:00 - 16:59"
    } else if (input == 9){
        range = "17:00 - 18:59"
    } else if (input == 10){
        range = "19:00 - 20:59"
    } else if (input == 11){
        range = "21:00 - 22:59"
    }
    return range
}



export function formatDate(input){
    const [day, month, year] = input.split('/');
    const dateObject = new Date(`${year}-${month}-${day}`);
    //dateObject.setDate(dateObject.getDate() + 182);
    dateObject.setDate(dateObject.getDate());
    const newDay = dateObject.getDate();
    const newMonth = dateObject.getMonth() + 1; // Month is zero-based, so add 1
    const newYear = dateObject.getFullYear();
    const fDate = `${newYear}-${newMonth.toString().padStart(2, '0')}-${newDay}`;
    return fDate
}
export function formatDateToYmd(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }



export function defaultDates(birthYear){
    
    if ((birthYear[0].gYear === birthYear[1].gYear) && (birthYear[0].zYear === birthYear[1].zYear)){
       
        if (birthYear[0].gYear == '己' && birthYear[0].zYear == '酉'){
            console.log("gpair", birthYear[0].gYear, birthYear[1].gYear)
            console.log("zpair", birthYear[0].zYear, birthYear[1].zYear)
            console.log('same')
            const result = 'same'
            return result
        }
        
    } else{
        const result = 'different'
        return result
    }
}


export function jieQidetect(payload){
    let period = ""; 
    let todayDate = new Date(); 

    //const startDate = payload[0]['date'];
    const endDate = payload[payload.length - 1]['date'];
    
    //console.log("first", startDate)
    console.log("last", endDate)
    console.log('todayDate:',formatDateToYmd(todayDate))
    
    //var l = dt1.getJieQiList();
    //console.log(l);
    
    const dt1 = Lunar.fromDate(todayDate);
    const dongzhi_current = (dt1.getJieQiTable()['冬至'].toYmd()) //string
    const xiazhi_current = (dt1.getJieQiTable()['夏至'].toYmd())  //string
    console.log('冬至:'+dongzhi_current);
    console.log('夏至:'+xiazhi_current);

    const currentDate = formatDate(endDate)
    console.log('cdate:',currentDate)

    //calculating the next cycle.
    // const [day, month, year] = endDate.split('/');
    // const dateObject = new Date(`${year}-${month}-${day}`);
    // dateObject.setDate(dateObject.getDate() + 182);
    // const newDay = dateObject.getDate();
    // const newMonth = dateObject.getMonth() + 1; // Month is zero-based, so add 1
    // const newYear = dateObject.getFullYear();
    // const nextDate = `${newDay}/${newMonth.toString().padStart(2, '0')}/${newYear}`;
    // console.log('fdate:',nextDate)
    const nextDate = todayDate.setDate(todayDate.getDate() + 182);



    const dt2 = Lunar.fromDate(new Date(nextDate));
    const dongzhi_next = (dt2.getJieQiTable()['冬至'].toYmd()) //string
    const xiazhi_next = (dt2.getJieQiTable()['夏至'].toYmd())  //string
    console.log('下一个冬至:'+dongzhi_next);
    console.log('下一个夏至:'+xiazhi_next);
    

    if (currentDate > xiazhi_current && currentDate < dongzhi_next){
        period = "冬至"
        console.log('Now currently in 冬至')
    } else {
        period = "夏至"
        console.log('Now currently in 夏至')
    }

    

    return period
}
   
