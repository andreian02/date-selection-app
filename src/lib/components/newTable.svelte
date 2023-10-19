<script>
    export let payload
	export let sectorElement
    export let sector
    export let birthYear
	export let keys
    export let period
    export let protocolM

	let path = '/devCards/'
	let sortBy = 'asc'

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
			let aScore = payload[i]['score']
			
			let zHour = index % 12;
			let zRange = zHourConverts(zHour)


			//console.log("index:",index)
      		//console.log("s:", elem)
      		let url = logoHandle(elem)
      		//console.log(url)
			logofiller.push({id:index, e:elem, dd:ddate, hourR: zRange,
				 eLink:url, g:gyalue, z:zyalue, marks:aScore
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
		
	}

	function sortByIndex() {
	logofiller = logofiller.sort((a,b)=> a.id - b.id); // Sort in descending order
	}

	let batchSize = 7;
  	let numResultsDisplayed = batchSize;
	
	function loadMore() {
    	numResultsDisplayed += batchSize;
    }
	
</script>

<div class="flex justify-center min-h-screen">
	<div class="col-span-10">
		
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
					<td class="p-2 text-center">						
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
					<td class="p-2">
						<!-- <span class="bg-green-400 text-gray-50 rounded-md px-2">{item2.a}</span> -->
						<span class=" text-gray-50 rounded-md px-2 color: {item2.marks >= 3 ? 'bg-green-400' : item2.marks >= 0 ? 'bg-yellow-400' : 'bg-red-400'}">{item2.marks}</span>
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