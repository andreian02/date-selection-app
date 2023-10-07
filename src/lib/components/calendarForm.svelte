<script>
  import { goto } from '$app/navigation';
  import { Dcodes, homeowners, doorSector, yearKeys } from '../../Store.js';
  import {Solar, Lunar} from 'lunar-javascript'
  
  import {air_datepicker}  from "$lib/components/calendarItem";
  import localeEn from 'air-datepicker/locale/en';
  import { DayElement, dayofbirthDetails, yearofBirthdate } from '../../Utils.js';
  
  import Newswitch from './newswitch.svelte';
  import Calswitch from './calswitch.svelte';

  export let value = 'couple';
  export let mode = 'off';
	
  let isSwitchedOn = true;
  let isCalendarOn = true;

  function handleSwitch() {
    isSwitchedOn = !isSwitchedOn;
		console.log(isSwitchedOn)}

  function handleSwitch2() {
    isCalendarOn = !isCalendarOn;
    console.log(isCalendarOn)}

	let isExpanded = false

	function clickHandler() {
		isExpanded = !isExpanded
	}

  let selected 
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

  let options = {locale: localeEn, range: true, timepicker: false, 
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
        dateRangeData = data 
    })


  const getResults = () => {
      let sc1 =""
      let sc2 =""

      let sc1year = ""
      let sc2year = ""

      let counter = 0;
      
      console.log("Door Sector:",selectedM)
      console.log("Date Range:", range.start, range.end)
      console.log("firstkey:", dobDate1)
      console.log("secondkey:", dobDate2)

      

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
              <p class="pb-4">Please fill out all the fields.</p>
              <Newswitch bind:value={value} onSwitch={handleSwitch}/>

              <p class="pt-4"></p>
              <Calswitch bind:mode={mode} onSwitch2={handleSwitch2}/>

            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
                <div class="md:col-span-5">
                  <label for="full_name">Date Period</label>
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



