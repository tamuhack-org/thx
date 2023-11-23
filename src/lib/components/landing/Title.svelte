<script>
	import { onMount } from 'svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	export let title = 'TAMUHACK';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<div class="flex flex-col justify-end xl:h-1/2">
	<div class="flex justify-center">
		{#if loaded}
			<h1
				class="text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] text-blue-400 font-black tracking-wider"
			>
				{title}
			</h1>
		{/if}
	</div>
</div>
