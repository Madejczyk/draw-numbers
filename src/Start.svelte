<script>
	import { fromValue, toValue, status } from './store.js';
	function handleStart() {
		status.setValue("STARTED")
	}
</script>

<h1>Zakres</h1>
<div>
	Od:
	<input type=number value={$fromValue} min=1 on:change={fromValue.setValue}>
</div>
<div>
	Do:
	<input type=number value={$toValue} min=2 on:change={toValue.setValue}>
</div>
<button disabled={$fromValue >= $toValue} on:click={handleStart}>
    Start
</button>

<style>
	input {
		text-align: end;
	}
</style>