<script lang="ts">
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { quintInOut } from 'svelte/easing';
	import Circuits from './Circuits.svelte';

	let isInView: boolean;

	type Prize = {
		title: string;
		desc: string;
		prize: string;
	};

	let otherPrizes: Prize[] = [
		{
			title: 'Best Design',
			desc: 'In the world of hacking and engineering, a product must not only work well, but also provide the best user experience possible. Best hack that demonstrates clear design and usability intentions.',
			prize: 'Polaroid Now 2nd Gen'
		},
		{
			title: 'Best Beginner Hack',
			desc: 'Best hack created by first-time hackers at TAMUhack. (Must have at least 2 first-timers to qualify)',
			prize: 'Mini-Projector'
		}
	];

	let otherPrizesHardware: Prize[] = [
		{
			title: 'Best ',
			desc: 'In the world of hacking and engineering, a product must not only work well, but also provide the best user experience possible. Best hack that demonstrates clear design and usability intentions.',
			prize: 'Polaroid Now 2nd Gen'
		},
		{
			title: 'Best Beginner Hack',
			desc: 'Best hack created by first-time hackers at TAMUhack. (Must have at least 2 first-timers to qualify)',
			prize: 'Mini-Projector'
		}
	];
</script>

<div id="prizes-section" />
<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="flex flex-col text-white mt-64 w-full md:container"
>
	<div class="grid grid-cols-6 gap-4 w-full" id="prizes">
		<div
			class="flex flex-col justify-between items-center col-span-6 w-full md:w-2/3 lg:col-span-2 lg:w-full mx-auto"
		>
			<div
				class="relative green-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							easing: quintInOut
						}}
						class="rotate-[20deg] scale-75 md:scale-100 sm:-translate-y-32 lg:-translate-y-0 xl:-translate-y-24"
						alt="Scooter Graphic"
						src="/assets/prizes/svgs/scooter-sparkle.svg"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">First Place Software</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						1st place overall prize.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: Electric Scooter</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative blue-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							delay: 100,
							easing: quintInOut
						}}
						class="sm:w-1/2 mx-auto md:w-full scale-[0.8] md:-tranlate-y-12 lg:-translate-y-0 xl:-translate-y-12"
						alt="Monitor Graphic"
						src="/assets/prizes/monitor.png"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Second Place Software</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						2nd place overall prize.
					</p>
				</div>
				<p class="text-base md:text-xl font-light font-poppins copy-on-dark">
					Prize: 165Hz Monitor
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative pink-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							delay: 200,
							easing: quintInOut
						}}
						class="rotate-[20deg] sm:w-1/2 mx-auto md:w-full scale-75 -translate-y-12 sm:-translate-y-12 lg:-translate-y-0 xl:-translate-y-24 bg-transparent"
						alt="Headphones Graphic"
						src="/assets/prizes/headphones-sparkle.png"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Third Place Software</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						3rd place overall prize.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: Sony XM4 Headphones</p>
			</div>
		</div>
	</div>
	<div class="grid md:grid-cols-2 gap-4 mt-4">
		{#each otherPrizes as prize}
			<div class="flex flex-col justify-between w-full p-4 dark-bg rounded-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">
						{prize.title}
					</p>
					<p class="text-base md:text-lg font-light font-poppins copy-on-dark mt-2 opacity-90">
						{prize.desc}
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark mt-8">Prize: {prize.prize}</p>
			</div>
		{/each}
	</div>

	<p class="text-center text-3xl md:text-6xl font-poppins font-semibold copy-on-dark mt-24">
		Hardware Prizes
	</p>
	<p class="text-center md:text-xl font-poppins copy-on-dark mt-2">
		Participants can choose to compete in the hardware track to be eligible for these prizes.
	</p>

	<!-- HARDWARE PRIZES-->
	<div class="relative grid grid-cols-6 gap-4 w-full mt-32">
		<div
			class="flex flex-col justify-between items-center col-span-6 w-full md:w-2/3 lg:col-span-2 lg:w-full mx-auto"
		>
			<div
				class="relative green-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							easing: quintInOut
						}}
						class="rotate-[20deg] scale-75 md:scale-100 sm:-translate-y-32 lg:-translate-y-0 xl:-translate-y-24"
						alt="iPad Graphic"
						src="/assets/prizes/svgs/ipad.svg"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">First Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						1st place in the hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: iPad 10th Gen</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative blue-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							delay: 100,
							easing: quintInOut
						}}
						class="sm:w-1/2 mx-auto md:w-full scale-[0.8] md:-tranlate-y-12 lg:-translate-y-0 xl:-translate-y-12"
						alt="Monitor Graphic"
						src="/assets/prizes/svgs/ipad.svg"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Second Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						2nd place in the hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-light font-poppins copy-on-dark">
					Prize: Electric Scooter
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative pink-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				{#if isInView}
					<img
						in:scale={{
							duration: 750,
							delay: 200,
							easing: quintInOut
						}}
						class="rotate-[20deg] sm:w-1/2 mx-auto md:w-full scale-75 -translate-y-12 sm:-translate-y-12 lg:-translate-y-0 xl:-translate-y-24 bg-transparent"
						alt="Headphones Graphic"
						src="/assets/prizes/headphones-sparkle.png"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Third Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						3rd place in the hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: Ender 3 3D Printer</p>
			</div>
		</div>
		<Circuits />
	</div>
</div>

<style>
	.dark-bg {
		background-color: #242232;
	}

	.copy-on-dark {
		color: rgb(223 223 223);
	}

	.green-gradient {
		background: linear-gradient(180deg, #d8f9e9 0.09%, #fff 151.34%);
	}

	.blue-gradient {
		background: #cabcff;
	}

	.pink-gradient {
		background: #eedbe9;
	}
</style>
