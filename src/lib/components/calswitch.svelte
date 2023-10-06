<script>
    
    export let onSwitch2;
    export let options = ['on', 'off'];
	export let fontSize = 13;
	export let mode = 'off';
    
    
    let label="Calendar Mode";

    const uniqueID = Math.floor(Math.random() * 100)
</script>

<div class="s s--multi">
    <div role='radiogroup'
				 class="group-container"
				 aria-labelledby={`label-${uniqueID}`}
				 style="font-size:{fontSize}px" 
				 id={`group-${uniqueID}`}>
    <div class='legend' id={`label-${uniqueID}`}>{label}</div>
    <div class='px-6'>
        {#each options as option}
        
            <input type="radio" id={`${option}-${uniqueID}`} on:change={onSwitch2} value={option} bind:group={mode}>
            <label for={`${option}-${uniqueID}`}>
                {option}
            </label> 
        {/each}
    </div>
    </div>
</div>

<style>
    /* :root {
--accent-color: CornflowerBlue;
--gray: #ccc;
} */

.s--multi {
    --accent-color: CornflowerBlue;
    --onSwitch: rebeccapurple;
}

/* Multi Design Option */
/* Based on suggestions from Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
and this example from Scott O'hara https://codepen.io/scottohara/pen/zLZwNv */

.s--multi .group-container {
border: none;
padding: 0;
white-space: nowrap;
}

/* .s--multi legend {
font-size: 2px;
opacity: 0;
position: absolute;
} */

.s--multi label {
display: inline-block;
line-height: 1.6;
position: relative;
z-index: 2;
}

.s--multi input {
opacity: 0;
position: absolute;
}

.s--multi label:first-of-type {
padding-right: 5em;
}

.s--multi label:last-child {
margin-left: -5em;
padding-left: 5em;
}

.s--multi:focus-within label:first-of-type:after {
box-shadow: 0 0px 8px var(--accent-color);
border-radius: 1.5em;
}



/* making the switch UI.  */
.s--multi label:first-of-type:before,
.s--multi label:first-of-type:after {
content: "";
height: 1.25em;
overflow: hidden;
pointer-events: none;
position: absolute;
vertical-align: middle;
}

.s--multi label:first-of-type:before {
border-radius: 100%;
z-index: 2;
position: absolute;
width: 1.2em;
height: 1.2em;
background: #fff;
top: 0.2em;
right: 1.2em;
transition: transform 0.3s;
}

.s--multi label:first-of-type:after {
background: var(--accent-color);
border-radius: 1em;
margin: 0 1em;
transition: background .2s ease-in-out;
width: 3em;
height: 1.6em;
}

.s--multi input:first-of-type:checked ~ label:first-of-type:after {
background: var(--onSwitch);
}

.s--multi input:first-of-type:checked ~ label:first-of-type:before {
transform: translateX(-1.4em);
}

.s--multi input:last-of-type:checked ~ label:last-of-type {
z-index: 1;
}

.s--multi input:focus {
box-shadow: 0 0px 8px var(--accent-color);
border-radius: 1.5em;
}

</style>