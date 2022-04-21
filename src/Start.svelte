<script>
	import { count, status } from './store.js';
	function handleStart() {
		status.setValue("STARTED")
	}
</script>

<h1>Podaj zakres</h1>
<input type=number value={$count} min=1 on:change={count.setValue}>
<button disabled={$count < 2}  on:click={handleStart}>
    Start
</button>

<style>
	input {
		text-align: end;
	}
</style>