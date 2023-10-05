<script>
  import { goto } from '$app/navigation';
  import { Dcodes, homeowners, doorSector, yearKeys, protocolMode } from '../../Store.js';
  import {Solar, Lunar} from 'lunar-javascript'
  
  import {air_datepicker}  from "$lib/components/calendarItem";
  import localeEn from 'air-datepicker/locale/en';
  import { DayElement, dayofbirthDetails, yearofBirthdate } from '../../Utils.js';
  
  import Calswitch from './calswitch.svelte';
  import Newswitch from './newswitch.svelte';
  export let value = 'couple';
  export let mode = 'off';
	
  let isSwitchedOn = true;
  let isCalendarOn = true;

  let protocolM = 'main';

	function handleSwitch() {
    isSwitchedOn = !isSwitchedOn;
		console.log(isSwitchedOn)}
  
  function handleSwitch2() {
    if (isCalendarOn = !isCalendarOn){
      protocolM = 'main'
    } else {
      protocolM = 'protocol-one'
    }
    
		console.log(isCalendarOn, protocolM)}

	let isExpanded = false
  let isInputVisible = true;
  
  function toggleInputVisibility() {
    isInputVisible = !isInputVisible;
    console.log(isInputVisible)
  }

	function clickHandler() {
		isExpanded = !isExpanded
	}

  let selected;  
  let sectors = ['震', '巽','离', '坤', '兑',  '乾', '坎', '艮' ];
  

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
                  
  $: protocolM = protocolM
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
        dateRangeData = data 
        // console.log(data)
        // console.log("payload:", uniquedata2)
    })


  const getResults = () => {
      let sc1 =""
      let sc2 =""

      let sc1year = ""
      let sc2year = ""

      let counter = 0;
      
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

      

      function ifnotvisable(sc1year, sc2year) {
          if (isSwitchedOn == false){
            console.log("REMOVE THE SECOND KEY, second input is not visable")
            sc2 = "";
            sc2year = "";
            yearKey.push(sc1year)

          } else {
            console.log("Maintain Operation, both input visable")
            yearKey.push(sc1year, sc2year)

          }
          return yearKey
      }
      
      ifnotvisable(sc1year, sc2year)   
      console.log("year key:",yearKey) 
      //yearKey.push(sc1year, sc2year)
      
      


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

      protocolMode.update(()=>{
        return(protocolM)
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
              
              let gStems = "" 
              let zStems = ""

              engDate = (engdate.getDay()+"/"+engdate.getMonth()+"/"+engdate.getYear())
              
              // console.log("looping:", dzt1, engdate.getDay(), engdate.getMonth(), engdate.getYear());
              // console.log('年干支：'+dz2.getYearInGanZhi(), 
              //         '月干支：'+dz2.getMonthInGanZhiExact(),
              //         '日干支：'+dz2.getDayInGanZhi(),
              //         '时辰干支：'+dz2.getTimeInGanZhi()
                      
              //         );
              
              dayElement = (DayElement(dz2.getDayGan()))
              gStems = (dz2.getYearGan()+" "+dz2.getMonthGan()+" "+dz2.getDayGan()+" "+dz2.getTimeGan())
              zStems = (dz2.getYearZhi()+" "+dz2.getMonthZhi()+" "+dz2.getDayZhi()+" "+dz2.getTimeZhi())
              counter++ 
              

              payload.push({andex:counter,
                            date:engDate, 
                            dayEl: dayElement,
                            gValue: gStems,
                            zValue: zStems,
                            door: selected})

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
    <div class="container max-w-screen-md mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">择日表格 ｜ Date Selection Form V1</h2>
        <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>
  
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Personal Details</p>
              <p class='pb-4'>Please fill out all the fields.</p>
              
              <Calswitch bind:mode={mode} onSwitch2={handleSwitch2}/>
              <p class="pt-4"></p>

              {#if isCalendarOn}
              <Newswitch bind:value={value} onSwitch={handleSwitch}/>
              {/if}
              
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
                <div class="md:col-span-5">
                  <label for="full_name">Date Period</label>
                  <!-- <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" /> -->
                  <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options} />
                </div>

                {#if isCalendarOn}
                <div class="md:col-span-2">
                  <label for="address">Date of Birth 1</label>
                  <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options2} />
                </div>
  
                <div class="md:col-span-2">
                  {#if isSwitchedOn}
                    <label for="city">Date of Birth 2</label>
                    <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" use:air_datepicker={options3} />
                  {/if}
                </div>
                

               

                <div class="md:col-span-1">
                  <label for="TwentyFourMountain">Door Sector</label>
                      <select type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" bind:value={selected}>
                        {#each sectors as gram}
                          <option value={gram}>
                            {gram}
                          </option>
                        {/each}
                    </select>
                </div>
                {/if}
  
                <br />
                <br />
        
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



