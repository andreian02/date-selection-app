
import { Lunar } from 'lunar-javascript'
import { elementRS, rMScore } from './Utils'
import { checkElement, cheatsheet, elementScore } from './helper';


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



export function jieQistrength(result){
    //console.log("check 得令, 得地, 得势")
    
    let relationship;
    let monthElement;
    
    let jQrelationship;
    let gotRoot;
    let support;

    let strain_1 = []
    let strain_2 = []
    let output;


    const smallpayload = {
        d1: null,
        d2: null,
        d3: null,
        d4: null
    }
    

    let dayPayload = result;
    let dmonth = dayPayload.date
    let dayElement = dayPayload.dayEl
    let dizhi = dayPayload.zValue

    let tiangan = dayPayload.gValue

    
    const tianganlist = tiangan.split(" ")
    const dizhilist = dizhi.split(" ")


    function createList(tianganlist, dizhilist){
       
        


        for (let r=0; r<tianganlist.length; r++){
            
            let dna = elementScore(tianganlist[r])
            console.log('tg',tianganlist[r],dna)
            strain_1.push(dna)
        }

        for (let r=0; r<dizhilist.length; r++){

            let dna = elementScore(dizhilist[r])
            console.log('2',dizhilist[r],dna)
            strain_2.push(dna)
        
        }


        // for (const item of dizhilist){
        //     if(item.hasOwnProperty('水')){
        //         水 += item.水
        //     }
        //     if(item.hasOwnProperty('木')){
        //         木 += item.木
        //     }
        //     if(item.hasOwnProperty('火')){
        //         火 += item.火
        //     }
        //     if(item.hasOwnProperty('土')){
        //         土 += item.土
        //     }
        //     if(item.hasOwnProperty('金')){
        //         金 += item.金
        //     }
        // console.log("dz:",水, 木, 火, 土, 金)
        // }
       
        // totalScore.push(水, 木, 火, 土, 金)
        // console.log(totalScore)
        // console.log("total:",  水, 木, 火, 土, 金)

    }
    createList(tianganlist, dizhilist)

    function scoring (strain_1, strain_2){
        let 水 = 0; 
        let 木 = 0; 
        let 火= 0; 
        let 土 = 0; 
        let 金 = 0; 
        

        for (const item of strain_1 ){
            if(item.hasOwnProperty('水')){
                水 += item.水
                //console.log(item, 'water', 水)
            }
            if(item.hasOwnProperty('木')){
                木 += item.木
                //console.log(item, 'wood', 木)
            }
            if(item.hasOwnProperty('火')){
                火 += item.火
                //console.log(item, 'fire', 火)
            }
            if(item.hasOwnProperty('土')){
                土 += item.土
                //console.log(item, 'earth', 土)
            }
            if(item.hasOwnProperty('金')){
                金 += item.金
                //console.log(item, 'metal', 金)
            }
            // console.log("total1:", 
            // "water:", 水, "wood:",木, 
            // "fire:",火, "earth:", 土, "metal:",金)
        }

        for (const item of strain_2 ){
            if(item.hasOwnProperty('水')){
                水 += item.水
                //console.log(item, 'water', 水)
            }
            if(item.hasOwnProperty('木')){
                木 += item.木
                //console.log(item, 'wood', 木)
            }
            if(item.hasOwnProperty('火')){
                火 += item.火
                //console.log(item, 'fire', 火)
            }
            if(item.hasOwnProperty('土')){
                土 += item.土
                //console.log(item, 'earth', 土)
            }
            if(item.hasOwnProperty('金')){
                金 += item.金
                //console.log(item, 'metal', 金)
            }
            

        }
        console.log("total2:", "water:", 水, "wood:",木, "fire:",火, "earth:", 土, "metal:",金)
        const result = {
            水: 水,
            木: 木,
            火: 火,
            土: 土,
            金: 金


        }
        return result
    }

    output = scoring(strain_1, strain_2)
    console.log("output score:",output)




    

    const [day, month, year] = (dmonth).split('/').map(Number);
    const dateObject = new Date(year, month - 1, day); 
    var dm = Lunar.fromDate(dateObject);
    let dmonthV = dm.getMonthZhi();
    
    let ddayV = dm.getDayGan(); 
    let root = cheatsheet(ddayV)?.根


    monthElement = checkElement(dmonthV)
    relationship = elementRS(dayElement, monthElement)
    jQrelationship = rMScore(relationship)
    
    //const dz2 = Lunar.fromDate(dmonth)
    // console.log(tianganlist, dizhilist)
    // console.log(ddayV, root)
    // console.log('dayElement:', dayElement)
    // console.log('monthElement:',monthElement)
    // console.log('rs:',relationship)
    // console.log('jqresult:', jQrelationship)

    smallpayload.d1 = jQrelationship

    // 

    function checkRoot(dizhilist) {
        for (let r=0; r<dizhilist.length; r++){
            let gotRoot= ""
            if (root[0] === dizhilist[r] || root[1] === dizhilist[r]){
                //console.log("found")
                //console.log(dizhilist[r])
                gotRoot = "得地:有根"
                //console.log('gotRoot:', gotRoot)
            }
            else {
                //console.log("pass")
                gotRoot = "失地:无根"
                //console.log('gotRoot:', gotRoot)
            }

            return gotRoot
            }
    }

    function daySupport(tianganlist, dayElement){
        for (let r=0; r<tianganlist.length; r++){
            let Support= ""
            const sElement = checkElement(tianganlist[r])
            relationship = elementRS(dayElement, sElement)

            if (relationship === "比旺" || relationship === "生入 ▲"){
                //console.log("found")
                //console.log(dizhilist[r])
                Support = "得势:有助"
                //console.log('gotRoot:', Support)
            }
            else {
                //console.log("pass")
                Support = "失势:无助"
                //console.log('gotRoot:', Support)
            }
            return Support
            }
    }
    

    gotRoot = checkRoot(dizhilist)
    ///console.log('root:', gotRoot)
    smallpayload.d2 = gotRoot

    support = daySupport(tianganlist, dayElement)
    //console.log('support:', support)
    smallpayload.d3 = support

    smallpayload.d4 = output


    //return (dayPayload)
    return smallpayload
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
   
