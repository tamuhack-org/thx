<script lang="ts">
	import PrizesTransition from './PrizesTransition.svelte';
	import Prizes from './Prizes.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { inview } from 'svelte-inview';
	import { animationDone, sectionInView } from '$lib/stores';

	const prizeAssets = [
		{
			file: 'svgs/echo-bundle.svg',
			speed: '0.1',
			width: 'sm:w-[125px]',
			topPosition: 'top-[15%]',
			leftPosition: 'left-[85%]'
		},
		{
			file: 'svgs/headphones-sparkle.svg',
			speed: '0.35',
			width: 'sm:w-[200px]',
			topPosition: 'top-[20%]',
			leftPosition: 'left-[35%]'
		},
		{
			file: 'svgs/instax-mini.svg',
			speed: '0.25',
			width: 'sm:w-[125px]',
			topPosition: 'top-[30%]',
			leftPosition: 'left-[60%]'
		},
		{
			file: 'svgs/ipad-sparkle.svg',
			speed: '0.3',
			width: 'sm:w-[225px]',
			topPosition: 'top-[60%]',
			leftPosition: 'left-[45%]'
		},
		{
			file: 'svgs/mini-projector.svg',
			speed: '0.4',
			width: 'sm:w-[125px]',
			topPosition: 'top-[95%]',
			leftPosition: 'left-[65%]'
		},
		{
			file: 'svgs/monitor.svg',
			speed: '0.25',
			width: 'sm:w-[200px]',
			topPosition: 'top-[90%]',
			leftPosition: 'left-[25%]'
		},
		{
			file: 'svgs/polaroid.svg',
			speed: '0.4',
			width: 'sm:w-[125px]',
			topPosition: 'top-[45%]',
			leftPosition: 'left-[10%]'
		},
		{
			file: 'svgs/raspberry-pi.svg',
			speed: '0.2',
			width: 'sm:w-[125px]',
			topPosition: 'top-[65%]',
			leftPosition: 'left-[20%]'
		},
		{
			file: 'svgs/scooter-sparkle.svg',
			speed: '0.35',
			width: 'sm:w-[250px]',
			topPosition: 'top-[55%]',
			leftPosition: 'left-[80%]'
		},
		{
			file: 'svgs/speaker.svg',
			speed: '0.25',
			width: 'sm:w-[125px]',
			topPosition: 'top-[10%]',
			leftPosition: 'left-[10%]'
		},
		{
			file: 'svgs/switch-sparkle.svg',
			speed: '0.15',
			width: 'sm:w-[175px]',
			topPosition: 'top-[70%]',
			leftPosition: 'left-[90%]'
		},
		{
			file: 'airpods.webp',
			speed: '0.1',
			width: 'sm:w-[150px]',
			topPosition: 'top-[60%]',
			leftPosition: 'left-[65%]'
		},
		{
			file: 'airpodspro.webp',
			speed: '0.2',
			width: 'sm:w-[150px]',
			topPosition: 'top-[40%]',
			leftPosition: 'left-[37%]'
		},
		{
			file: 'ipadhardware.webp',
			speed: '0.15',
			width: 'sm:w-[300px]',
			topPosition: 'top-[77%]',
			leftPosition: 'left-[6%]'
		},
		{
			file: 'scooterhardware.webp',
			speed: '0.1',
			width: 'sm:w-[300px]',
			topPosition: 'top-[80%]',
			leftPosition: 'left-[47%]'
		},
		{
			file: '3dprinter.webp',
			speed: '0.2',
			width: 'sm:w-[250px]',
			topPosition: 'top-[7%]',
			leftPosition: 'left-[63%]'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const faqTitle = document.querySelector('#faq-title')!;
		const faqDescription = document.querySelector('#faq-description')!;
		const faqQuestions = document.querySelectorAll('.faq-question')!;
		const faqQuestionBottoms = document.querySelectorAll('.faq-question-bottom')!;

		ScrollTrigger.create({
			trigger: '#prizes',
			start: 'top top',
			end: 'bottom top',
			markers: false,
			onEnter: () => {
				gsap.to('body', { background: '#0C0C19', duration: 0.5 });
				faqTitle.style.webkitTextStrokeColor = '#FFFFFF';
				faqDescription.style.color = '#FFFFFF';
				faqQuestions.forEach((question) => {
					question.style.color = '#FFFFFF';
				});
				faqQuestionBottoms.forEach((bottom) => {
					bottom.style.backgroundColor = '#FFFFFF';
				});
			},
			onEnterBack: () => {
				gsap.to('body', { background: '#0C0C19', duration: 0.5 });
				faqTitle.style.webkitTextStrokeColor = '#FFFFFF';
				faqDescription.style.color = '#FFFFFF';
				faqQuestions.forEach((question) => {
					question.style.color = '#FFFFFF';
				});
				faqQuestionBottoms.forEach((bottom) => {
					bottom.style.backgroundColor = '#FFFFFF';
				});
			},
			onLeave: () => {
				gsap.to('body', { background: '#FFFFFF', duration: 0.5 });
				faqTitle.style.webkitTextStrokeColor = '#222454';
				faqDescription.style.color = '#222454';
				faqQuestions.forEach((question) => {
					question.style.color = '#222454';
				});
				faqQuestionBottoms.forEach((bottom) => {
					bottom.style.backgroundColor = '#222454';
				});
			},
			onLeaveBack: () => {
				gsap.to('body', { background: '#FFFFFF', duration: 0.5 });
				faqTitle.style.webkitTextStrokeColor = '#222454';
				faqDescription.style.color = '#222454';
				faqQuestions.forEach((question) => {
					question.style.color = '#222454';
				});
				faqQuestionBottoms.forEach((bottom) => {
					bottom.style.backgroundColor = '#222454';
				});
			}
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
				markers: false
			}
		});
	});
</script>

<div
	id="prizes"
	class="pt-[calc(100dvh_/_2)]"
	use:inview
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		if (inView) {
			$sectionInView = 'Prizes';
		}
	}}
	on:inview_leave={(event) => {
		const { scrollDirection } = event.detail;
		if (!$animationDone) {
			return;
		}
		if (scrollDirection.vertical === 'up') {
			// if statement to fix bug that causes sectionInView to be Schedule when first loading page
			if (window.scrollY !== 0) {
				$sectionInView = 'FAQ';
			}
		} else {
			$sectionInView = 'Schedule';
		}
	}}
>
	<div class="relative">
		<div id="prize-images" class="absolute top-32 left-0 w-full h-[1000px]">
			{#each prizeAssets as prize}
				<img
					src={`/assets/prizes/${prize.file}`}
					alt=""
					class={`absolute opacity-75 -translate-x-1/2 -translate-y-1/2 w-[75px] ${prize.width} ${prize.topPosition} ${prize.leftPosition}`}
					data-speed={`${prize.speed}`}
				/>
			{/each}
		</div>
		<PrizesTransition />
	</div>
	<div class="overflow-hidden">
		<Prizes />
	</div>
</div>
