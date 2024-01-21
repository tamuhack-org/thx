<script lang="ts">
	import { animationDone, screenWidth, sectionInView } from '$lib/stores';
	import { inview } from 'svelte-inview';
	import { scale } from 'svelte/transition';
</script>

<div
	class="flex justify-between items-center w-[89%] md:w-[90%] lg:w-full min-h-[70px] px-8 mt-[40px]"
	use:inview
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		if (inView) {
			$sectionInView = '';
		}
	}}
	on:inview_leave={(event) => {
		const { inView, scrollDirection } = event.detail;
		if (scrollDirection.vertical === 'down') {
			if (window.scrollY !== 0) {
				$sectionInView = '';
			}
		} else {
			$sectionInView = '';
		}
	}}
>
	<div class="flex gap-2 items-center w-1/2 h-full">
		{#if $animationDone}
			<a
				href="https://tamuhack.org"
				target="_blank"
				rel="noreferrer noopener"
				class="text-3xl font-poppins font-semibold"
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: $screenWidth > 768 ? 2500 : 1500
				}}
			>
				<video src="/assets/anniematedlogo.webm" autoplay loop muted class="h-[30px] md:h-[40px]"
				></video>
			</a>
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
			<a
				href="https://forms.gle/bVW9KJSCxeYus4xy9"
				target="_blank"
				rel="noopener noreferrer"
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: 2500
				}}
			>
				<button
					class="px-6 py-3 rounded-md text-dark border-[1px] border-dark bg-transparent font-normal hover:bg-black hover:text-white transition-all"
					>Mentor</button
				></a
			>
		{/if}
	</div>
</div>
