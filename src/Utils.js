import { Lunar } from 'lunar-javascript'
import { cheatsheet, checkElement, elementScore, dayScore } from './helper'


// '甲','卯','乙','辰','巽','巳','丙', '午', '丁', '未', '坤', '申', '庚', '酉', "辛", '戌','乾','亥','壬','子','癸','丑','艮','寅'
export function capacity_g(birthYear) {
  let ownersArray;
  if (birthYear.length > 1){
    ownersArray = [birthYear[0]['gYear'], birthYear[1]['gYear']]     
  } else {
    ownersArray = [birthYear[0]['gYear']] 
  } 
    return ownersArray
  };


export function capacity_z(birthYear) {
  let ownersArray;
  if (birthYear.length === 2){
    ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]     
  } else if (birthYear.length === 1){
    ownersArray = [birthYear[0]['zYear']] 
  } else {
    ownersArray = ""
  } 
    return ownersArray
  };

export function DayElement(day){

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

export function YearofBirthdate(dob){
  const person = Lunar.fromDate(dob);
  const birthYear = {
    gYear: "",
    zYear: "" 
  }

  birthYear.gYear = (person.getYearGan())
  birthYear.zYear = (person.getYearZhi())
  return (birthYear)
}

export function MonthofBirthdate(dob){
  const person = Lunar.fromDate(dob);
  const birthYear = {
    gYear: "",
    zYear: "" 
  }
  
  birthYear.gYear = (person.getMonthGan())
  birthYear.zYear = (person.getMonthZhi())
  return (birthYear)
}

export function DayofBirthdate(dob){
  const person = Lunar.fromDate(dob);
  const birthYear = {
    gYear: "",
    zYear: "" 
  }

  birthYear.gYear = (person.getDayGan())
  birthYear.zYear = (person.getDayZhi())
  return (birthYear)
}

export function TimeofBirthdate(dob){
  const person = Lunar.fromDate(dob);
  const birthYear = {
    gYear: "",
    zYear: ""
  }
  
  birthYear.gYear = (person.getTimeGan())
  birthYear.zYear = (person.getTimeZhi())
  return (birthYear)
}


export function fulldetails(dob){
  
  const person = Lunar.fromDate(dob);
  const fullDetails = {
    gYear: "",
    zYear: "",
    gMonth: "",
    zMonth: "",
    gDay: "",
    zDay: "", 
    gHour: "", 
    zHour: ""
  }
  fullDetails.gYear = (person.getYearGan())
  fullDetails.zYear = (person.getYearZhi())
  return (fullDetails)
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
      input == "寅午" || input == "午寅" || input == "戌午" || input == "午戌" || 
      input == "未午" || input == "午未"){
      combinedElement = "火"
}
  return combinedElement
}

export function elementRS(body, use){
  // ti - body, yong - use 
  
  let relationship = ""
  if (body === use) {
      relationship = "比旺"
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
  // else {
  //       relationship = ""
  //     }
  //console.log(relationship)
  return relationship
}

export function rMScore(relationship){
  let jqResult;
  if (relationship == '比旺'){
    jqResult = "得令:旺";
  } else if (relationship == '生入 ▲'){
    jqResult = "得令:相";
  } else if (relationship == '生出 ▼'){
    jqResult = "失令:休";
  } else if (relationship == '◀ 剋入'){
    jqResult = "失令:死";
  } else if (relationship == '剋出 ▶'){
    jqResult = "失令:囚";
  }
  return jqResult
}



export function rScore(relationship){
  let scoring = 0;
  if (relationship == '比旺'){
    scoring++;
  } else if (relationship == '生入 ▲'){
    scoring++;
  } else if (relationship == '生出 ▼'){
    scoring--;
  } else if (relationship == '◀ 剋入'){
    scoring--;
  } else if (relationship == '剋出 ▶'){
    scoring++;
  }
  return scoring
}

export function answersheet(input){
  let result; 
  
  result = cheatsheet(input)
  console.log(result)
  return result
}



export function transistor(birthYear) {
  let result_details = []
  let 合_1, 冲_1, 合_2, 冲_2, 合_3,冲_3, 合_4, 冲_4;
  let sanhe3, sanhe4;
  console.log("Running trans.....")
  if (birthYear.length > 1){
    
    合_1 = answersheet(birthYear[0].gYear).合
    冲_1 = answersheet(birthYear[0].gYear).冲
  
    合_2 = answersheet(birthYear[1].gYear).合
    冲_2 = answersheet(birthYear[1].gYear).冲
  
    合_3 = answersheet(birthYear[0].zYear).L合
    冲_3 = answersheet(birthYear[0].zYear).冲
    sanhe3 =  answersheet(birthYear[0].zYear).S合

  
    合_4 = answersheet(birthYear[1].zYear).L合
    冲_4 = answersheet(birthYear[1].zYear).冲
    sanhe4 =  answersheet(birthYear[0].zYear).S合


    result_details.push(合_1, 冲_1, 合_2, 冲_2, 合_3, 冲_3, 合_4, 冲_4, sanhe3, sanhe4)

  } else {
    合_1 = answersheet(birthYear[0].gYear).合
    冲_1 = answersheet(birthYear[0].gYear).冲
    
    合_3 = answersheet(birthYear[0].zYear).L合
    冲_3 = answersheet(birthYear[0].zYear).冲

    sanhe3 =  answersheet(birthYear[0].zYear).S合

    result_details.push(合_1, 冲_1, 合_3, 冲_3, sanhe3)
    
  } 
    console.log(result_details)
    return result_details 
  };



export function version1(payload){
  for (let i = 0; i < payload.length; i++) {
    const dayElement = (payload[i]['dayEl'])
    const mydArray = (payload[i]['gValue']).split(" ") //date + time.
    const myeArray = (payload[i]['zValue']).split(" ") //date + time.
        
        let totalScore = 0;
        //let findings = "";
        let input = "";
        let combinedElements1 = [];
        let combinedElements2 = [];
        let combinedElement = "";
        let relationship = "";
        let result1 = [];
        let result2 = [];
        const dpairs = [];
        const epairs = [];
        console.log('----------------v1-1--Version1 天干 Dev-------------------')
        for (let j = 0; j< mydArray.length; j++) {
          for (let k = j+1; k<mydArray.length; k++){
            let score = 0;
            console.log(mydArray[j], mydArray[k])
            dpairs.push([mydArray[j], mydArray[k]])

            let binding =  answersheet(mydArray[j]).合
            //spliting = answersheet().冲

            if (binding === mydArray[k]){
              console.log("Found dpairs!")
              input = `${mydArray[j]}${mydArray[k]}`
              combinedElement = ganzhihe(input)
              console.log('x','v1-1', 'dpairs:', input, 'dayElement:', dayElement, 'res:',combinedElement)
              relationship = elementRS(dayElement, combinedElement)
              score = rScore(relationship)
              totalScore += score
              result1.push(relationship)
              combinedElements1.push(combinedElement)
              console.log('result of rs:', relationship, 'score:', score)
            }
          }
          //payload[i]['score'] = totalScore
          console.log('1r:',totalScore)
          
        }
        
        console.log('----------------v1-2--Version1 地支 Dev-------------------')
        console.log('dz')
        
        for (let j = 0; j< myeArray.length; j++) {
          for (let k = j+1; k<myeArray.length; k++){
            let score = 0;
            console.log(myeArray[j], myeArray[k])
            epairs.push([myeArray[j], myeArray[k]])
            //合
            let binding1 =  answersheet(myeArray[j])?.L合 
            let binding2 =  answersheet(myeArray[j])?.S合
            
            if (binding1 === myeArray[k] || binding2[0] === myeArray[k] || binding2[1] === myeArray[k]){
              console.log("Found epairs!")
              input = `${myeArray[j]}${myeArray[k]}`
              combinedElement = ganzhihe(input)
              console.log('binding','v1-2', 'epairs:', input, 'dayElement:', dayElement, 'res:',combinedElement)
              relationship = elementRS(dayElement, combinedElement)
              score = rScore(relationship)
              totalScore += score
              result2.push(relationship)
              combinedElements2.push(combinedElement)
              console.log('result of rs:', relationship, 'score:', score)
            }
            // continue to check.... 
            let clashing1 = answersheet(myeArray[j])?.冲
            if (clashing1 === myeArray[k]){
              console.log("Found epairs!")
              input = `${myeArray[j]}${myeArray[k]}`
              console.log("-------------------------------------------------")
              console.log('clashing','v1-2', 'epairs:', input, 'resc:',clashing1)
              console.log('result of rs:', 'score:', score)
            }

            let breaking1 = answersheet(myeArray[j])?.破
            if (breaking1 === myeArray[k]){
              console.log("Found epairs!")
              input = `${myeArray[j]}${myeArray[k]}`
              let negscore = -1
              totalScore += negscore
              console.log("-------------------------------------------------")
              console.log('breaking','v1-2', 'epairs:', input, 'resc:',breaking1)
              console.log('result of rs:', 'score:', negscore)
            }
            let harming1 = answersheet(myeArray[j])?.害
            if (harming1 === myeArray[k]){
              console.log("Found epairs!")
              input = `${myeArray[j]}${myeArray[k]}`
              let negscore = -1
              totalScore += negscore
              console.log("-------------------------------------------------")
              console.log('harming','v1-2', 'epairs:', input, 'resc:',harming1)
              console.log('result of rs:', 'score:', negscore)
            }
            let execute = answersheet(myeArray[j])?.刑
            if (execute === myeArray[k]){
              console.log("Found epairs!")
              input = `${myeArray[j]}${myeArray[k]}`
              let negscore = -1
              totalScore += negscore
              console.log("-------------------------------------------------")
              console.log('execute','v1-2', 'epairs:', input,)
              console.log('result of rs:', 'score:', negscore)
            }
          }

          //let score = 0;
          //console.log(myArray[j])
          console.log('2r:',totalScore)
        }
        console.log("----------------------三刑---------------------------")
        const myeArray_o = (payload[i]['zValue']) //date + time.
        for (let j = 0; j< myeArray.length; j++) {
          
          console.log(myeArray_o)
          let execute2 = answersheet(myeArray[j])?.刑2 ?? "blank";
          console.log("execute2",myeArray[j], execute2)
          //console.log('result of rs:', 'score:', score)
          
          if (execute2[0] === myeArray[j] && execute2[1] === myeArray[j]){
            console.log('caught all 3', )
            
          } else {
            console.log('didnt caught any')
            
          }

          
        }


        payload[i]['dScore'] = totalScore
        payload[i]['z_天干合五行'] = combinedElements1
        payload[i]['z_地支合五行'] = combinedElements2
        payload[i]['z_天干合关系'] = result1
        payload[i]['z_地支合关系'] = result2
    }
    console.log("v1.")
    console.log(payload)
  }




//version2 is to check 天干 合/冲 关系 (合1,合2, 冲1,冲2)
export function version2(payload, birthYear){
    
    let ownersArray = capacity_g(birthYear)
    let result_details = transistor(birthYear)
  
    for (let i = 0; i < payload.length; i++) {
      //let findings = ""
      //let score = 0;
      const dayElement = (payload[i]['dayEl'])
      const doorElement = checkElement((payload[i]['door']))
      let totalScore = (payload[i]['dScore'])
      
      //const ownersArray = [birthYear[0]['gYear'], birthYear[1]['gYear']]
      //const owner1 = checkElement(birthYear[0]['gYear'])
      //const owner2 = checkElement(birthYear[1]['gYear'])
      //let owners = [owner1, owner2];
      
      const myArray = (payload[i]['gValue']).split(" ") //date + time.
        //let totalScore = 0;
        let findings = ""
        let input = ""
        let combinedElements = [];
        let combinedElement = "";
        let relationship = "";
        let result = [];
        let effect = [];

        console.log('----------------v2--天干合冲关系-------------------')
        console.log('dayElement:', dayElement, 'owners:', ownersArray, 'doorSector:', doorElement)
        
        // let rs1 = elementRS(owner1, dayElement)
        // let rs2 = elementRS(owner2, dayElement)
        // let s1 = rScore(rs1)
        // let s2 = rScore(rs2)
        // totalScore = s1 + s2
        // console.log("owners and day elemenet", owner1, owner2, dayElement, rs1, rs2, totalScore)

        if (ownersArray.length > 1) {

          const owner1 = checkElement(ownersArray[0])
          const owner2 = checkElement(ownersArray[1])

          //let owners = [owner1, owner2];
          let rs1 = elementRS(owner1, dayElement)
          let rs2 = elementRS(owner2, dayElement)
          let s1 = rScore(rs1)
          let s2 = rScore(rs2)
          totalScore = s1 + s2
          console.log("owners and day elemenet", owner1, owner2, dayElement, rs1, rs2, totalScore)
        } else {

          const owner1 = checkElement(ownersArray[0])
          let rs1 = elementRS(owner1, dayElement)
          let s1 = rScore(rs1)
          totalScore = s1
          console.log("owners and day elemenet", owner1, dayElement, rs1, totalScore)
        }

        //console.log("合:"  ,合1, 合2)


        for (let j = 0; j < myArray.length; j++) {
          let score = 0;
          
          if (ownersArray.length > 1) {
            let 合1 = result_details[0]
            let 冲1 = result_details[1]
            let 合2 = result_details[2]
            let 冲2 = result_details[3]
            

            if (myArray[j] === 合1) {
              const owner1 = checkElement(ownersArray[0])
              
              findings = "有合"
              console.log(`${i} 有合 Value ${合1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
              console.log('h1',findings, myArray[j], 合1)
              //let input = ""
              input = `${myArray[j]}${ownersArray[0]}`
              combinedElement = ganzhihe(input)
              
              console.log('x','o1',owner1, input, 'res:',combinedElement)

              relationship = elementRS(owner1, combinedElement)
              effect.push(findings)
              result.push(relationship)
              score = rScore(relationship)
              totalScore += score
              combinedElements.push(combinedElement)
              console.log('xr1:',owner1, combinedElement ,relationship, score)

            }
            if (myArray[j] === 冲1) {
              
              findings = "有冲"
              console.log(`${i} 有冲 Value ${冲1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
              console.log('x1',findings)
              effect.push(findings)

            }

            if (myArray[j] === 合2) {
              const owner2 = checkElement(ownersArray[1])
              findings = "有合"
              console.log(`${i} 有合 Value ${合2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
              console.log('h2',findings, myArray[j], 合2)
              //let input = ""
              input = `${myArray[j]}${ownersArray[1]}`
              combinedElement = ganzhihe(input)

              console.log('x','o2',owner2, input, 'res:',combinedElement)
              

              relationship = elementRS(owner2, combinedElement)
              effect.push(findings)
              result.push(relationship)
              score = rScore(relationship)
              totalScore += score
              combinedElements.push(combinedElement)
              console.log('xr2:',owner2, combinedElement ,relationship, score)
              

            }
            if (myArray[j] === 冲2) {
              findings = "有冲"
              console.log(`${i} 有冲 Value ${冲2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
              console.log('x2',findings)
              effect.push(findings)

            } 
            else {
              findings = ""
              relationship += ""
            }
          }   else {
            let 合1 = result_details[0]
            let 冲1 = result_details[1]

            if (myArray[j] === 合1) {
              const owner1 = checkElement(ownersArray[0])
              
              findings = "有合"
              console.log(`${i} 有合 Value ${合1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
              console.log('h1',findings, myArray[j], 合1)
              //let input = ""
              input = `${myArray[j]}${ownersArray[0]}`
              combinedElement = ganzhihe(input)
              
              console.log('x','o1',owner1, input, 'res:',combinedElement)

              relationship = elementRS(owner1, combinedElement)
              effect.push(findings)
              result.push(relationship)
              score = rScore(relationship)
              totalScore += score
              combinedElements.push(combinedElement)
              console.log('xr1:',owner1, combinedElement ,relationship, score)

            }
            if (myArray[j] === 冲1) {
              
              findings = "有冲"
              console.log(`${i} 有冲 Value ${冲1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
              console.log('x1',findings)
              effect.push(findings)

            } else {
              findings = ""
              relationship += ""
            }

          }

        // payload[i]['天干合冲'] = findings
        payload[i]['天干合冲'] = effect
        payload[i]['天干六合'] = combinedElements
        payload[i]['天干合关系'] = result
        payload[i]['dScore'] = totalScore
        //console.log('y', findings)      
        //payload[j]['chonghe'] = findings
      }

    } console.log(payload)
      return (payload)
        
  }


//version3 is to check 地支 合/冲 关系  合3,合4, 冲3,冲4 + sanhe3/sanhe4
export function version3(payload, birthYear){
  
  let ownersArray = capacity_z(birthYear)
  let result_details = transistor(birthYear)
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))

    let totalScore = (payload[i]['dScore'])
         
    //const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    //const owner1 = checkElement(birthYear[0]['zYear'])
    //const owner2 = checkElement(birthYear[1]['zYear'])
    //let owners = [owner1, owner2];

    const myArray = (payload[i]['zValue']).split(" ") //date + time.

    let score;
    let findings = "";
    let input = "";
    let combinedElements = [];
    let combinedElement = "";
    let relationship = "";
    let result = [];
    let effect = [];

    console.log('--------------v3----地支合冲关系-------------------')
    console.log('date:', (payload[i]['zValue'])  ,'dayElement:', dayElement, 'owners:' ,ownersArray , 'doorSector:', doorElement)
    
    // let rs1 = elementRS(owner1, dayElement)
    // let rs2 = elementRS(owner2, dayElement)
    // let s1 = rScore(rs1)
    // let s2 = rScore(rs2)

    // totalScore += s1
    // totalScore += s2

    // console.log("owners and day elemenet", owner1, owner2, dayElement, rs1, rs2, totalScore)
    // console.log("合:"  ,合3, 合4)
    if (ownersArray.length > 1) {

      const owner1 = checkElement(ownersArray[0])
      const owner2 = checkElement(ownersArray[1])

      //let owners = [owner1, owner2];
      let rs1 = elementRS(owner1, dayElement)
      let rs2 = elementRS(owner2, dayElement)
      let s1 = rScore(rs1)
      let s2 = rScore(rs2)
      totalScore = s1 + s2
      console.log("owners and day elemenet", owner1, owner2, dayElement, rs1, rs2, totalScore)
    } else {

      const owner1 = checkElement(ownersArray[0])
      let rs1 = elementRS(owner1, dayElement)
      let s1 = rScore(rs1)
      totalScore = s1
      console.log("owners and day elemenet", owner1, dayElement, rs1, totalScore)
    }
    
   

    for (let j = 0; j < myArray.length; j++) {
      
      if (ownersArray.length > 1) {
        let 合3 = result_details[4]
        let 冲3 = result_details[5]
        let 合4 = result_details[6]
        let 冲4 = result_details[7]

        let sanhe3 = result_details[8]
        let sanhe4 = result_details[9]

        console.log("2 person")
        console.log("test values:",合3, 冲3, 合4, 冲4, sanhe3[0],sanhe3[1], sanhe4[0],sanhe4[1])
        console.log("peek" ,myArray[j])


      if (myArray[j] === 合3 || sanhe3[0] || sanhe3[1]) {

        const owner1 = checkElement(ownersArray[0])
        findings = "有合"
        console.log(`${i} 有合 Value ${合3}, found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)
        //let input = ""
        input = `${myArray[j]}${ownersArray[0]}`
        combinedElement = ganzhihe(input)
        
        console.log('x','o1',owner1, input, 'res:',combinedElement)

        // relationship = elementRS(doorElement, combinedElement )
        // result.push(relationship)
        // console.log('xs1',relationship)

        relationship = elementRS(owner1, combinedElement)
        
        score = rScore(relationship)
        totalScore += score
        effect.push(findings)
        result.push(relationship)
        combinedElements.push(combinedElement)
        console.log('xr1:',owner1, combinedElement ,relationship)

      }
      if (myArray[j] === 冲3) {
        findings = "有冲"
        console.log(`${i} 有冲 Value ${冲3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)
        effect.push(findings)

      }
      if (myArray[j] === 合4 || sanhe4[0] || sanhe4[1]) {

        const owner2 = checkElement(ownersArray[1])
        findings = "有合"
        console.log(`${i} 有合 Value ${合4} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
        console.log('x',findings)
        //let input = ""
        input = `${myArray[j]}${ownersArray[1]}`
        combinedElement = ganzhihe(input)
        
        console.log('x2','o2',owner2, input, 'res:',combinedElement)

        // relationship = elementRS(doorElement, combinedElement)
        // result.push(relationship)
        // console.log('xs2',relationship)

        relationship = elementRS(owner2, combinedElement)

        score = rScore(relationship)
        totalScore += score
        effect.push(findings)
        result.push(relationship)
        combinedElements.push(combinedElement)
        console.log('xr2:',owner2, combinedElement ,relationship)

      }
      if (myArray[j] === 冲4) {
        findings = "有冲"
        console.log(`${i} 有冲 Value ${冲4} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
        console.log('x',findings)
        effect.push(findings)

      } 
      else {
        findings = ""
        relationship += ""
      }
    } else {

      
      let 合3 = result_details[2]
      let 冲3 = result_details[3]
      
      let sanhe3 = result_details[4]
      
      console.log("1 person")
      //console.log("test values",合3, 冲3, sanhe3[0], sanhe3[1])
      console.log("test values:",合3, 冲3, sanhe3)

      if (myArray[j] === 合3 || sanhe3[0] || sanhe3[1]) {


        const owner1 = checkElement(ownersArray[0])
        findings = "有合"
        console.log(`${i} 有合 Value ${合3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)
        //let input = ""
        input = `${myArray[j]}${ownersArray[0]}`
        combinedElement = ganzhihe(input)
        
        console.log('x','o1',owner1, input, 'res:',combinedElement)

        // relationship = elementRS(doorElement, combinedElement )
        // result.push(relationship)
        // console.log('xs1',relationship)

        relationship = elementRS(owner1, combinedElement)
        
        score = rScore(relationship)
        totalScore += score
        effect.push(findings)
        result.push(relationship)
        combinedElements.push(combinedElement)
        console.log('xr1:',owner1, combinedElement ,relationship)

      }
      if (myArray[j] === 冲3) {
        findings = "有冲"
        console.log(`${i} 有冲 Value ${冲3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)
        effect.push(findings)

      }  else {
        findings = ""
        relationship += ""
      }

    }

      //payload[i]['地支合冲'] = findings
      payload[i]['地支合冲'] = effect
      payload[i]['地支合五行'] = combinedElements
      payload[i]['地支合关系'] = result
      payload[i]['dScore'] = totalScore
      //console.log('y', findings)      
      //payload[j]['chonghe'] = findings
    }

  } console.log(payload)
    return (payload)
}


//version4 is to check 地支 三合/三会 关系
export function version4(payload, birthYear){
  const reflist = [{name:"金", title:["巳", "酉", "丑"],type:"三合"}, 
                   {name:"水", title:["申", "子", "辰"],type:"三合"},
                   {name:"火", title:["寅", "午", "戌"],type:"三合"},
                   {name:"木", title:["亥", "卯", "未"],type:"三合"},

                   {name:"金", title:["申", "酉", "戌"],type:"三会"}, 
                   {name:"水", title:["丑", "子", "亥"],type:"三会"},
                   {name:"火", title:["巳", "午", "未"],type:"三会"},
                   {name:"木", title:["寅", "卯", "辰"],type:"三会"},
                ]
  let ownersArray = capacity_z(birthYear)
    
    console.log("version4:", ownersArray)
    const owner1 = checkElement(ownersArray[0])
    const owner2 = checkElement(ownersArray[1])
    let owners = [owner1, owner2];
    console.log('owners elemt', owners)

  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))

    let totalScore = (payload[i]['dScore'])
         
    //const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    
    
    let uniqueOwners = [...new Set(ownersArray)] // de-deup if same year
    const fOwners = uniqueOwners.filter(item => item.trim() !== "");

    
    const myArray = (payload[i]['zValue']) //date + time.
    let dtList = [...new Set(myArray)]
    
    const filteredList = dtList.filter(item => item.trim() !== "");
    let arrList = filteredList.concat(fOwners); // datetime + owners (depu)  

    let arList = [...new Set(arrList)]
    const fList = arList.filter(item => item.trim() !== "");

    console.log('------------v4------地支三合三会关系-------------------')
    console.log('date:', [i], (payload[i]['zValue'])  ,'dayElement:', dayElement,  'owners:' ,ownersArray ,'doorSector:', doorElement)
    
    let combinedElement = "";
    let combinedElements = [];
    let result = [];
    let findings = [];
    let score;  
  

    for (let z=0; z<reflist.length; z++) {
        console.log("checking array...",reflist[z].title, "against", fList)
        let cList = reflist[z].title
        
        let relationship = "";
        let finding = ""
        let count = 0

        for (let j=0; j<fList.length; j++){
            //console.log("find:",fList[j])
            if (cList.includes(fList[j])){
                count+=1
                
                console.log([j], fList[j], "found", "count:", count)	
                  
                if (count == 3) {
                    finding += reflist[z].type
                    combinedElement = reflist[z].name; 
                  
                    // relationship = elementRS(doorElement, combinedElement )
                  
                    // result.push(relationship)
                    // combinedElements.push(combinedElement)

                    if (ownersArray.length > 1) {
                      const owner1 = checkElement(ownersArray[0])
                      const owner2 = checkElement(ownersArray[1])
                      //let owners = [owner1, owner2];
                      //console.log('owners elemt', owners)

                  
                      relationship = elementRS(owner1, combinedElement)

                      score = rScore(relationship)
                      totalScore += score

                      result.push(relationship)
                      findings.push(finding)
                      combinedElements.push(combinedElement)
                      console.log('xr1:',owner1, combinedElement ,relationship)

                      relationship = elementRS(owner2, combinedElement)

                      score = rScore(relationship)
                      totalScore += score

                      result.push(relationship)
                      findings.push(finding)
                      combinedElements.push(combinedElement)
                      console.log('xr2:',owner2, combinedElement ,relationship)
                  } else {

                    const owner1 = checkElement(ownersArray[0])
                    //let owners = [owner1];
                    relationship = elementRS(owner1, combinedElement)

                    score = rScore(relationship)
                    totalScore += score

                    result.push(relationship)
                    findings.push(finding)
                    combinedElements.push(combinedElement)
                    console.log('xr1:',owner1, combinedElement ,relationship)
                  }
                    
                  //console.log("found all 3 values!", "result:", findings, combinedElement, relationship)
                } 
              } 
              else {
                finding += ""
                combinedElement += ""
                relationship += ""
              }   
            }

          } //payload[i]['chonghe2'] = findings
            payload[i]['地支三合三会五行'] = combinedElements
            payload[i]['地支三合三会关系'] = result
            payload[i]['地支三合三会'] = findings
            payload[i]['dScore'] = totalScore

        
        } 
          console.log(payload)
          return (payload)
  } 




//version5 is to check 地支 刑,破,害 关系
export function version5(payload, birthYear){
  const reflist_1 = [{title:["丑", "未", "戌"],type:"三刑"}, 
                     {title:["申", "寅", "巳"],type:"三刑"},];

  const reflist_2 = [{title:["子", "卯"],type:"刑"},
                     {title:["子", "酉"],type:"破"}, 
                     {title:["辰", "丑"],type:"破"}, 
                     {title:["卯", "午"],type:"破"}, 
                     {title:["戌", "未"],type:"破"}, 
                     {title:["未", "子"],type:"害"},
                     {title:["午", "丑"],type:"害"},
                     {title:["巳", "寅"],type:"害"},
                     {title:["辰", "卯"],type:"害"},
                     {title:["亥", "申"],type:"害"},
                     {title:["戌", "酉"],type:"害"}];
  
  const reflist_3 = ['辰','午','酉','亥'];
 

  /// add capacity function here. 
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))

    let totalScore = (payload[i]['dScore'])
         
    //const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    
    let ownersArray = capacity_z(birthYear)
    let uniqueOwners = [...new Set(ownersArray)];
    const filteredOList = uniqueOwners.filter(item => item.trim() !== "");
    //console.log("Owners:",ownersArray )
    //const ownersArray = capacity(birthYear)
    
    //const owner1 = checkElement(birthYear[0]['zYear'])
    //const owner2 = checkElement(birthYear[1]['zYear'])
    //let owners = [owner1, owner2];
    
    const myArray = (payload[i]['zValue']) //date + time.
    const myArray2 = (payload[i]['zValue']).split(" ")
    let dtList = [...new Set(myArray)]
    
    const filteredList = dtList.filter(item => item.trim() !== "");
    let arrList = filteredList.concat(filteredOList); // datetime + de dup owners
    let arrList2 = myArray2.concat(ownersArray);
    

    console.log('----------v5--------地支-刑破害-------------------')
    console.log('date:', (payload[i]['zValue'])  ,'dayElement:', 'owners:', ownersArray, dayElement,'doorSector:', doorElement)
    
    let result1 = [];
    let result2 = [];
    let result3 = [];
    let score = 0;

    console.log('---------------v5.1----地支-三刑-------------------')
    for (let z=0; z<reflist_1.length; z++) {
        
        console.log("checking array...",reflist_1[z].title, "against", arrList)
        
        let cList = reflist_1[z].title
        
        let findings = ""
        let count = 0

        for (let j=0; j<arrList.length; j++){
            
            //console.log("find:",arrList[j])
            
            if (cList.includes(arrList[j])){
                count+=1
                
                console.log([j], arrList[j], "found", "count:", count)	
                  
                if (count == 3) {
                  findings += reflist_1[z].type
                  // combinedElement = reflist[z].name; 
                  // relationship = elementRS(doorElement, combinedElement )
                  score--
                  totalScore += score

                  result1.push(findings)
                  // combinedElements.push(combinedElement)
                  console.log("found all 3 values!", "result:", findings)
                } 
              } 
              else {
                findings += ""
              }   
            }

          } //payload[i]['chonghe2'] = findings
            payload[i]['地支三刑'] = result1
            payload[i]['dScore'] = totalScore
    
    console.log('--------------v5.2-----地支-破害-------------------')     
    for (let z=0; z<reflist_2.length; z++) {
    
      console.log("checking array...",reflist_2[z].title, "against", arrList)
    
      let cList = reflist_2[z].title
    
      let findings = ""
      let count = 0

      for (let j=0; j<arrList.length; j++){
        
        //console.log("find:",arrList[j])
        
        if (cList.includes(arrList[j])){
            count+=1
            console.log([j], arrList[j], "found", "count:", count)	
              
            if (count == 2) {
              findings += reflist_2[z].type
              // combinedElement = reflist[z].name; 
              // relationship = elementRS(doorElement, combinedElement )
              score--
              totalScore += score

              result2.push(findings)
              // combinedElements.push(combinedElement)
              console.log("found both values!", "result:", findings)
            } 
          } 
          else {
            findings += ""
            }   
          }

        } //payload[i]['chonghe2'] = findings
          payload[i]['地支破害'] = result2
          payload[i]['dScore'] = totalScore
  
    console.log('----------------v5.3---地支-自刑-------------------')      
    for (let z=0; z<reflist_3.length; z++) {
      
      console.log("checking array...",reflist_3[z], "against", arrList2)
      
      let cList = reflist_3[z]   
      
      let findings = ""
      let count = 0; 

      for (let j=0; j<arrList2.length; j++){
          
          //console.log("find:",arrList2[j])

          if (cList === arrList2[j]){
              count+=1
    
            if (count === 2) {
              findings += "自刑"
              
              score-- 
              totalScore += score
              
              result3.push(findings)
              console.log(cList,  arrList2[j], findings)
            } 
          }
          else {
            findings += ""
          }   
        } 
      } payload[i]['地支自刑'] = result3
        payload[i]['dScore'] = totalScore
        
  } console.log(payload)
    return (payload)


}


export function version6(payload){
  console.log('----------------v6----------------------------------------') 
  

  for (let i = 0; i < payload.length; i++) {
    let strain_1 = []
    let strain_2 = []  
    let output;
    
    const tianganlist = (payload[i]['gValue']).split(" ") //
    const dizhilist = (payload[i]['zValue']).split(" ") //
    
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

      output = dayScore(strain_1, strain_2)
      console.log("i:",i, "output score:",output)
      payload[i]['z_Score'] = output  

  }
}


export function version7(payload, birthYear, period){
    let gren; 
    
    console.log('----------------v7----------------------------------------')      
    for (let i = 0; i < payload.length; i++) {
      let gresult;
      let g_list = []
      let lu_list = []
      let ma_list = []
      //let totalScore = (payload[i]['dScore'])
      let ownersArray = capacity_z(birthYear)
      console.log("check owner load:",ownersArray.length)
        

      const dSector = ((payload[i]['door']))
      const tianganlist = (payload[i]['gValue']).split(" ") //

      const dizhilist = (payload[i]['zValue']).split(" ") //
      console.log('date:', (payload[i]['zValue']), 'owners:', ownersArray,'doorSector:', dSector)
      console.log(period, dizhilist)
      
      console.log('----------------v7-----------------------------------------')      
      for (let d=0; d<dizhilist.length; d++ ){

        //console.log('----------------v7---找马-------------------------------')
        gresult = cheatsheet(dizhilist[d])
        let find_ma = gresult?.ma
        //console.log('ma:',dizhilist[d], ":", find_ma)
        ma_list.push(find_ma)
        
        //console.log('----------------v7---找禄-------------------------------')  
        gresult = cheatsheet(dizhilist[d])
        let find_lu = gresult?.lu
        lu_list.push(find_lu)
        
        //console.log('----------------v7---找贵人-----------------------------')      
        if (period == "冬至"){
          gren = "阴贵"
          //console.log(period, gren)
          //console.log('mapping:', dizhilist[d], ':', gresult?.yingui)
          g_list.push(gresult?.yingui)
          // console.log('glist',glist)
        } 
        else {
          //gren = "阳贵"
          //console.log(period, gren)
          //console.log('mapping:', dizhilist[d], ':', gresult?.yangui)
          g_list.push(gresult?.yangui)
          // console.log('glist',glist)
        }
    }
    const f_ma_list = ma_list
                .filter((item) => item !== "")
                .reduce((result, item) => result.concat(item), []);

    const f_glist = g_list
                .filter((item) => item !== "")
                .reduce((result, item) => result.concat(item), []);
    
    const f_lu_list = lu_list
                .filter((item) => item !== "")
                .reduce((result, item) => result.concat(item), []);
    
    //const flat_glist = f_glist.reduce((result, item) => result.concat(item), []);
    //const flat_lu_list = f_lu_list.reduce((result, item) => result.concat(item), []);
    const uniq_glist = Array.from(new Set(f_glist))
    const uniq_lu_list = Array.from(new Set(f_lu_list))
    const uniq_ma_list = Array.from(new Set(f_ma_list))

    console.log(payload[i]['gValue'])
    console.log(payload[i]['zValue'])
    console.log('g_list:', f_glist, uniq_glist)
    console.log('lu_list:', f_lu_list, uniq_lu_list)
    console.log('ma_list', f_ma_list, uniq_ma_list)

    let malist=[]
    let lulist=[]
    let guilist=[]

    for(let x=0; x<uniq_ma_list.length; x++){
      let keyitem = uniq_ma_list[x]
      if(payload[i]['zValue'].includes(keyitem)){
        malist.push(keyitem)
        //console.log('ma:',keyitem)
      }
    }
    for(let x=0; x<uniq_glist.length; x++){
      let keyitem = uniq_glist[x]
      if(payload[i]['gValue'].includes(keyitem)){
        guilist.push(keyitem)
        //console.log('guiren:',keyitem)
      }
    }
    for(let x=0; x<uniq_lu_list.length; x++){
      let keyitem = uniq_lu_list[x]
      if(payload[i]['gValue'].includes(keyitem)){
        lulist.push(keyitem)
        //console.log('lu:',keyitem)
      }
    }
    payload[i]['z_马'] = malist
    payload[i]['z_禄'] = lulist
    payload[i]['z_贵'] = guilist
    if (malist.length>=1 && lulist.length>= 1 && guilist.length>=1){
      console.log("禄马贵")
    }
    else if (malist.length>=1 && lulist.length>=1 ){
      console.log("禄马")
    }
  } 
}






export function cleanup(payload){
  for (let i = 0; i < payload.length; i++) {
    //console.log(payload[i]['地支合五行'].filter((item) => item !== ""))
    //console.log(payload[i]['地支合关系'].filter((item) => item !== ""))
    if (payload[i]['地支合五行'].length === 0 || payload[i]['地支合关系'].length ===0) {
      console.log("array empty, skipping cleanup") 
    } else {
    payload[i]['地支合五行'] = payload[i]['地支合五行'].filter((item) => item !== "")
    payload[i]['地支合关系'] = payload[i]['地支合关系'].filter((item) => item !== "")
    }

  }

  console.log("clean up done.")
  console.log(payload)
  return payload
}