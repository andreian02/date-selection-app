<script>
  import { goto } from '$app/navigation';
  import { Dcodes, homeowners, doorSector, yearKeys, pillarChoice, protocolMode } from '../../Store.js';
  import {Solar, Lunar} from 'lunar-javascript'
  
  import {air_datepicker}  from "$lib/components/calendarItem";
  import localeEn from 'air-datepicker/locale/en';
  import { DayElement, dayofbirthDetails, YearofBirthdate, MonthofBirthdate, DayofBirthdate, TimeofBirthdate } from '../../Utils.js';
  
  import Calswitch from './calswitch.svelte';
  import Newswitch from './newswitch.svelte';
	import Radiogroup from './radiogroup.svelte';
  export let value = 'couple';
  export let mode = 'off';
	
  let isSwitchedOn = true;
  let isCalendarOn = true;

  let protocolM = 'main';

 
	let pValue;
	const p_options = [{
		label: '年',
    value: 0
	}, {
    label: '月',
		value: 1
	}, {
    label: '日',
		value: 2
	}, {
    label: '时',
		value: 3
	}]


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
                  buttons: ['clear'],
                  multipleDatesSeparator: ' - ',  
                  onSelect: (event) => {
                      range.start = event.formattedDate[0];
                      range.end = event.formattedDate[1];
                      console.log(event);}
                    }

  let options2 = {locale: localeEn, timepicker: false,
                  buttons: [{
                    content(dp) {
                        return dp.opts.timepicker 
                            ? 'Turn OFF timepicker'
                            : 'Turn ON timepicker'
                    },
                    onClick(dp) {
                        let viewDate = dp.viewDate;
                        let today = new Date();
                        
                        // Since timepicker takes initial time from 'viewDate', set up time here, 
                        // otherwise time will be equal to 00:00 if user navigated through datepicker
                        viewDate.setHours(today.getHours());
                        viewDate.setMinutes(today.getMinutes());

                        dp.update({
                            timepicker: !dp.opts.timepicker,
                            viewDate
                          })
                    }
                  }], 
                  onSelect: (event) => {
                      firstKey.h1 = event.formattedDate;        
                      // console.log(home.h1)
                      console.log(event);}
                    }
  let options3 = {locale: localeEn, timepicker: false,
                  buttons: [{
                    content(dp) {
                        return dp.opts.timepicker 
                            ? 'Turn OFF timepicker'
                            : 'Turn ON timepicker'
                    },
                    onClick(dp) {
                        let viewDate = dp.viewDate;
                        let today = new Date();
                        
                        // Since timepicker takes initial time from 'viewDate', set up time here, 
                        // otherwise time will be equal to 00:00 if user navigated through datepicker
                        viewDate.setHours(today.getHours());
                        viewDate.setMinutes(today.getMinutes());

                        dp.update({
                            timepicker: !dp.opts.timepicker,
                            viewDate
                          })
                    }
                  }], 
                  onSelect: (event) => {
                      secondKey.h2 = event.formattedDate;        
                      // console.log(home.h2)
                      console.log(event);}
                    }
                  
  $: protocolM = protocolM
  $: selectedM = selected
  $: pillarM = pValue
  $: startDate = new Date(range.start);

  $: endDate = new Date(range.end);
  $: endDate_1 = new Date(endDate.setDate(endDate.getDate() + 1));

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
      console.log("Pillar:", pillarM)
      console.log("Date Range:", range.start, range.end)
      console.log("date:", startDate, endDate_1)
      console.log("firstkey:", dobDate1)
      console.log("secondkey:", dobDate2)

      sc1 = dayofbirthDetails(dobDate1);
      sc2 = dayofbirthDetails(dobDate2);

      console.log("Configure pillar mode....")
      if (pillarM == 0) {
        console.log("Year Selected")
        sc1year = YearofBirthdate(dobDate1);
        sc2year = YearofBirthdate(dobDate2);
        
        console.log(sc1year)
        console.log(sc2year)
      } if (pillarM == 1) {
        console.log("Month Selected")
        sc1year = MonthofBirthdate(dobDate1);
        sc2year = MonthofBirthdate(dobDate2);
        
        console.log(sc1year)
        console.log(sc2year)
      } if (pillarM == 2) {
        console.log("Day Selected")
        sc1year = DayofBirthdate(dobDate1);
        sc2year = DayofBirthdate(dobDate2);
        
        console.log(sc1year)
        console.log(sc2year)
      } if (pillarM == 3) {
        console.log("Hour Selected")
        sc1year = TimeofBirthdate(dobDate1);
        sc2year = TimeofBirthdate(dobDate2);
        
        console.log(sc1year)
        console.log(sc2year)
      }

      // sc1year = YearofBirthdate(dobDate1);
      // sc2year = YearofBirthdate(dobDate2);

      // console.log("YEAR")
      // console.log(sc1year)
      // console.log(sc2year)

      function defaultOptions1(){
          if (range.start === null &&  range.end === null)  {
              //console.log("this is where input is blank so we load default values")
              const today = new Date();
              const todayplus2 = new Date(today);
              todayplus2.setDate(today.getDate() + 2);
              startDate = today
              endDate = todayplus2
              protocolM = 'protocol-one'
              console.log("Check for default protocol:");
              console.log("loading protocol:", protocolM);
              // console.log(sc1year.gYear)
              // console.log(sc2year.gYear)
          } 
          // if (sc1year == sc2year ) {
          //   console.log("year values:", sc1year, sc2year)
          //   console.log("blank")
          //   let blank = "blank"
          //   return blank
          // } else {
          //   let blank = "not blank"
          //   return blank
          // }
      }

      function defaultOptions2(){
       
          console.log("checking 2nd option")
          console.log("same values")
          console.log("bdates:", sc1year, sc2year)
         
          if (sc1year['gYear'] == sc2year['gYear'] &&  sc1year['zYear'] == sc2year['zYear'] && sc1year['gYear'] == "己" && sc1year['zYear'] == "酉" ) 
          {
              console.log("dob fields are likely to be default values")
              protocolM = 'protocol-one'
          }
        
      }
      


      function ifnotvisable(sc1year, sc2year) {
          if (protocolM == 'protocol-one'){
            sc2year = "";
            sc1year = "";
            console.log("REMOVE THE BOTH KEYS")
            // yearKey.push(sc1year, sc2year)
          }

          if (isSwitchedOn == false){
            console.log("REMOVE THE SECOND KEY, second input is not visable")
            sc2 = "";
            sc2year = "";
            yearKey.push(sc1year)
          } 
          // if (firstKey.h1 === null && secondKey.h2 === null){
          //   protocolM = 'protocol-one'
          //   console.log("loading protocol:", protocolM);
          // } 
          else {
            console.log("Maintain Operation, both input visable")
            yearKey.push(sc1year, sc2year)

          }
          return yearKey
      }
      
      defaultOptions1()
      defaultOptions2()
      console.log("status:", protocolM)

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

      pillarChoice.update(()=>{
        return(pValue)
      })

      protocolMode.update(()=>{
        return(protocolM)
      })


      for (let date = startDate; date <= endDate;  date.setDate(date.getDate() + 1)) 
          
          {const dz1 = Lunar.fromDate(new Date(date));

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
              //gStems = (dz2.getYearGan()+" "+dz2.getMonthGan()+" "+dz2.getDayGan()+" "+dz2.getTimeGan())
              //zStems = (dz2.getYearZhi()+" "+dz2.getMonthZhi()+" "+dz2.getDayZhi()+" "+dz2.getTimeZhi())

              gStems = (dz2.getTimeGan()+" "+dz2.getDayGan()+" "+dz2.getMonthGan()+" "+dz2.getYearGan())
              zStems = (dz2.getTimeZhi()+" "+dz2.getDayZhi()+" "+dz2.getMonthZhi()+" "+dz2.getYearZhi())


              counter++ 
              

              payload.push({andex:counter,
                            date:engDate, 
                            dayEl: dayElement,
                            gValue: gStems,
                            zValue: zStems,
                            door: selected,
                            pillar: pValue
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
    <div class="container max-w-screen-md mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">择日表格 ｜ Date Selection V2</h2>
        <p class="text-gray-500 mb-2"></p>
  
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Date Details:</p>
              <p class='pb-3'>Please fill in necessary the fields.</p>
              
              <Calswitch bind:mode={mode} onSwitch2={handleSwitch2}/>
              <p class="pt-4"></p>

              {#if isCalendarOn}
              <Newswitch bind:value={value} onSwitch={handleSwitch}/>
              <p class="pt-4"></p>

              <p>Pillar</p>
              <Radiogroup {p_options} fontSize={13}  bind:userSelected={pValue}/>
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
                    <button disabled={selected == ""} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
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



