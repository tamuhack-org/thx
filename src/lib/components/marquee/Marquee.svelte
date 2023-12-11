<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let screenWidth: number;
	let childWidth: number;
	let loaded = false;
	$: repeatedChildNumber = Math.floor(screenWidth / childWidth) + 2;

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<span
		in:fly={{
			duration: 500,
			x: 0,
			y: -200,
			opacity: 1
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
	</span>
{/if}
