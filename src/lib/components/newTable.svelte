<script>
    export let payload
	export let sectorElement
    export let sector
    export let birthYear
	export let keys
    export let period
    export let protocolM

	let path = '/devCards/'

    import { logoHandle } from "$lib/components/logoHandle";
	let logofiller = [];

	function getUrl(payload){
		for (let i=0; i<payload.length; i++) {
			let index = (payload[i].andex)
      		let elem = (payload[i]['dayEl'])
			let ddate = (payload[i]['date'])

			let gyalue = payload[i]['gValue']
			let zyalue = payload[i]['zValue']
			let aScore = payload[i]['score']

			//console.log("index:",index)
      		//console.log("s:", elem)
      		let url = logoHandle(elem)
      		//console.log(url)
			logofiller.push({id:index, e:elem, dd:ddate,
				 eLink:url, g:gyalue, z:zyalue, a:aScore
		})
 	   }return logofiller
	}
	logofiller = (getUrl(payload))
	
</script>

<div class="flex justify-center min-h-screen">
	<div class="col-span-10">
		<table class="table text-black border-separate space-y-2 text-sm">
			<thead class="text-black">
				<tr>
					<th class="p-3">#</th>
					<th class="p-3 text-center">日期</th>
					<th class="p-3 text-left">年月日时</th>
					{#if protocolM == 'protocol-one'}
					<th class="p-3 text-left"></th>
				  	{:else}
					<th class="p-3 text-left">命主</th>
					{/if}
					<th class="p-3 text-left">分数</th>
				</tr>
			</thead>
			<tbody>
				<!-- {#each payload as item1 } -->
			{#each payload as item1 (item1.andex)}
      			{#each logofiller as item2 (item2.id)}
				<tr class="bg-slate-200">
					
					<td class="p-3 text-center">
						<span>{item2.id}</span>
						<p></p>
					</td>
					<td class="p-3">						
							<div class="max-w-lg mx-auto rounded-lg px-6">
							<img class="rounded-full h-5 w-5" alt="element" src={item2.eLink}/>	
							</div>
							<div class="text-xs">{item2.dd}</div>
					</td>
					<td class="p-3">
						<!-- <p>{item1.gValue}</p>
						<p>{item1.zValue}</p> -->
						<p>{item2.g}</p>
						<p>{item2.z}</p>
					</td>
					{#if protocolM == 'protocol-one'}
						<p></p>
				  	{:else}
						{#if birthYear.length >1}
						<td class="p-3">
							<p>{birthYear[0].gYear}{birthYear[1].gYear}</p>
							<p>{birthYear[0].zYear}{birthYear[1].zYear}</p>
						</td>
						{:else}
						<td class="p-3">
							<p>{birthYear[0].gYear}</p>
							<p>{birthYear[0].zYear}</p>
						</td>
						{/if}
					{/if}
					<td class="p-3">
						<span class="bg-green-400 text-gray-50 rounded-md px-2">{item2.a}</span>
						<a href={path + item1.andex}>⁞</a>
					</td>
				</tr>
				{/each}
			{/each}
			</tbody>
		</table>
	</div>
</div>
<style>
	.table {
		border-spacing: 0 15px;
	}

	.table tr {
		border-radius: 20px;
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