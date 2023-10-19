<script>

    import { LayerCake, Svg } from 'layercake';
    import { scaleLinear } from 'd3-scale';
  
    import Radar from '$lib/components/Radar.svelte';
    import AxisRadial from '$lib/components/AxisRadial.svelte';

    // This example loads csv data as json using @rollup/plugin-dsv
    import data from '$lib/data/radarScores.js';
    console.log("console.log",data)

    const seriesKey = 'name';
    const xKey = ['木','火', '土', '金', '水'];
  
    const seriesNames = Object.keys(data[0]).filter(d => d !== seriesKey);
  
    data.forEach(d => {
      seriesNames.forEach(name => {
        d[name] = +d[name];
      });
    });

    import Dropdown from '$lib/components/Dropdown.svelte';
    import Accordion from '$lib/components/Accordion.svelte';

    let show = null;
    const items = ["One", "Two", "Three", "Four"];

    const showCollapse = i => {
      i === show ? (show = null) : (show = i);
    };

</script>




<div class="chart-container">
    <LayerCake
      padding={{ top: 30, right: 0, bottom: 7, left: 0 }}
      x={xKey}
      xDomain={[0, 10]}
      xRange={({ height }) => [0, height / 2]}
      data={data}
    >
      <Svg>
        <AxisRadial/>
        <Radar/>
      </Svg>
    </LayerCake>
  </div>
  
  <br />



{#each items as item, i}
<Accordion {i} {show} {showCollapse} {item}/>
{/each}


<Dropdown />





  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 250px;
    }

  </style>