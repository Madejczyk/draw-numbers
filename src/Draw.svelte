<script>
    import { count, status } from './store.js';
    
    let numbers = generateNumbersBasedOnInitLength()
    let studentId = 1 
    let selectedNumberToDisplay = -1
    let selectedNumbers = []
    let lastSelected;
    const LOADING_TIME = 5000

    function drawSingleNumber() {
        status.setValue("LOADING")
        const randomNumber = getRandomNumber()
        lastSelected = numbers.at(randomNumber)
        selectedNumberToDisplay = lastSelected + 1
        selectedNumbers = [{studentId: studentId++, selectedNumberToDisplay}, ...selectedNumbers]
        numbers = numbers.filter((n) => n !== lastSelected)
        setTimeout(() => {
            status.setValue("STARTED")
        }, LOADING_TIME);
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

    function handleUndo() {
        numbers.push(lastSelected)
        numbers = [...numbers.sort()]
        selectedNumbers = selectedNumbers.slice(1)
        studentId--
        lastSelected = null
	}

    document.body.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (numbers.length > 0 && event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("losujButton").click();
        }
    })
</script>

<div id="draw">
    {#if selectedNumberToDisplay > 0}
        <p>{selectedNumberToDisplay}</p>
    {/if}

    {#if numbers.length > 0}
        <button id="losujButton"
        on:click={drawSingleNumber}
        disabled={$status === "LOADING"}
    >
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
        <button class="undoButton" on:click={handleUndo} disabled={lastSelected === null}>
            Cofnij
        </button>
    {/if}

    {#if numbers.length === 0}
    <button on:click={handleFinish}>
        Zakończ
    </button>
    {/if}
</div>

<style>
    p {
        font-size: 144px;
        color: black;
        border-radius: 4px;
        padding: 0 72px;
	    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

    }
	div {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
	}
    .undoButton {
        background-color: white;
        color: #970D35;
    }
    .undoButton:disabled {
        color: #999;
        cursor: auto;
    }
    #losujButton:disabled {
        cursor: wait;
    }
</style>