<script>
    import { fromValue, toValue, status } from './store.js';
    function playAgain() {
        fromValue.reset()
        toValue.reset()
        status.reset()
    }
</script>
<div>
    <h1>KONIEC - BRAK NUMERKÓW :)</h1>
    <button on:click={playAgain}>
        Losuj ponownie
    </button>
</div>

<style>
	div {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
	}
</style>