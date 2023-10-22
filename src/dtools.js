
import { Lunar } from 'lunar-javascript'
import { elementRS, rMScore } from './Utils'
import { checkElement, cheatsheet, elementScore } from './helper';


export function propertyOrder(input){
    let propOrder = []
    if (input == "水"){
        propOrder = ["水", "木", "火", "土", "金"]
    } else if (input == "木"){
        propOrder = ["木", "火", "土", "金", "水"]
    } else if (input == "火"){
        propOrder = ["火", "土", "金", "水", "木"]
    } else if (input == "土"){
        propOrder = ["土", "金", "水", "木", "火"]
    } else if (input == "金"){
        propOrder = ["金", "水", "木", "火", "土"]
    }
    return propOrder
}


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
    } else {
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
    let gotSupport;

    let strain_1 = []
    let strain_2 = []
    let sList = []
    let rList = []
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
            //console.log('tg',tianganlist[r],dna)
            strain_1.push(dna)
        }
        for (let r=0; r<dizhilist.length; r++){
            let dna = elementScore(dizhilist[r])
            //console.log('2',dizhilist[r],dna)
            strain_2.push(dna)
        }
    }

    
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
        console.log("total:", "water:", 水, "wood:",木, "fire:",火, "earth:", 土, "metal:",金)
        const result = {
            水: 水, 木: 木, 火: 火, 土: 土, 金: 金
        }
        return result
    }

    function reOrderSequence(output, dayElement){
        const pOrder = propertyOrder(dayElement)
        const reOrderSeq = {};

        pOrder.forEach((propertyName)=>{
            if (output.hasOwnProperty(propertyName)){
                reOrderSeq[propertyName] = output[propertyName];
            }
        });

        for (const propertyName in output){
            if (!pOrder.includes(propertyName)){
                reOrderSeq[propertyName] = output[propertyName]
            }
        }
        return {reOrderSeq, pOrder}
    }

    createList(tianganlist, dizhilist)
    output = scoring(strain_1, strain_2)
    //console.log("output score:",output)

    let newOutput = reOrderSequence(output, dayElement)
    console.log('new output:',JSON.stringify(newOutput, null, 2))

    const [day, month, year] = (dmonth).split('/').map(Number);
    const dateObject = new Date(year, month - 1, day); 
    var dm = Lunar.fromDate(dateObject);
    let dmonthV = dm.getMonthZhi();
    
    let ddayV = dm.getDayGan(); 
    // let ddayC = dm.getDayZhi();
    let root = cheatsheet(ddayV)?.根

    monthElement = checkElement(dmonthV)
    relationship = elementRS(dayElement, monthElement)
    jQrelationship = rMScore(relationship)
    
    //const dz2 = Lunar.fromDate(dmonth)
    console.log(tianganlist, dizhilist)
    console.log('daygan:',ddayV, root[0], root[1])
    console.log('dayElement:', dayElement)
    console.log('monthElement:',monthElement)
    console.log('rs:',relationship)
    console.log('jqresult:', jQrelationship)

    smallpayload.d1 = jQrelationship


    function checkRoot(dizhilist){
        let tempscore = 0 
        for (let r=0; r<dizhilist.length; r++){
            console.log('gan:',dizhilist[r])
            if (dizhilist[r] == root[0] || dizhilist[r] == root[1]){
                //console.log("got root")
                tempscore++
            } else {
                //console.log("no root")
            }
        }
        console.log("calculating score", tempscore)
        if (tempscore>=1){
            let Root = "得地:有根"
            console.log("got Root",Root)
            return Root
        } else {
            let Root = "失地:无根"
            console.log("no Root", Root)
            return Root
        }
    }
    

    function checkSupport(tianganlist){
        let tempscore = 0 
        for (let r=0; r<tianganlist.length; r++){
            console.log('tian:',tianganlist[r])
            let sElement = checkElement(tianganlist[r])
            let relationship = elementRS(dayElement, sElement)
            console.log("r", relationship, "e", sElement)
            if (relationship === "比旺" || relationship === "生入 ▲"){
                // let gSupport = "得势:有助"
                tempscore++ 
                //console.log('gotSupport:', gSupport)
            } else{
                // let nSupport = "失势:无助"
                //console.log("noSupport", nSupport)
            }
        }   
        console.log("calculating score", tempscore)
        if (tempscore >=1) {
            let Support = "得势:有助"
            console.log("got support",Support)
            return Support
            
        } else {
            let Support = "失势:无助"
            console.log("no support",Support)
            return Support
        }
    }
    


    gotRoot = checkRoot(dizhilist)
    console.log('checkRoot:', gotRoot)
    smallpayload.d2 = gotRoot

    gotSupport = checkSupport(tianganlist)
    console.log('checkSupport:', gotSupport)
    smallpayload.d3 = gotSupport
    smallpayload.d4 = newOutput

    //return (dayPayload)
    return smallpayload
}


// export function guiren(period, dizhilist){
//     let gren; 
//     let gresult;
//     //let glist = []; 

//     if (period == "冬至"){
//         gren = "阴贵"
//         console.log(period, gren)
//         for (let d=0; d<dizhilist.length; d++ )
//             gresult = cheatsheet(dizhilist[d])
//             console.log(gresult?.yingui)
//             //glist.push(gresult?.yingui)

//     } else {
//         gren = "阳贵"
//         console.log(period, gren)
//         for (let d=0; d<dizhilist.length; d++ )
//         gresult = cheatsheet(dizhilist[d])
//         console.log(gresult?.yangui)
//     }

// }




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
    

    if (currentDate < dongzhi_next && currentDate > xiazhi_current){
        period = "夏至"
        console.log('Now currently in 夏至')
        //guiren(period, dizhilist)
        
    } else {
        period = "冬至"
        console.log('Now currently in 冬至')
        //guiren(period, dizhilist)
    }

    

    return period
}
   
