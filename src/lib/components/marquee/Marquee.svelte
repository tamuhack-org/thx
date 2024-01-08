<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { animationDone, screenWidth } from '$lib/stores';

	let childWidth: number;
	let loaded = false;
	$: repeatedChildNumber = Math.floor($screenWidth / childWidth) + 2;

	onMount(() => {
		loaded = true;
	});
</script>

{#if $animationDone}
	<a
		href="https://register.tamuhack.com/"
		rel="noopener noreferrer"
		target="_blank"
		class="absolute left-0 top-0 w-full max-w-max z-50"
		in:fly={{
			duration: 500,
			x: 0,
			y: -200,
			opacity: 1,
			delay: $screenWidth > 768 ? 2250 : 1250
		}}
	>
		<Marquee class="py-2 bg-dark text-white font-semibold" speed={30}>
			<!-- have one constant text to get the width, there is a slight delay when rendering the rest of the text, need transition to mask the delay  -->
			<p class="max-w-fit" bind:clientWidth={childWidth}>
				APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;
			</p>
			{#if childWidth}
				{#each { length: repeatedChildNumber } as _, i}
					<p class="max-w-fit">APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
				{/each}
			{/if}
		</Marquee>
	</a>
{/if}
