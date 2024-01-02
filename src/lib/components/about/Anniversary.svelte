<script lang="ts">
	import { IconHandClick } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	$: hovering = false;

	onMount(() => {
		const images = document.getElementsByClassName('image');

		let globalIndex = 0,
			last = { x: 0, y: 0 };

		const activate = (image: Element, x: number, y: number) => {
			image.style.left = `${x}px`;
			image.style.top = `${y}px`;

			image.setAttribute('data-status', 'active');

			last = { x, y };
		};

		const distanceFromLast = (x: number, y: number) => {
			return Math.hypot(x - last.x, y - last.y);
		};

		window.onmousemove = (e) => {
			let bounds = document.getElementById('anniversary')?.getBoundingClientRect();

			let x = e.clientX - bounds!.left,
				y = e.clientY - bounds!.top;

			let smallScreenWidth = 640;
			let distanceThreshold = window.innerWidth > smallScreenWidth ? 100 : 50;
			if (distanceFromLast(x, y) > distanceThreshold && hovering) {
				const lead = images[globalIndex % images.length],
					tail = images[(globalIndex - 5) % images.length];

				activate(lead, x, y);

				if (tail) tail.setAttribute('data-status', 'inactive');

				globalIndex++;
			}
		};
	});
</script>

<IconHandClick
	class={`absolute bottom-4 right-4 text-white w-5 h-5 z-20 transition-opacity ${
		hovering && 'opacity-20'
	}`}
/>
<div
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	role="banner"
	class="absolute text-white font-medium text-xl sm:text-3xl bg-[rgba(34,36,84,0.6)] w-full h-full flex justify-center items-center z-10 text-center"
>
	<h1>
		Celebrating 10 years of&nbsp;<span class="text-blue">TAMU</span><span class="text-pink"
			>hack</span
		>
	</h1>
</div>
<div id="anniversary" class="bg-dark overflow-hidden w-full h-full relative">
	<img
		class="image"
		data-index="0"
		data-status="inactive"
		src="/assets/anniversary/th2014.jpeg"
		alt="th2014"
	/>
	<img
		class="image"
		data-index="1"
		data-status="inactive"
		src="/assets/anniversary/th2015.jpeg"
		alt="th2015"
	/>
	<img
		class="image"
		data-index="2"
		data-status="inactive"
		src="/assets/anniversary/th2016.jpeg"
		alt="th2016"
	/>
	<img
		class="image"
		data-index="3"
		data-status="inactive"
		src="/assets/anniversary/th2018.jpeg"
		alt="th2018"
	/>
	<img
		class="image"
		data-index="4"
		data-status="inactive"
		src="/assets/anniversary/th2019.jpeg"
		alt="th2019"
	/>
	<img
		class="image"
		data-index="5"
		data-status="inactive"
		src="/assets/anniversary/th2020.jpeg"
		alt="th2020"
	/>
	<img
		class="image"
		data-index="6"
		data-status="inactive"
		src="/assets/anniversary/th2021.jpeg"
		alt="th2021"
	/>
	<img
		class="image"
		data-index="7"
		data-status="inactive"
		src="/assets/anniversary/th2022.jpeg"
		alt="th2022"
	/>
	<img
		class="image"
		data-index="8"
		data-status="inactive"
		src="/assets/anniversary/th2023.jpeg"
		alt="th2023"
	/>
</div>

<style>
	.image {
		width: 35vmin;
		position: absolute;
		transform: translate(-50%, -50%);
		border-radius: 0.5rem;
	}

	.image[data-status='inactive'] {
		display: none;
	}

	.image[data-status='active'] {
		display: block;
	}
</style>
