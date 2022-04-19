<script>
	import { status } from './store.js';
	import Completed from './Completed.svelte';
	import Draw from './Draw.svelte';
	import Start from './Start.svelte';
</script>

<main>
	{#if $status === "NOT_STARTED"}
		<Start/>
	{:else if $status === "STARTED"}
		<Draw/>
	{:else if $status === "COMPLETED"}
		<Completed/>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 500px;
		margin: 0 auto;
	}
</style>