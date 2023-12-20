import { writable } from 'svelte/store';

// global store to check if entry load animation is done
export const animationDone = writable(false);
