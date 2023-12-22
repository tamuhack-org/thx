<script lang="ts">
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { IconHandClick } from '@tabler/icons-svelte';

	let isInView: boolean;
	$: hovering = false;

	let m = { x: 0, y: 0 };
	let scroll = 0;
	const handleMousemove = (event: MouseEvent) => {
		m.x = event.clientX;
		m.y = event.clientY;

		let lefteye = document.getElementById('left');
		let righteye = document.getElementById('right');
		let container = document.getElementById('eyecontainer');
		let bounds = container?.getBoundingClientRect();
		let staticPositionX = bounds?.left + window.scrollX;
		let staticPositionY = bounds?.top + window.scrollY;
		let x = staticPositionX + lefteye.offsetLeft + lefteye.offsetWidth / 2;
		let y = staticPositionY + lefteye.offsetTop + lefteye.offsetHeight / 2;
		let rad = Math.atan2(m.x - x, m.y + scroll - lefteye.offsetHeight / 2 - y);
		let rot = rad * (180 / Math.PI) * -1 + 180;

		lefteye.style.transform = 'rotate(' + rot + 'deg)';
		righteye.style.transform = 'rotate(' + rot + 'deg)';
	};
</script>

<svelte:window bind:scrollY={scroll} />

<IconHandClick
	class={`absolute bottom-4 right-4 text-white w-5 h-5 z-20 transition-opacity ${
		hovering && 'opacity-20'
	}`}
/>
<div
	on:mousemove={handleMousemove}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	role="banner"
	class="move-area"
>
	<div
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:change={({ detail }) => {
			isInView = detail.inView;
		}}
		id="eyeContainer"
		class="eye-container"
	>
		{#if isInView}
			<div
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: 500
				}}
				id="left"
				class="eye"
			></div>

			<div
				in:scale={{
					duration: 500,
					opacity: 1,
					delay: 500
				}}
				id="right"
				class="eye"
			></div>
		{/if}
	</div>
</div>

<style>
	.move-area {
		/*normally use body*/
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}

	.eye-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
	}

	.eye {
		position: relative;
		display: inline-block;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		background: white;
	}

	.eye:after {
		/*pupil*/
		position: absolute;
		bottom: 27px;
		right: 10px;
		width: 20px;
		height: 20px;
		background: #000;
		border-radius: 50%;
		content: ' ';
	}
</style>
