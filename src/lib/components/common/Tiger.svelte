<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	let scrollPosition = 0;
	let screenHeight = 0;
	let screenWidth = 0;
	let tigerPosY = 0;
	let isScrolling = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	afterUpdate(() => {
		if (!isScrolling) {
			pauseTiger();
		}
	});

	let timer = -1;
	function handleScroll() {
		// Update scroll position
		scrollPosition = window.scrollY;
		let tiger = document.getElementById('tiger') as HTMLVideoElement;
		tigerPosY = tiger.getBoundingClientRect().top + scrollPosition;
		isScrolling = true;
		playTiger();

		if (timer != -1) clearTimeout(timer);

		timer = setTimeout(() => {
			isScrolling = false;
			pauseTiger();
		}, 100);
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

	let translateX = 0; // Initial translation value

	$: translateX = (scrollPosition - tigerPosY) * 1.1; // Adjust the multiplier for the desired speed

	// Add dynamic styles for animation
	$: tigerStyle = `transform: translateY(-50%) translateX(${-translateX}px);`;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<video muted id="tiger" style={tigerStyle}>
	<source src="/assets/tiger.webm" type="video/webm" />
</video>

<style>
	/* Add styles for positioning the tiger image */
	#tiger {
		height: 100px;
	}
</style>
