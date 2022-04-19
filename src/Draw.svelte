<script>
    import { count, status } from './store.js';
    
    let numbers = generateNumbersBasedOnInitLength()
    let studentId = 1 
    let selectedNumberToDisplay = -1
    let selectedNumbers = [];

    function drawSingleNumber() {
        const randomNumber = getRandomNumber()
        const selectedNumber = numbers.at(randomNumber)
        selectedNumberToDisplay = selectedNumber + 1
        selectedNumbers = [{studentId: studentId++, selectedNumberToDisplay}, ...selectedNumbers]
        numbers = numbers.filter((n) => n !== selectedNumber)
    }
    // Helpers

    function generateNumbersBasedOnInitLength() {
        return Array.from({ length: $count }, (v, k) => k)
    }

    // From 1 to length of array
    function getRandomNumber() {
        return Math.floor(Math.random() * numbers.length)
    }

    function handleFinish() {
		status.setValue("COMPLETED")
	}
</script>

<div>
    {#if selectedNumberToDisplay > 0}
        <h1>{selectedNumberToDisplay}</h1>
    {/if}

    {#if numbers.length > 0}
        <button on:click={drawSingleNumber}>
            Losuj
        </button>
    {/if}

    {#if selectedNumbers.length > 0}
        Ostatnio wybrane:
        <ul>
            {#each selectedNumbers as sn}
                <li>Uczeń numer {sn.studentId} wylosował stół numer {sn.selectedNumberToDisplay}.</li>
            {/each}
        </ul>
    {/if}

    {#if numbers.length === 0}
    <button on:click={handleFinish}>
        Zakończ
    </button>
    {/if}
</div>

<style>
    h1 {
        font-size: 144px;
    }
	div {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
	}
</style>