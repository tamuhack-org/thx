<script lang="ts">
	import Marquee from 'svelte-fast-marquee';

	export let screenWidth: number;
	let childWidth: number;
	$: repeatedChildNumber = Math.floor(screenWidth / childWidth) + 2;
</script>

<Marquee class="py-2 bg-black text-white font-semibold" speed={30}>
	<!-- have one constant text to get the width, there is a slight delay when rendering the rest of the text, need transition to mask the delay  -->
	<p class="max-w-fit" bind:clientWidth={childWidth}>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
	{#if childWidth}
		{#each { length: repeatedChildNumber } as _, i}
			<p class="max-w-fit">APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		{/each}
	{/if}
</Marquee>
