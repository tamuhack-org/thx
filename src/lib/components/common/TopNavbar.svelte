<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

<div
	class="flex justify-between items-center w-[87%] md:w-[88%] lg:w-full min-h-[70px] px-8 mt-[40px]"
>
	<div class="flex gap-2 items-center w-1/2 h-full">
		<h1 class="text-3xl font-poppins font-semibold">th.</h1>
	</div>
	<div class="hidden sm:flex justify-end gap-2 lg:pr-[128px]">
		<a href="https://register.tamuhack.com/" target="_blank" rel="noopener noreferrer">
			<button
				class="px-6 py-3 rounded-md border-[1px] border-dark hover:bg-dark hover:text-white transition-all"
				>Mentor</button
			></a
		>
		<a href="https://register.tamuhack.com/" target="_blank" rel="noopener noreferrer">
			<button
				class="px-6 py-3 rounded-md text-white border-[1px] border-dark bg-dark font-normal hover:bg-black transition-all"
				>Apply</button
			></a
		>
	</div>
</div>
