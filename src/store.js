import { writable } from 'svelte/store';

const initFromValue = 1
const initToValue = 5
const initStatus = "NOT_STARTED"

function createValue(initValue) {
	const { subscribe, set, update } = writable(initValue);

	return {
		subscribe,
		setValue: (evt) => set(Number(evt.target.value)),
		reset: () => set(initValue)
	};
}

export const fromValue = createValue(initFromValue);
export const toValue = createValue(initToValue);

function createStatus() {
	const { subscribe, set, update } = writable(initStatus);

	return {
		subscribe,
		setValue: (value) => set(value),
		reset: () => set(initStatus)
	};
}
export const status = createStatus();