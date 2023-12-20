<script>
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

		// You can add a timeout to determine when scrolling has stopped
		// Adjust the delay based on your preference
		setTimeout(() => {
			isScrolling = false;
		}, 200); // Adjust the delay time (in milliseconds)
	}

	function isTigerVisible() {
		// Adjust the threshold based on your design and preferences
		const threshold = window.innerHeight * 0.8;
		const tigerElement = document.getElementById('tiger');

		if (tigerElement) {
			const rect = tigerElement.getBoundingClientRect();
			return rect.top < threshold && rect.bottom >= 0;
		}

		return false;
	}
	function playTiger() {
		const tigerElement = document.getElementById('tiger');
		if (tigerElement) {
			tigerElement.pause();
		}
	}

	function pauseTiger() {
		const tigerElement = document.getElementById('tiger');
		if (tigerElement) {
			tigerElement.pause();
		}
	}

	let translateY = 0; // Initial translation value

	$: translateY = scrollPosition * 2 - screenWidth; // Adjust the multiplier for the desired speed

	// Add dynamic styles for animation
	$: tigerStyle = `transform: translateY(-50%) translateX(${-translateY}px);`;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<video id="tiger" src="/assets/tiger.gif" alt="Tiger Animation" style={tigerStyle} />

<style>
	/* Add styles for positioning the tiger image */
	img {
		height: 100px;
		transition: opacity 0.2s ease-out;
	}
</style>
