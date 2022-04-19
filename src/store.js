import { writable } from 'svelte/store';

const initValue = 5
const initStatus = "NOT_STARTED"
function createCount() {
	const { subscribe, set, update } = writable(initValue);

	return {
		subscribe,
		setValue: (evt) => set(Number(evt.target.value)),
		reset: () => set(initValue)
	};
}

export const count = createCount();

function createStatus() {
	const { subscribe, set, update } = writable(initStatus);

	return {
		subscribe,
		setValue: (value) => set(value),
		reset: () => set(initStatus)
	};
}
export const status = createStatus();