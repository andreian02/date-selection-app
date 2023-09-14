<script>
    
  import CalendarForm from '$lib/components/calendarForm.svelte';
  // import {Solar, Lunar} from 'lunar-javascript'

  // //let solar = Solar.fromYmd(1986,5,29);
  // // console.log(solar.toFullString());
  // // console.log(solar.getLunar().toFullString());

  // const date = new Date();
  // var d = Lunar.fromDate(date);


  // let currentDay= String(date.getDate()).padStart(2, '0');
  // let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  // let currentYear = date.getFullYear();
  // let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  // console.log("current:" , currentDate)
  

  // let solar2 = Solar.fromYmd(currentYear,currentMonth,currentDay);
  // console.log(solar2.getLunar().toFullString());


  // let name = currentDate;

  // console.log('阴历年：'+d.getYear());
  // console.log('阴历月：'+d.getMonth());
  // console.log('阴历日：'+d.getDay());

  // //以正月初一起
  // console.log('年天干：'+d.getYearGan());
  // console.log('年地支：'+d.getYearZhi());
  // console.log('年干支：'+d.getYearInGanZhi());

  // //以立春当天起
  // console.log('年天干：'+d.getYearGanByLiChun());
  // console.log('年地支：'+d.getYearZhiByLiChun());
  // console.log('年干支：'+d.getYearInGanZhiByLiChun());

  // //以立春交接时刻起
  // console.log('年天干：'+d.getYearGanExact());
  // console.log('年地支：'+d.getYearZhiExact());
  // console.log('年干支：'+d.getYearInGanZhiExact());

  // //以节交接当天起
  // console.log('月天干：'+d.getMonthGan());
  // console.log('月地支：'+d.getMonthZhi());
  // console.log('月干支：'+d.getMonthInGanZhi());

  // //以节交接时刻起
  // console.log('月天干：'+d.getMonthGanExact());
  // console.log('月地支：'+d.getMonthZhiExact());
  // console.log('月干支：'+d.getMonthInGanZhiExact());

  // console.log('日天干：'+d.getDayGan());
  // console.log('日地支：'+d.getDayZhi());
  // console.log('日干支：'+d.getDayInGanZhi());

  // console.log('时辰天干：'+d.getTimeGan());
  // console.log('时辰地支：'+d.getTimeZhi());
  // console.log('时辰干支：'+d.getTimeInGanZhi());
  
</script>



<svelte:head>
<title>Calendar</title>
<meta name="description" content="Calendar App" />
</svelte:head>

<section>
  <CalendarForm/>
</section>


<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.6;
}

</style>
