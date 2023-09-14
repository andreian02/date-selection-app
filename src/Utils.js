import { Lunar } from 'lunar-javascript'

// 甲、乙、丙、丁、戊、己、庚、辛、壬、癸 

export function helper(day){

    //console.log("Utils...working?")
    let elementOfDay =""

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

  // let todayDate = new Date(); 
  // const checker = Lunar.fromDate(todayDate);


  // if (person.getDay() == checker.getDay()) {
  //   bz = ""  
  
  // } else (bz = (person.getYearGan()+person.getYearZhi()+"年 "
  //             +person.getMonthGan()+person.getMonthZhi()+"月 "
  //             +person.getDayGan()+person.getDayZhi()+"日 "
  //             +person.getTimeGan()+person.getTimeZhi()+"时"
  //             ))
  return (bz)
}

export function yearofBirthdate(dob){
  
  const birthYear = {
    hYear: "",
    eYear: ""
  }
  
  
  const person = Lunar.fromDate(dob);
  birthYear.hYear = (person.getYearGan())
  birthYear.eYear = (person.getYearZhi())

  return (birthYear)

}
