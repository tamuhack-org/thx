import { writable } from 'svelte/store';

// global store to check if entry load animation is done
export const animationDone = writable(false);

export const screenWidth = writable(0);
export const sectionInView = writable('');
