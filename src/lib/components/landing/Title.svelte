<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { animationDone } from '$lib/stores';
	import { scale } from 'svelte/transition';

	export let title = 'TAMUHACK X';

	onMount(() => {
		let typeSplit = new SplitType('#presenting', {
			types: 'words',
			tagName: 'span'
		});

		gsap.from('#presenting .word', {
			y: '50%',
			opacity: 0,
			duration: 1,
			ease: 'power4.out',
			stagger: 0.1,
			delay: 3.5
		});

		gsap.from('#title', {
			y: '50%',
			opacity: 0,
			duration: 1,
			ease: 'power4.out',
			delay: 4.5
		});

		gsap.from('#hours', {
			y: '50%',
			opacity: 0,
			duration: 1,
			ease: 'power4.out',
			delay: 5
		});

		gsap.from('#plus', {
			y: '50%',
			opacity: 0,
			duration: 1,
			ease: 'power4.out',
			delay: 5.25
		});

		gsap.from('#msc', {
			y: '50%',
			opacity: 0,
			duration: 1,
			ease: 'power4.out',
			delay: 5.5
		});
	});
</script>

<div class="flex flex-col justify-end mb-12 w-full mt-10 sm:mt-0">
	<div class="flex justify-center select-none">
		<div>
			<h2 id="presenting" class="text-center font-light my-6 tracking-widest text-dark">
				<span class="word" style="display: inline-block;">PRESENTING</span>
				<span class="word" style="display: inline-block;">OUR</span>
				<span class="word" style="display: inline-block;">TENTH</span>
				<span class="word" style="display: inline-block;">ANNIVERSARY</span>
			</h2>
			<h1 id="title" class="text-center text-dark font-semibold tracking-wide font-poppins">
				{title}
			</h1>
			<div class="hidden md:flex justify-center gap-4 mt-6 font-light tracking-wide">
				<p
					id="hours"
					class="px-4 py-1 border rounded-full border-dark text-dark opacity-90 inline-block"
				>
					24 HOURS
				</p>
				<p
					id="plus"
					class="px-4 py-1 border rounded-full border-dark text-dark opacity-90 inline-block"
				>
					HARDWARE + SOFTWARE
				</p>
				<p
					id="msc"
					class="px-4 py-1 border rounded-full border-dark text-dark opacity-90 inline-block"
				>
					MSC 2300
				</p>
			</div>
			{#if $animationDone}
				<div
					class="flex sm:hidden justify-center gap-4 mt-6 font-light tracking-wide"
					in:scale={{
						duration: 500,
						opacity: 1,
						delay: 2500
					}}
				>
					<a href="https://register.tamuhack.com/" target="_blank" rel="noopener noreferrer">
						<button
							class="px-6 py-3 rounded-md text-white border-[1px] border-dark bg-dark font-normal hover:bg-black transition-all"
							>Apply</button
						></a
					>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: clamp(42px, -6.5915492958px + 10.7183098592vw, 180px);
		line-height: 80%;
	}

	h2 {
		font-size: clamp(12px, -0.5px + 1.5vw, 18px);
		font-family: '', sans-serif;
	}
</style>
