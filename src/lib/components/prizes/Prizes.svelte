<script lang="ts">
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="flex flex-col min-h-[4000px] text-white container mt-64 w-full"
>
	<div class="flex gap-4 w-full">
		<div class="flex flex-col justify-between items-center w-1/3">
			<div class="relative green-gradient w-full h-[250px] rounded-t-md">
				{#if isInView}
					<img
						in:scale={{
							duration: 250,
							delay: 500
						}}
						class="rotate-[20deg] scale-125 xl:-translate-y-24"
						alt="Scooter Graphic"
						src="/assets/prizes/svgs/scooter-sparkle.svg"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">First Place</p>
					<p class="text-xl font-light font-poppins copy-on-dark">1st place overall prize.</p>
				</div>
				<p class="text-xl font-poppins copy-on-dark">Prize: Electric Scooter</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center w-1/3">
			<div class="relative blue-gradient w-full h-[250px] rounded-t-md">
				{#if isInView}
					<img
						in:scale={{
							duration: 250,
							delay: 600
						}}
						class="rotate-[20deg] xl:-translate-y-24"
						alt="iPad Graphic"
						src="/assets/prizes/svgs/ipad-sparkle.svg"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Second Place</p>
					<p class="text-xl font-light font-poppins copy-on-dark">2nd place overall prize.</p>
				</div>
				<p class="text-xl font-light font-poppins copy-on-dark">Prize: iPad 10th Gen</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center w-1/3">
			<div class="relative pink-gradient w-full h-[250px] rounded-t-md">
				{#if isInView}
					<img
						in:scale={{
							duration: 250,
							delay: 700
						}}
						class="rotate-[20deg] xl:-translate-y-24"
						alt="iPad Graphic"
						src="/assets/prizes/headphones-sparkle.png"
					/>
				{/if}
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Third Place</p>
					<p class="text-xl font-light font-poppins copy-on-dark">3rd place overall prize.</p>
				</div>
				<p class="text-xl font-poppins copy-on-dark">Prize: Sony XM4 Headphones</p>
			</div>
		</div>
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
		background: linear-gradient(180deg, #d8f9e9 0.09%, #fff 151.34%);
	}

	.pink-gradient {
		background: #eedbe9;
	}
</style>
