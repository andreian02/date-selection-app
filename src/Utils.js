import { Lunar } from 'lunar-javascript'

// '甲','卯','乙','辰','巽','巳','丙', '午', '丁', '未', '坤', '申', '庚', '酉', "辛", '戌','乾','亥','壬','子','癸','丑','艮','寅'
export function checkElement(input){
  
  let element =  ""
  
  if (input == "壬" || input == "癸" || input == "亥" || input == "子") {
    element = "水"
  } else if (input == "甲" || input == "乙" || input == "寅" || input == "卯" || input == "巽") {
    element = "木"
  } else if (input == "丙" || input == "丁" || input == "巳" || input == "午") {
    element = "火"
  } else if (input == "戊" || input == "己" || input == "丑" || input == "辰" || input == "未" || input == "戌" || input == "艮" || input == "坤") {
    element = "土"
  } else if (input == "庚" || input == "辛" || input == "申" || input == "酉" || input == "乾") {
    element = "金"
  }
      return element
  };


export function tianganhe(input){
  let combinedElement = ""
  if (input == "甲己" || input == "己甲") {
    combinedElement = "土"
  }
  if (input == "乙庚" || input == "庚乙") {
    combinedElement = "金"
  } 
  if (input == "丙辛" || input == "辛丙"){
    combinedElement = "水"
  }
  if (input == "丁壬" || input == "壬丁"){
    combinedElement = "木"
  }
  return combinedElement
}
  


export function version2(payload, birthYear, 合1,合2, 冲1,冲2){
  
    for (let i = 0; i < payload.length; i++) {
      //let findings = ""
      //let score = 0;
      const ownersArray = [birthYear[0]['hYear'], birthYear[1]['hYear']]
      const myArray = (payload[i]['hvalue']).split(" ") //date + time.
  
        console.log('---------------------------')
        let findings = ""
        let input = ""
        let combinedElement = "";
        for (let j = 0; j < myArray.length; j++) {
          
          if (myArray[j] === 合1) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合1} found at index ${j}, ${myArray[j]}, ${ownersArray[0]}`);
            console.log('x',findings)
            let input = ""
            input = `${myArray[j]}${ownersArray[0]}`
            combinedElement = tianganhe(input)
            console.log(tianganhe(input))


             // If you want to stop searching after finding the first occurrence
          }
          if (myArray[j] === 合2) {
            findings += "有合"
            console.log(`${i} 有合 Value ${合2} found at index ${j}, ${myArray[j]}, ${ownersArray[1]}`);
            console.log('x',findings)
            let input = ""
            input = `${myArray[j]}${ownersArray[1]}`
            combinedElement = tianganhe(input)
            console.log(tianganhe(input))
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
            
          }   

        payload[i]['chonghe'] = findings
        payload[i]['tganhe'] = combinedElement
        //console.log('y', findings)      
        //payload[j]['chonghe'] = findings
        //console.log("Date+Time" ,myArray)
        //console.log("ownerYear" ,ownersArray)
        }
        console.log('---version2----------')
       
        } 
        console.log(payload)
        return (payload)
        
  }



// export function elementRS(){
//   if 

// }







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


