<script lang="ts">
	import { onMount } from 'svelte';

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

			if (distanceFromLast(x, y) > 100) {
				const lead = images[globalIndex % images.length],
					tail = images[(globalIndex - 5) % images.length];

				activate(lead, x, y);

				if (tail) tail.setAttribute('data-status', 'inactive');

				globalIndex++;
			}
		};
	});
</script>

<div id="anniversary" class="bg-[#1d1d1d] overflow-hidden w-full h-full relative">
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
	}

	.image[data-status='inactive'] {
		display: none;
	}

	.image[data-status='active'] {
		display: block;
	}
</style>
