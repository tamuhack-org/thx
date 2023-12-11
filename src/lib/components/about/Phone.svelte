<script lang="ts">
	import Messages from './Messages.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { IconChevronLeft, IconChevronRight, IconInfoCircle } from '@tabler/icons-svelte';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fly={{
				duration: 500,
				opacity: 1,
				y: 550,
				delay: 500
			}}
			class="md:-rotate-12 iphone-x scale-50 md:scale-100 -translate-y-8 md:translate-y-0"
		>
			<div class="flex flex-col justify-center w-full h-[120px] border-b-[1px]">
				<div class="flex justify-between w-full mt-6 items-center px-2">
					<div class="w-1/3"><IconChevronLeft /></div>
					<div class="w-1/3 flex justify-center">
						<div class="rounded-full h-12 w-12 bg-gray-400 text-center text-2xl my-auto">
							<div class="flex flex-col justify-center h-full">🤖</div>
						</div>
					</div>
					<div class="w-1/3 flex justify-end pr-2">
						<a href="https://www.ieee.org/" target="_blank" rel="noreferrer noopener"
							><IconInfoCircle /></a
						>
					</div>
				</div>
				<p class="text-xs mt-1 text-center">IEEE</p>
			</div>
			<Messages />
		</div>
	{/if}
</div>

<style lang="scss">
	.iphone-x {
		position: relative;
		margin: 40px auto;
		width: 360px;
		height: 780px;
		background-color: white;
		border-radius: 40px;
		box-shadow:
			0px 0px 0px 11px #1f1f1f,
			0px 0px 0px 13px #191919,
			0px 0px 0px 20px #111;

		&:before,
		&:after {
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}

		&:after {
			bottom: 7px;
			width: 140px;
			height: 4px;
			background-color: #f2f2f2;
			border-radius: 10px;
		}

		&:before {
			top: 0px;
			width: 56%;
			height: 30px;
			background-color: #1f1f1f;
			border-radius: 0px 0px 40px 40px;
		}
	}
</style>
