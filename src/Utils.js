import { Lunar } from 'lunar-javascript'

// '甲','卯','乙','辰','巽','巳','丙', '午', '丁', '未', '坤', '申', '庚', '酉', "辛", '戌','乾','亥','壬','子','癸','丑','艮','寅'
export function checkElement(input){
  
  let element =  ""
  if (input == "壬" || input == "癸" || input == "亥" || input == "子" || input == "坎") {
    element = "水"
  } else if (input == "甲" || input == "乙" || input == "寅" || input == "卯" || input == "巽" || input == "震") {
    element = "木"
  } else if (input == "丙" || input == "丁" || input == "巳" || input == "午" || input == "离") {
    element = "火"
  } else if (input == "戊" || input == "己" || input == "丑" || input == "辰" || input == "未" || input == "戌" || input == "艮" || input == "坤") {
    element = "土"
  } else if (input == "庚" || input == "辛" || input == "申" || input == "酉" || input == "兑" || input == "乾") {
    element = "金"
  }
      return element
  };


export function DayElement(day){

  //console.log("Utils...working?")
  let elementOfDay = ""

  if (day == "壬" || day == "癸") {
    elementOfDay = "水"
  } else if (day == "甲" || day == "乙") {
    elementOfDay = "木"
  } else if (day == "丙" || day == "丁") {
    elementOfDay = "火"
  } else if (day == "戊" || day == "己") {
    elementOfDay = "土"
  } else {
    elementOfDay = "金"
  }
      return elementOfDay
  };

export function dayofbirthDetails(dob){
  let bz = ""

  const person = Lunar.fromDate(dob);
  bz = (person.getYearGan()+person.getYearZhi()+"年 "
              +person.getMonthGan()+person.getMonthZhi()+"月 "
              +person.getDayGan()+person.getDayZhi()+"日 "
              +person.getTimeGan()+person.getTimeZhi()+"时"
              );
  return (bz)
}

export function yearofBirthdate(dob){
  
  const person = Lunar.fromDate(dob);
  const birthYear = {
    hYear: "",
    eYear: "" 
  }
  
  birthYear.hYear = (person.getYearGan())
  birthYear.eYear = (person.getYearZhi())
  return (birthYear)
}



// 干支合 + 1/2合 
export function ganzhihe(input){
  
  let combinedElement = ""
  if (input == "甲己" || input == "己甲" || input == "子丑" || input == "丑子") {
      combinedElement = "土"
  }
  if (input == "乙庚" || input == "庚乙" || input == "辰酉" || input == "酉辰" || 
      input == "酉巳" || input == "巳酉" || input == "丑酉" || input == "酉丑") {
      combinedElement = "金"
  } 
  if (input == "丙辛" || input == "辛丙" || input == "巳申" || input == "申巳" || 
      input == "子申" || input == "申子" || input == "辰子" || input == "子辰"){
      combinedElement = "水"
  }
  if (input == "丁壬" || input == "壬丁" || input == "寅亥" || input == "亥寅" || 
      input == "卯未" || input == "未卯" || input == "卯亥" || input == "亥卯"){
      combinedElement = "木"
  }
  if (input == "戊癸" || input == "癸戊" || input == "卯戌" || input == "戌卯" || 
      input == "寅午" || input == "午寅" || input == "戌午" || input == "午戌"){
      combinedElement = "火"
}
  return combinedElement
}

export function elementRS(body, use){
  // ti - body, yong - use 
  let relationship = ""
  if (body === use) {
    relationship = "= 比旺"
  } 
  else if (body == "金" && use == "土" || body == "木" && use == "水" || 
      body == "水" && use == "金" || body == "火" && use == "木" || body == "土" && use == "火") {
        relationship = "生入 ▲"
      }

  else if (body == "土" && use == "金" || body == "水" && use == "木" || 
      body == "金" && use == "水" || body == "木" && use == "火" || body == "火" && use == "土") {
        relationship = "生出 ▼"
      }
  else if (body == "土" && use == "水" || body == "水" && use == "火" || 
      body == "金" && use == "木" || body == "木" && use == "土" || body == "火" && use == "金") {
        relationship = "剋出 ▶"
  }
  else if (body == "土" && use == "木" || body == "水" && use == "土" || 
      body == "金" && use == "火" || body == "木" && use == "金" || body == "火" && use == "水") {
        relationship = "◀ 剋入"
  }
  else {
        relationship = "empty"
  }
  //console.log(relationship)
  return relationship
}


//version2 is to check 天干 合/冲 关系
export function version2(payload, birthYear, 合1,合2, 冲1,冲2){
  
    for (let i = 0; i < payload.length; i++) {
      //let findings = ""
      //let score = 0;
      const dayElement = (payload[i]['dayEl'])
      const doorElement = checkElement((payload[i]['door']))
      
      const ownersArray = [birthYear[0]['hYear'], birthYear[1]['hYear']]
      const myArray = (payload[i]['hvalue']).split(" ") //date + time.
  
        console.log('-------------version2------------------------------')
        console.log('dayElement:', dayElement, 'doorSector:', doorElement)
        let findings = ""
        let input = ""
        let combinedElement = "";
        let relationship = "";
        let result = [];

        for (let j = 0; j < myArray.length; j++) {
          
          if (myArray[j] === 合1) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
            console.log('x',findings)
            //let input = ""
            input = `${myArray[j]}${ownersArray[0]}`
            combinedElement = ganzhihe(input)
            console.log('x',combinedElement, doorElement)

            relationship = elementRS(doorElement, combinedElement )
            result.push(relationship)
            console.log('xr',relationship)


             // If you want to stop searching after finding the first occurrence
          }
          if (myArray[j] === 合2) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
            console.log('x',findings)
            //let input = ""
            input = `${myArray[j]}${ownersArray[1]}`
            combinedElement = ganzhihe(input)
            console.log('x',combinedElement, doorElement)

            relationship = elementRS(doorElement, combinedElement)
            result.push(relationship)
            console.log('xr',relationship)
             // If you want to stop searching after finding the first occurrence
          }
          if (myArray[j] === 冲1) {
            findings += "有冲"
            console.log(`${i} 有冲 Value ${冲1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
            console.log('x',findings)

             // If you want to stop searching after finding the first occurrence
          }
          if (myArray[j] === 冲2) {
            findings += "有冲"
            console.log(`${i} 有冲 Value ${冲2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
            console.log('x',findings)

         
             // If you want to stop searching after finding the first occurrence
          } 
          else {
            findings += ""
            relationship += ""
          }   

        payload[i]['chonghe1'] = findings
        payload[i]['tganhe'] = combinedElement
        payload[i]['t_relationship'] = result
        //console.log('y', findings)      
        //payload[j]['chonghe'] = findings
      }

    } console.log(payload)
      return (payload)
        
  }


//version4 is to check 地支 合/冲 关系
export function version4(payload, birthYear, 合3,合4, 冲3,冲4){
  
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))
         
    const ownersArray = [birthYear[0]['eYear'], birthYear[1]['eYear']]
    const myArray = (payload[i]['evalue']).split(" ") //date + time.

    console.log('-------------version4------------------------------')
    console.log('date:', (payload[i]['evalue'])  ,'dayElement:', dayElement, 'doorSector:', doorElement)
    let findings = ""
    let input = ""
    let combinedElement = "";
    let relationship = "";
    let result = [];

    for (let j = 0; j < myArray.length; j++) {
      
      if (myArray[j] === 合3) {
        findings += "有合"
        console.log(`${i} 有合 Value ${合3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)
        //let input = ""
        input = `${myArray[j]}${ownersArray[0]}`
        combinedElement = ganzhihe(input)
        console.log('x1',combinedElement, doorElement)

        relationship = elementRS(doorElement, combinedElement )
        result.push(relationship)
        console.log('xs1',relationship)


          // If you want to stop searching after finding the first occurrence
      }
      if (myArray[j] === 合4) {
        findings += "有合"
        console.log(`${i} 有合 Value ${合4} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
        console.log('x',findings)
        //let input = ""
        input = `${myArray[j]}${ownersArray[1]}`
        combinedElement = ganzhihe(input)
        console.log('x2',combinedElement, doorElement)

        relationship = elementRS(doorElement, combinedElement)
        result.push(relationship)
        console.log('xs2',relationship)
          // If you want to stop searching after finding the first occurrence
      }
      if (myArray[j] === 冲3) {
        findings += "有冲"
        console.log(`${i} 有冲 Value ${冲3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)

          // If you want to stop searching after finding the first occurrence
      }
      if (myArray[j] === 冲4) {
        findings += "有冲"
        console.log(`${i} 有冲 Value ${冲4} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
        console.log('x',findings)

          // If you want to stop searching after finding the first occurrence
      } 
      else {
        findings += ""
        relationship += ""
      }   
      payload[i]['chonghe2'] = findings
      payload[i]['dzhihe'] = combinedElement
      payload[i]['z_relationship'] = result
      //console.log('y', findings)      
      //payload[j]['chonghe'] = findings
    }

    

  } console.log(payload)
    return (payload)
}


//version4 is to check 地支 合/冲 关系
export function version5(payload, birthYear){
  const reflist = [{name:"金", title:["巳", "酉", "丑"],type:"三合"}, 
                   {name:"水", title:["申", "子", "辰"],type:"三合"},
                   {name:"火", title:["寅", "午", "戌"],type:"三合"},
                   {name:"木", title:["亥", "卯", "未"],type:"三合"},

                   {name:"金", title:["申", "酉", "戌"],type:"三会"}, 
                   {name:"水", title:["丑", "子", "亥"],type:"三会"},
                   {name:"火", title:["巳", "午", "未"],type:"三会"},
                   {name:"木", title:["寅", "卯", "辰"],type:"三会"},
                ]
  
  
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))
         
    const ownersArray = [birthYear[0]['eYear'], birthYear[1]['eYear']]
    
    const myArray = (payload[i]['evalue']) //date + time.
    let dtList = [...new Set(myArray)]
    
    const filteredList = dtList.filter(item => item.trim() !== "");
    let arrList = filteredList.concat(ownersArray); // datetime + owners

    console.log('-------------version5------------------------------')
    
    console.log('date:', (payload[i]['evalue'])  ,'dayElement:', dayElement,  'owners:' ,ownersArray ,'doorSector:', doorElement)
    
    let combinedElement = "";
    let combinedElements = [];
    let result = [];

    for (let z=0; z<reflist.length; z++) {
        console.log("checking array...",reflist[z].title, "against", arrList)
        let cList = reflist[z].title
        
        let relationship = "";
        let findings = ""
        let count = 0

        for (let j=0; j<arrList.length; j++){
            console.log("find:",arrList[j])
            if (cList.includes(arrList[j])){
                count+=1
                console.log([j], arrList[j], "found", "count:", count)	
                  
                if (count == 3) {
                  findings += reflist[z].type
                  combinedElement = reflist[z].name; 
                  relationship = elementRS(doorElement, combinedElement )
                  result.push(relationship)
                  combinedElements.push(combinedElement)
                  console.log("found all 3 values!", "result:", findings, combinedElement, relationship)
                } 
              } 
              else {
                findings += ""
                combinedElement += ""
                relationship += ""
              }   
            }

          } //payload[i]['chonghe2'] = findings
            payload[i]['dzhisanhe'] = combinedElements
            payload[i]['z_relationship2'] = result
        
        } console.log("version5")
          console.log(payload)
          return (payload)
  } 





// export function trioStems (inputList) {


//     let reflist = [{name:"金", title:["巳", "酉", "丑"],type:"三合"}, 
//                   {name:"水", title:["申", "子", "辰"],type:"三合"},
//                   {name:"火", title:["寅", "午", "戌"],type:"三合"},
//                   {name:"木", title:["亥", "卯", "未"],type:"三合"},

//                   {name:"金", title:["申", "酉", "戌"],type:"三会"}, 
//                   {name:"水", title:["丑", "子", "亥"],type:"三会"},
//                   {name:"火", title:["巳", "午", "未"],type:"三会"},
//                   {name:"木", title:["寅", "卯", "辰"],type:"三会"},
//                 ]
		
//     let tList = [...new Set(inputList)] // date 
    
//     for (let i=0; i<reflist.length; i++) {
//     	console.log("checking array...",reflist[i].title)
//       let refList = reflist[i].title
//       let count = 0
      
//       for (let j=0; j<tList.length; j++){
//       	if (refList.includes(tList[j])){
//         		count+=1
//         		console.log([j], tList[j], "found", "count:", count)	
            	
//             if (count == 3) {
//               let type = reflist[i].type
//             	let result = reflist[i].name; 
//               console.log("found all 3 values!", "result:", type, result)
//            } 
//          } 
//        }
//      }
// 	}
  