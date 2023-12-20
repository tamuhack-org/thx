<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	let scrollPosition = 0;
	let screenHeight = 0;
	let screenWidth = 0;
	let isScrolling = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	afterUpdate(() => {
		if (!isScrolling) {
			pauseTiger();
		}
	});

	function handleScroll() {
		// Update scroll position
		scrollPosition = window.scrollY;
		isScrolling = true;
		playTiger();

		// You can add a timeout to determine when scrolling has stopped
		// Adjust the delay based on your preference
		setTimeout(() => {
			isScrolling = false;
		}, 300); // Adjust the delay time (in milliseconds)
	}

	function playTiger() {
		const tigerElement = document.getElementById('tiger') as HTMLVideoElement;
		if (tigerElement) {
			tigerElement.play();
		}
	}

	function pauseTiger() {
		const tigerElement = document.getElementById('tiger') as HTMLVideoElement;
		if (tigerElement) {
			tigerElement.pause();
		}
	}

	let translateY = 0; // Initial translation value

	$: translateY = scrollPosition * 0.8 - screenWidth; // Adjust the multiplier for the desired speed

	// Add dynamic styles for animation
	$: tigerStyle = `transform: translateY(-50%) translateX(${-translateY}px);`;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<video muted id="tiger" src="/assets/tiger.webm" style={tigerStyle} />

<style>
	/* Add styles for positioning the tiger image */
	#tiger {
		height: 100px;
		transition: opacity 0.2s ease-out;
	}
</style>
