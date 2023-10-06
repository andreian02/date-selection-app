<script>
    export let payload
    export let keys
    export let sector
    export let birthYear
    export let sectorElement
    export let period
    export let protocolM
    
</script>

<div class="flex justify-center min-h-screen">
	<div class="col-span-12">
		<div class="overflow-auto lg:overflow-visible ">
			<table class="table text-gray-400 border-separate space-y-6 text-sm">
				<thead class="bg-gray-800 text-white">
					<tr>
						<th class="p-3">Index</th>
						<th class="p-3 text-left">Date (五行)</th>
						<th class="p-3 text-left">年 月 日 时</th>
						<th class="p-3 text-left">命主 (年柱)</th>
						<th class="p-3 text-left">Scoring</th>
					</tr>
				</thead>
				<tbody>
					{#each payload as item} 
					<tr class="text-white bg-gray-800">
						<td class="p-3">
							<p>{item.andex}</p>
						</td>
						<td class="p-3">
							<div class="flex align-items-center">
								<!-- <img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"> -->
								<div class="ml-3">
									<div class="">{item.date}</div>
									<div class="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							<p>{item.gValue}</p>
							<p>{item.zValue}</p>
						</td>
						{#if birthYear.length >1}
						<td class="p-3 font-bold">
							<p>{birthYear[0].gYear}·{birthYear[1].gYear}</p>
							<p>{birthYear[0].zYear}·{birthYear[1].zYear}</p>
						</td>
						{:else}
						<td class="p-3 font-bold">
							<p>{birthYear[0].gYear}</p>
							<p>{birthYear[0].zYear}</p>
						</td>
						{/if}
						
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2">{item.score}</span>
						</td>
						<!-- <td class="p-3 ">
							<a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
								<i class="material-icons-round text-base">delete_outline</i>
							</a>
						</td> -->
					</tr>
				{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
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