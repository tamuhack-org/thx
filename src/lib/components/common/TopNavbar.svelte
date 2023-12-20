<script lang="ts">
	import { animationDone } from '$lib/stores';
	import { scale } from 'svelte/transition';
</script>

<div
	class="flex justify-between items-center w-[89%] md:w-[90%] lg:w-full min-h-[70px] px-8 mt-[40px]"
>
	<div class="flex gap-2 items-center w-1/2 h-full">
		{#if $animationDone}
			<a
				href="https://tamuhack.org"
				target="_blank"
				rel="noreferrer noopener"
				class="text-3xl font-poppins font-semibold text-dark"
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: 2500
				}}>th</a
			>
		{/if}
	</div>
	<div class="hidden sm:flex justify-end gap-2 lg:pr-[108px]">
		<!-- <a href="https://register.tamuhack.com/" target="_blank" rel="noopener noreferrer"> <button
				class="px-6 py-3 rounded-md border-[1px] border-dark hover:bg-dark hover:text-white transition-all"
				>Mentor</button
			></a
		> -->
		{#if $animationDone}
			<a
				href="https://register.tamuhack.com/"
				target="_blank"
				rel="noopener noreferrer"
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: 2500
				}}
			>
				<button
					class="px-6 py-3 rounded-md text-white border-[1px] border-dark bg-dark font-normal hover:bg-black transition-all"
					>Apply</button
				></a
			>
		{/if}
	</div>
</div>
