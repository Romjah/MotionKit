<script>
  import { onMount } from 'svelte';
  import ApexCharts from 'svelte-apexcharts';
  
  export let options = {};
  export let type = 'line';
  export let height = '350';
  export let width = '100%';
  
  let chart;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <ApexCharts {options} {type} {height} {width} bind:chart />
{/if} 