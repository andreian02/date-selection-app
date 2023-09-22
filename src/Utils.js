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
    gYear: "",
    zYear: "" 
  }
  
  birthYear.gYear = (person.getYearGan())
  birthYear.zYear = (person.getYearZhi())
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
  else {
        relationship = ""
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
      
      const ownersArray = [birthYear[0]['gYear'], birthYear[1]['gYear']]
      
      const owner1 = checkElement(birthYear[0]['gYear'])
      const owner2 = checkElement(birthYear[1]['gYear'])
      let owners = [owner1, owner2];
      
      
      const myArray = (payload[i]['gValue']).split(" ") //date + time.
  
        console.log('-------------------天干合冲关系-------------------')
        console.log('dayElement:', dayElement,  'owners:', owners,'doorSector:', doorElement)
        console.log("合:"  ,合1, 合2)
        let findings = ""
        let input = ""
        let combinedElements = [];
        let combinedElement = "";
        let relationship = "";
        let result = [];

        for (let j = 0; j < myArray.length; j++) {
          
          if (myArray[j] === 合1) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
            console.log('x1',findings, myArray[j], 合1)
            //let input = ""
            input = `${myArray[j]}${ownersArray[0]}`
            combinedElement = ganzhihe(input)
            
            console.log('x','o1',owner1, input, 'res:',combinedElement)
            

            relationship = elementRS(owner1, combinedElement)
            result.push(relationship)
            combinedElements.push(combinedElement)
            console.log('xr1:',owner1, combinedElement ,relationship)
            

          }
          if (myArray[j] === 合2) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
            console.log('x2',findings, myArray[j], 合2)
            //let input = ""
            input = `${myArray[j]}${ownersArray[1]}`
            combinedElement = ganzhihe(input)

            console.log('x','o2',owner2, input, 'res:',combinedElement)
            

            relationship = elementRS(owner2, combinedElement)
            result.push(relationship)
            combinedElements.push(combinedElement)
            console.log('xr2:',owner2, combinedElement ,relationship)
            

          }
          if (myArray[j] === 冲1) {
            findings += "有冲"
            console.log(`${i} 有冲 Value ${冲1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
            console.log('x1',findings)

          }
          if (myArray[j] === 冲2) {
            findings += "有冲"
            console.log(`${i} 有冲 Value ${冲2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
            console.log('x2',findings)

          } 
          else {
            findings += ""
            relationship += ""
          }   

        payload[i]['天干合冲'] = findings
        payload[i]['天干六合'] = combinedElements
        payload[i]['天干合关系'] = result
        //console.log('y', findings)      
        //payload[j]['chonghe'] = findings
      }

    } console.log(payload)
      return (payload)
        
  }


//version3 is to check 地支 合/冲 关系
export function version3(payload, birthYear, 合3,合4, 冲3,冲4){
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))
         
    const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    const owner1 = checkElement(birthYear[0]['zYear'])
    const owner2 = checkElement(birthYear[1]['zYear'])
    let owners = [owner1, owner2];

    const myArray = (payload[i]['zValue']).split(" ") //date + time.

    console.log('-------------------地支合冲关系-------------------')
    console.log('date:', (payload[i]['zValue'])  ,'dayElement:', dayElement, 'owners:' ,owners , 'doorSector:', doorElement)
    console.log("合:"  ,合3, 合4)
    
    let findings = "";
    let input = "";
    let combinedElements = [];
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
        
        console.log('x','o1',owner1, input, 'res:',combinedElement)

        // relationship = elementRS(doorElement, combinedElement )
        // result.push(relationship)
        // console.log('xs1',relationship)

        relationship = elementRS(owner1, combinedElement)
        result.push(relationship)
        combinedElements.push(combinedElement)
        console.log('xr1:',owner1, combinedElement ,relationship)

      }
      if (myArray[j] === 合4) {
        findings += "有合"
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
        result.push(relationship)
        combinedElements.push(combinedElement)
        console.log('xr2:',owner2, combinedElement ,relationship)

      }
      if (myArray[j] === 冲3) {
        findings += "有冲"
        console.log(`${i} 有冲 Value ${冲3} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
        console.log('x',findings)

      }
      if (myArray[j] === 冲4) {
        findings += "有冲"
        console.log(`${i} 有冲 Value ${冲4} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
        console.log('x',findings)

      } 
      else {
        findings += ""
        relationship += ""
      }   
      payload[i]['地支合冲'] = findings
      payload[i]['地支合五行'] = combinedElements
      payload[i]['地支合关系'] = result
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
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))
         
    const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    const owner1 = checkElement(birthYear[0]['zYear'])
    const owner2 = checkElement(birthYear[1]['zYear'])
    let owners = [owner1, owner2];
    
    let uniqueOwners = [...new Set(ownersArray)] // de-deup if same year
    const fOwners = uniqueOwners.filter(item => item.trim() !== "");

    
    const myArray = (payload[i]['zValue']) //date + time.
    let dtList = [...new Set(myArray)]
    
    const filteredList = dtList.filter(item => item.trim() !== "");
    let arrList = filteredList.concat(fOwners); // datetime + owners (depu)  

    let arList = [...new Set(arrList)]
    const fList = arList.filter(item => item.trim() !== "");

    console.log('-------------------地支三合三会关系-------------------')
    console.log('date:', (payload[i]['zValue'])  ,'dayElement:', dayElement,  'owners:' ,owners ,'doorSector:', doorElement)
    
    let combinedElement = "";
    let combinedElements = [];
    let result = [];
    let findings = [];
  

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

                    relationship = elementRS(owner1, combinedElement)
                    result.push(relationship)
                    findings.push(finding)
                    combinedElements.push(combinedElement)
                    console.log('xr1:',owner1, combinedElement ,relationship)

                    relationship = elementRS(owner2, combinedElement)
                    result.push(relationship)
                    findings.push(finding)
                    combinedElements.push(combinedElement)
                    console.log('xr2:',owner2, combinedElement ,relationship)
                    
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
  
  for (let i = 0; i < payload.length; i++) {
    //let findings = ""
    //let score = 0;
    const dayElement = (payload[i]['dayEl'])
    const doorElement = checkElement((payload[i]['door']))
         
    const ownersArray = [birthYear[0]['zYear'], birthYear[1]['zYear']]
    
    const owner1 = checkElement(birthYear[0]['zYear'])
    const owner2 = checkElement(birthYear[1]['zYear'])
    let owners = [owner1, owner2];
    
    const myArray = (payload[i]['zValue']) //date + time.
    const myArray2 = (payload[i]['zValue']).split(" ")

    let dtList = [...new Set(myArray)]
    
    const filteredList = dtList.filter(item => item.trim() !== "");
    let arrList = filteredList.concat(ownersArray); // datetime + owners

    let arrList2 = myArray2.concat(ownersArray);
    

    console.log('-------------------地支-刑破害-------------------')
    console.log('date:', (payload[i]['zValue'])  ,'dayElement:', dayElement,  'owners:' ,owners ,'doorSector:', doorElement)
    
    let result1 = [];
    let result2 = [];
    let result3 = [];

    console.log('-------------------地支-三刑-------------------')
    for (let z=0; z<reflist_1.length; z++) {
        
        console.log("checking array...",reflist_1[z].title, "against", arrList)
        
        let cList = reflist_1[z].title
        
        let findings = ""
        let count = 0

        for (let j=0; j<arrList.length; j++){
            
            console.log("find:",arrList[j])
            
            if (cList.includes(arrList[j])){
                count+=1
                
                console.log([j], arrList[j], "found", "count:", count)	
                  
                if (count == 3) {
                  findings += reflist_1[z].type
                  // combinedElement = reflist[z].name; 
                  // relationship = elementRS(doorElement, combinedElement )
                  
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
    
    console.log('-------------------地支-破害-------------------')     
    for (let z=0; z<reflist_2.length; z++) {
    
      console.log("checking array...",reflist_2[z].title, "against", arrList)
    
      let cList = reflist_2[z].title
    
      let findings = ""
      let count = 0

      for (let j=0; j<arrList.length; j++){
        
        console.log("find:",arrList[j])
        
        if (cList.includes(arrList[j])){
            count+=1
            console.log([j], arrList[j], "found", "count:", count)	
              
            if (count == 2) {
              findings += reflist_2[z].type
              // combinedElement = reflist[z].name; 
              // relationship = elementRS(doorElement, combinedElement )
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
  
    console.log('-------------------地支-自刑-------------------')      
    for (let z=0; z<reflist_3.length; z++) {
      
      console.log("checking array...",reflist_3[z], "against", arrList2)
      
      let cList = reflist_3[z]   
      
      let findings = ""
      let count = 0; 

      for (let j=0; j<arrList2.length; j++){
          
          console.log("find:",arrList2[j])

          if (cList === arrList2[j]){
              count+=1
    
            if (count === 2) {
              findings += "自刑"
              result3.push(findings)
              console.log(cList,  arrList2[j], findings)
            } 
          }
          else {
            findings += ""
          }   
        } 
      } payload[i]['地支自刑'] = result3
        
  } console.log(payload)
    return (payload)


}