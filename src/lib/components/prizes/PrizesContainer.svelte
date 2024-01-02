<script lang="ts">
	import PrizesTransition from './PrizesTransition.svelte';
	import Prizes from './Prizes.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	const prizeAssets = [
		{
			file: 'echo-bundle.png',
			speed: '0.1',
			width: 'sm:w-[125px]',
			topPosition: 'top-[15%]',
			leftPosition: 'left-[85%]'
		},
		{
			file: 'headphones-sparkle.png',
			speed: '0.35',
			width: 'sm:w-[200px]',
			topPosition: 'top-[20%]',
			leftPosition: 'left-[35%]'
		},
		{
			file: 'instax-mini.png',
			speed: '0.25',
			width: 'sm:w-[125px]',
			topPosition: 'top-[30%]',
			leftPosition: 'left-[60%]'
		},
		{
			file: 'ipad-sparkle.png',
			speed: '0.3',
			width: 'sm:w-[225px]',
			topPosition: 'top-[60%]',
			leftPosition: 'left-[45%]'
		},
		{
			file: 'mini-projector.png',
			speed: '0.4',
			width: 'sm:w-[125px]',
			topPosition: 'top-[95%]',
			leftPosition: 'left-[65%]'
		},
		{
			file: 'monitor.png',
			speed: '0.25',
			width: 'sm:w-[200px]',
			topPosition: 'top-[90%]',
			leftPosition: 'left-[25%]'
		},
		{
			file: 'polaroid.png',
			speed: '0.4',
			width: 'sm:w-[125px]',
			topPosition: 'top-[45%]',
			leftPosition: 'left-[10%]'
		},
		{
			file: 'raspberry-pi.png',
			speed: '0.2',
			width: 'sm:w-[125px]',
			topPosition: 'top-[65%]',
			leftPosition: 'left-[20%]'
		},
		{
			file: 'scooter-sparkle.png',
			speed: '0.35',
			width: 'sm:w-[250px]',
			topPosition: 'top-[55%]',
			leftPosition: 'left-[80%]'
		},
		{
			file: 'speaker.png',
			speed: '0.25',
			width: 'sm:w-[125px]',
			topPosition: 'top-[10%]',
			leftPosition: 'left-[10%]'
		},
		{
			file: 'switch-sparkle.png',
			speed: '0.15',
			width: 'sm:w-[175px]',
			topPosition: 'top-[70%]',
			leftPosition: 'left-[90%]'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.create({
			trigger: '#prizes',
			start: 'top top',
			end: 'bottom 5%',
			markers: true,
			onEnter: () => {
				gsap.to('main', { background: '#0C0C19', duration: 0.5 });
			},
			onEnterBack: () => {
				gsap.to('main', { background: '#0C0C19', duration: 0.5 });
			},
			onLeave: () => gsap.to('main', { background: '#FFFFFF', duration: 0.5 }),
			onLeaveBack: () => gsap.to('main', { background: '#FFFFFF', duration: 0.5 })
		});

		const postsSection = document.querySelector('#prize-images')!;

		gsap.to('[data-speed]', {
			y: (i, el) => -1 * parseFloat(el.getAttribute('data-speed')) * postsSection.offsetHeight,
			ease: 'none',
			scrollTrigger: {
				start: 'top center',
				trigger: postsSection,
				invalidateOnRefresh: true,
				scrub: 0,
				markers: true
			}
		});
	});
</script>

<div id="prizes" class="pt-[calc(100dvh_/_2)]">
	<div class="relative">
		<div id="prize-images" class="absolute top-32 left-0 w-full h-[1000px]">
			{#each prizeAssets as prize}
				<img
					src={`/assets/prizes/${prize.file}`}
					alt="prize"
					class={`absolute opacity-75 -translate-x-1/2 -translate-y-1/2 w-[80px] ${prize.width} ${prize.topPosition} ${prize.leftPosition}`}
					data-speed={`${prize.speed}`}
				/>
			{/each}
		</div>
		<PrizesTransition />
	</div>
	<Prizes />
</div>
