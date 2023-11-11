// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import {Solar, Lunar} from 'lunar-javascript'

export async function load () {
    const date = new Date();
    var Ldate = Lunar.fromDate(date);
    
    let Year = Ldate.getYearInGanZhiExact()
    let Month = Ldate.getMonthInGanZhiExact()
    let Day = Ldate.getDayInGanZhi()
    let Time = Ldate.getTimeInGanZhi()


    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    //let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    let solar2 = Solar.fromYmd(currentYear,currentMonth,currentDay);

    return {
        Ldate,
        Year, Month, Day, Time,
        solar2
    }
  }