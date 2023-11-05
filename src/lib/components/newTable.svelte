<script>
    export let payload
	export let sectorElement
    export let sector
    export let birthYear
	export let keys
    export let period
    export let protocolM
	
	import water from '$lib/images/elements/water.svg'
	import wood from '$lib/images/elements/wood.svg'
	import fire from '$lib/images/elements/fire.svg'
	import earth from '$lib/images/elements/earth.svg'
	import metal from '$lib/images/elements/metal.svg'

	let path = '/devCards/'
	let sortBy = 'asc'


	import Elementbutton from "./elementbutton.svelte";
    // export let buttonName
    
    import { logoHandle } from "$lib/components/logoHandle";
	
	import {zHourConverts} from "../../dtools"
	let logofiller = [];

	function getUrl(payload){
		for (let i=0; i<payload.length; i++) {
			let index = (payload[i].andex)
      		let elem = (payload[i]['dayEl'])
			let ddate = (payload[i]['date'])
			let gyalue = payload[i]['gValue']
			let zyalue = payload[i]['zValue']
			let aScore = payload[i]['dScore']

			let dayScore = payload[i]['z_Score']
			
			let zHour = index % 12;
			let zRange = zHourConverts(zHour)


			//console.log("index:",index)
      		// console.log("s:", payload[i])
      		let url = logoHandle(elem)
      		//console.log(url)
			logofiller.push({id:index, e:elem, dd:ddate, hourR: zRange,
				 eLink:url, g:gyalue, z:zyalue, marks:aScore, dMarks:dayScore
		})
 	   }return logofiller
	}
	logofiller = (getUrl(payload))
	//console.log("logf")
	//console.log(logofiller)

	function sortByScore(){
		if (sortBy === 'asc'){
			logofiller = logofiller.sort((a,b)=> a.marks - b.marks);
			sortBy = 'desc';
		} else {
			logofiller = logofiller.sort((a,b) => b.marks - a.marks);
			sortBy = 'asc';
		}
		console.log(logofiller)
	}

	function sortByIndex() {
		logofiller = logofiller.sort((a,b)=> a.id - b.id); // Sort in descending order
		eventName = ""
	}

	let batchSize = 7;
  	let numResultsDisplayed = batchSize;
	
	function loadMore() {
    	numResultsDisplayed += batchSize;
    }
	import SummaryTable from '$lib/components/summaryTable.svelte'
	
	let eventName = '';

	function handleClick(buttonName) {
        // Perform some action or call a function
		eventName = buttonName

		if (eventName === '水'){
			logofiller = logofiller.sort((a, b) => b.dMarks.水 - a.dMarks.水);
			console.log('water st:',logofiller)
		} else if (eventName === '木'){
			logofiller = logofiller.sort((a, b) => b.dMarks.木 - a.dMarks.木);
			console.log('wood st:',logofiller)
		} else if (eventName === '火'){
			logofiller = logofiller.sort((a, b) => b.dMarks.火 - a.dMarks.火);
			console.log('fire st:',logofiller)
		} else if (eventName === '土'){
			logofiller = logofiller.sort((a, b) => b.dMarks.土 - a.dMarks.土);
			console.log('earth st:',logofiller)
		} else if (eventName === '金'){
			logofiller = logofiller.sort((a, b) => b.dMarks.金 - a.dMarks.金);
			console.log('metal st:',logofiller)
		}
    }

</script>

<div class="flex justify-center min-h-screen">
	<div class="col-span-10"> 
		<SummaryTable {payload} {period} />
		<!-- <Elementbutton {logofiller} on:buttonClick={handleClick} /> -->
		<div class="flex flex-col pt-3 justify-center items-center">
			<p class='text-sm' >五行 : {eventName}</p>
			<thead>
				<button on:click={()=>handleClick('水')}> 
					<picture class="flex h-10 w-6">
					<img src={water}
					alt="water"></picture>
				</button>

				<button on:click={()=>handleClick('木')}> 
					<picture class="flex h-10 w-6">
					<img src={wood}
					alt="water"></picture>
				</button>

				<button on:click={()=>handleClick('火')}> 
					<picture class="flex h-10 w-6">
					<img src={fire}
					alt="fire"></picture>
				</button>

				<button on:click={()=>handleClick('土')}> 
					<picture class="flex h-10 w-6">
					<img src={earth}
					alt="earth"></picture>
				</button>

				<button on:click={()=>handleClick('金')}> 
					<picture class="flex h-10 w-6">
					<img src={metal}
					alt="metal"></picture>
				</button>
			</thead>
		</div>
			
		
		<table class="table text-black border-separate space-y-2 text-sm">
			<thead class="text-black">
				<tr>
					<th class="p-1">#
						<button on:click={sortByIndex}>
							{sortBy === 'asc' ? '▲' : '▼'}
						</button>
					</th>
					<th class="p-2 text-center">日期</th>
					<th class="p-2 text-left">时日月年</th>
					{#if protocolM == 'protocol-one'}
					<th class="p-2 text-left"></th>
				  	{:else}
					<th class="p-2 text-left">命主</th>
					{/if}
					<th class="p-2 text-left">分数 
						<button on:click={sortByScore}>
							{sortBy === 'asc' ? '▲' : '▼'}
						</button>
					</th>
					
				</tr>
			</thead>
			<tbody>
			<!-- {#each payload as item1 } -->
			<!-- {#each payload as item1 (item1.andex)} -->
      			{#each logofiller as item2, index (item2.id)}
				  {#if index < numResultsDisplayed}
				<tr class="bg-slate-200">
					<td class="text-center">
						<div class='p-1 tz'>{item2.id}</div>
					</td>
					<td class="p-1 text-center">						
							<div class="max-w-lg mx-auto rounded-lg px-8">
							<img class="rounded-full h-5 w-5" alt="element" src={item2.eLink}/>	
							</div>
							<div class="text-xs">{item2.dd}</div>
							<div class='tm'>{item2.hourR}</div>
					</td>
					<td class="p-2">
						<!-- <p>{item1.gValue}</p>
						<p>{item1.zValue}</p> -->
						<p>{item2.g}</p>
						<p>{item2.z}</p>
					</td>
					{#if protocolM == 'protocol-one'}
						<p></p>
				  	{:else}
						{#if birthYear.length >1}
						<td class="p-2">
							<p>{birthYear[0].gYear}{birthYear[1].gYear}</p>
							<p>{birthYear[0].zYear}{birthYear[1].zYear}</p>
						</td>
						{:else}
						<td class="p-2">
							<p>{birthYear[0].gYear}</p>
							<p>{birthYear[0].zYear}</p>
						</td>
						{/if}
					{/if}
					<td class="p-1">
						<!-- <span class="bg-green-400 text-gray-50 rounded-md px-2">{item2.a}</span> -->
						<span class="text-gray-50 rounded-md px-2 color: {item2.marks >= 3 ? 'bg-green-400' : item2.marks >= 0 ? 'bg-yellow-400' : 'bg-red-400'}">{item2.marks}</span>
						<a href={path + item2.id}>⁞</a>
					</td>
				</tr>
				{/if}
				{/each}
			<!-- {/each} -->
			</tbody>
		</table>
		<div class="text-center items-center">
			<button class="text-center bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
				on:click={loadMore}>Show More
			</button>
		</div>
	</div>
</div>

<style>
	.table {
		border-spacing: 0 15px;
	}

	.table tr {
		border-radius: 20px;
	}

	.tm {
		font-size: 0.6rem;
		line-height: 0.6rem;
	}
	.tz {
		font-size: 0.6rem;
	}

	tr td:nth-child(n+5),
	tr th:nth-child(n+5) {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>