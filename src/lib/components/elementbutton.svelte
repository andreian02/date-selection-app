<script>
    import water from '$lib/images/elements/water.svg'
	import wood from '$lib/images/elements/wood.svg'
	import fire from '$lib/images/elements/fire.svg'
	import earth from '$lib/images/elements/earth.svg'
	import metal from '$lib/images/elements/metal.svg'
   
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
   
    export let logofiller
    
    let buttonName = ""
    let eventName = ""

    function handleClick1(event){
        buttonName = event.target.innerText;
        console.log('from click:',buttonName)
        dispatch("buttonClick", { buttonName });
    }

    function handleClick(buttonName) {
        // Perform some action or call a function
		eventName = buttonName
        let mlogofiller = []

		if (eventName === 'water'){
			mlogofiller = logofiller.sort((a, b) => b.dMarks.水 - a.dMarks.水);
			console.log('water st:',logofiller)

		} else if (eventName === 'wood'){
			mlogofiller = logofiller.sort((a, b) => b.dMarks.木 - a.dMarks.木);
			console.log('wood st:',logofiller)
		} else if (eventName === 'fire'){
			mlogofiller = logofiller.sort((a, b) => b.dMarks.火 - a.dMarks.火);
			console.log('fire st:',logofiller)
		} else if (eventName === 'earth'){
			mlogofiller = logofiller.sort((a, b) => b.dMarks.土 - a.dMarks.土);
			console.log('earth st:',logofiller)
		} else if (eventName === 'metal'){
			mlogofiller = logofiller.sort((a, b) => b.dMarks.金 - a.dMarks.金);
			console.log('metal st:',logofiller)
		}

        return mlogofiller
    }

  
</script>

<div class="flex flex-col py-4 justify-center items-center">
    <p>Element:{eventName}</p>
    <thead>
        <button on:click={()=>handleClick('water')}> 
            <picture class="flex h-10 w-6">
            <img src={water}
            alt="water"></picture>
        </button>

        <button on:click={()=>handleClick('wood')}> 
            <picture class="flex h-10 w-6">
            <img src={wood}
            alt="water"></picture>
        </button>

        <button on:click={()=>handleClick('fire')}> 
            <picture class="flex h-10 w-6">
            <img src={fire}
            alt="fire"></picture>
        </button>

        <button on:click={()=>handleClick('earth')}> 
            <picture class="flex h-10 w-6">
            <img src={earth}
            alt="earth"></picture>
        </button>

        <button on:click={()=>handleClick('metal')}> 
            <picture class="flex h-10 w-6">
            <img src={metal}
            alt="metal"></picture>
        </button>
    </thead>
</div>