<script>
  import { goto } from '$app/navigation';
  import { Dcodes, homeowners, doorSector, yearKeys } from '../../Store.js';
  import {Solar, Lunar} from 'lunar-javascript'
  
  import {air_datepicker}  from "$lib/components/calendarItem";
  import localeEn from 'air-datepicker/locale/en';
  import { DayElement, dayofbirthDetails, yearofBirthdate } from '../../Utils.js';
  
	let isExpanded = false

	function clickHandler() {
		isExpanded = !isExpanded
	}

  let selected  
  let shans = ['甲','卯','乙','辰','巽','巳','丙', '午', '丁', '未', '坤', 
               '申', '庚', '酉', "辛", '戌','乾','亥','壬','子','癸','丑','艮','寅'];


  let todayDate = new Date(); 
  
  const range = {
    start: null, 
    end: null
  }

  const firstKey  = {
    h1: null,
  }

  const secondKey  = {
    h2: null
  }

  let options = {locale: localeEn, range: true, timepicker: true, 
                  multipleDatesSeparator: ' - ',  
                  onSelect: (event) => {
                      range.start = event.formattedDate[0];
                      range.end = event.formattedDate[1];
                      console.log(event);}
                    }

  let options2 = {locale: localeEn, timepicker: true,
                  onSelect: (event) => {
                      firstKey.h1 = event.formattedDate;        
                      // console.log(home.h1)
                      console.log(event);}
                    }
  let options3 = {locale: localeEn, timepicker: true,
                  onSelect: (event) => {
                      secondKey.h2 = event.formattedDate;        
                      // console.log(home.h2)
                      console.log(event);}
                    }
                  
  
  $: selectedM = selected
  $: startDate = new Date(range.start);
  $: endDate = new Date(range.end);

  $: dobDate1 = new Date(firstKey.h1);
  $: dobDate2 = new Date(secondKey.h2);

  

  let payload = [];
  let dateRangeData = [];
  let homekeys = [];
  let yearKey = [];


  Dcodes.subscribe((data)=>{
        dateRangeData = data // console.log(data)
        // console.log("payload:", uniquedata2)
    })


  const getResults = () => {
      let sc1 =""
      let sc2 =""

      let sc1year = ""
      let sc2year = ""
      
      // console.log("#####################################################")
      console.log("Door Sector:",selectedM)
      console.log("Date Range:", range.start, range.end)
      console.log("firstkey:", dobDate1)
      console.log("secondkey:", dobDate2)

      // console.log("#####################################################")
      // console.log(dobDate2)
      //const person2 = Lunar.fromDate(dobDate2);
      // console.log("YEAR:", person2.getYearZhi(), person2.getYearGan(), person2.getYear())

      // console.log('年干支：'+person2.getYearInGanZhi(), 
      //                 '月干支：'+person2.getMonthInGanZhiExact(),
      //                 '日干支：'+person2.getDayInGanZhi(),
      //                 '时辰干支：'+person2.getTimeInGanZhi()
      // )

      sc1 = dayofbirthDetails(dobDate1);
      sc2 = dayofbirthDetails(dobDate2);

      sc1year = yearofBirthdate(dobDate1);
      sc2year = yearofBirthdate(dobDate2);

      console.log("YEAR")
      console.log(sc1year)
      console.log(sc2year)
      
      yearKey.push(sc1year, sc2year)


      homekeys.push(sc1, sc2)
      homeowners.update(()=>{
        return(homekeys)
      })

      yearKeys.update(()=>{
        return(yearKey)
      })
            
      doorSector.update(()=>{
        return(selected)
      })



      for (let date = startDate; date <= endDate;  date.setDate(date.getDate() + 1)) 
          
          {const dz1 = Lunar.fromDate(new Date(date));

          // let zdate = ""
          // zdate = ('年干支:'+dz1.getYearInGanZhi() + 
          //          ' 月干支:'+dz1.getMonthInGanZhiExact() +
          //          ' 日干支:'+dz1.getDayInGanZhi())
          
          // console.log("Date:", zdate)
          // console.log("#####################################################")
          let doThings = {can:"",
                          cannot:""}

          doThings.can = (dz1.getDayYi())
          doThings.cannot = (dz1.getDayJi())


          for (let i = 0; i <24; i+=2) {
              const dzt1 = new Date(date.setHours(i))
              //console.log(dzt1)
              const engdate = Solar.fromDate(dzt1)
              const dz2 = Lunar.fromDate(dzt1)
              
            
              let engDate = ""
              let dayElement = ""
              
              let hStems = "" 
              let eStems = ""

              engDate = (engdate.getDay()+"·"+engdate.getMonth()+"·"+engdate.getYear())
              
              // console.log("looping:", dzt1, engdate.getDay(), engdate.getMonth(), engdate.getYear());
              // console.log('年干支：'+dz2.getYearInGanZhi(), 
              //         '月干支：'+dz2.getMonthInGanZhiExact(),
              //         '日干支：'+dz2.getDayInGanZhi(),
              //         '时辰干支：'+dz2.getTimeInGanZhi()
                      
              //         );
              
              dayElement = (DayElement(dz2.getDayGan()))
              hStems = (dz2.getYearGan()+" "+dz2.getMonthGan()+" "+dz2.getDayGan()+" "+dz2.getTimeGan())
              eStems = (dz2.getYearZhi()+" "+dz2.getMonthZhi()+" "+dz2.getDayZhi()+" "+dz2.getTimeZhi())

              
              

              payload.push({key:i, 
                            detail:engDate, 
                            dayEl: dayElement,
                            evalue: eStems,
                            hvalue: hStems
                          })

              payload = payload

              dateRangeData = [... new Set(payload)]
            }
            

        }
        Dcodes.update(() => {
                      return(dateRangeData)
                      })  

        goto('/devResults')
        return (dateRangeData)
        

        
    };
</script>


<div class="p-2 flex">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">择日表格 ｜ Date Selection Form V1</h2>
        <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>
  
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <!-- <div class="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                </div> -->
  
                <div class="md:col-span-5">
                  <label for="full_name">Date Period</label>
                  <!-- <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" /> -->
                  <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options} />
                </div>

                <div class="md:col-span-2">
                  <label for="address">Date of Birth 1</label>
                  <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options2} />
                </div>
  
                <div class="md:col-span-2">
                    <label for="city">Date of Birth 2</label>
                    <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options3} />
                </div>

                <!-- <div class="md:col-span-1">
                  <label for="zipcode">Door Sector</label>
                  <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" bind:value={dsector} />
                  
                </div> -->

               
                <div class="md:col-span-1">
                  <label for="TwentyFourMountain">Door Sector</label>
                      <select type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" bind:value={selected}>
                        {#each shans as shan}
                          <option value={shan}>
                            {shan}
                          </option>
                        {/each}
                    </select>
                </div>

                
                

                
  
                
                <!-- <div class="md:col-span-2">
                  <label for="country">Start Date</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="country" id="country" placeholder="Start" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={range.start} />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                  </div>
                </div>
  
                <div class="md:col-span-2">
                  <label for="state">End Date</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="state" id="state" placeholder="End" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={range.end} />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                  </div>
                </div> -->
  
                

                <br />
                <br />
                

                <!-- <div class="md:col-span-2">
                  {#if range.start && range.end}
                    <p>Start: {range.start}</p>
                    <p>End: {range.end}</p>
                  {/if} -->
                  <!-- <label for="soda">How many soda pops?</label>
                  <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div> -->
                <!-- </div> -->
        
                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button disabled={selected == ""} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      on:click={()=>{getResults()}}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



<!-- {uniquedata2} -->