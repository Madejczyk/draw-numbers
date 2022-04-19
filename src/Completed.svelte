<script>
    import { count, status } from './store.js';
    function playAgain() {
        count.reset()
        status.reset()
    }
</script>
<div>
    KONIEC - BRAK NUMERKÓW :)
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