<script lang="ts">
	import { screenHeight, screenWidth } from '$lib/stores';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const numbers = document.querySelector('#numbers')!;

		let startCount = 0,
			num = { var: startCount };

		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 1500);

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#transition-container',
					pin: '#transition-container',
					start: 'top center',
					end: '+=3000',
					scrub: true,
					markers: true
				}
			})
			.to(num, { var: 6000, duration: 3, ease: 'none', onUpdate: changeNumber })
			.to({}, { duration: 2 });

		function changeNumber() {
			numbers.innerHTML = `$${num.var.toFixed()}`;
		}

		// const block = document.querySelector('.box')!;
		// const pin = document.querySelector('.scroll-smooth-effects__container')!;
		// const wrapper = document.querySelector('.scroll-smooth-effects__wrapper')!;

		// const mm = gsap.matchMedia();

		// mm.add(
		// 	{
		// 		isDesktop: '(min-width: 1240px)',
		// 		dontReduceMotion: '(prefers-reduced-motion: no-preference)'
		// 	},
		// 	(context) => {
		// 		const { isDesktop, dontReduceMotion } = context.conditions;

		// 		if (!isDesktop || !dontReduceMotion) return;

		// 		for (let i = 0; i < 40; i++) {
		// 			const circle = document.createElement('div');
		// 			const circleInner = document.createElement('div');
		// 			const size = gsap.utils.random(0.1, 2);
		// 			const scale = gsap.utils.mapRange(0.1, 2, 1, 9, size);
		// 			const opacity = gsap.utils.mapRange(0.1, 2, 0.1, 0.9, size);
		// 			const maxX = $screenWidth - size;
		// 			const maxY = $screenHeight * 2;
		// 			const top = (gsap.utils.random(0, maxY) / $screenHeight) * 100;
		// 			const left = (gsap.utils.random(0, maxX) / $screenWidth) * 100;

		// 			circle.classList.add('scroll-smooth-effects__circle');
		// 			circle.dataset.scale = `${scale}`;
		// 			circleInner.classList.add('scroll-smooth-effects__circle-inner');
		// 			circle.style.top = `${top}vh`;
		// 			circle.style.left = `${left}vw`;
		// 			circle.style.position = 'absolute';
		// 			circleInner.style.width = `${size}vw`;
		// 			circleInner.style.height = `${size}vw`;
		// 			circleInner.style.opacity = `${opacity}`;
		// 			circleInner.style.background = `radial-gradient(
		// 				174.86% 134.88% at 129.03% 15.73%,
		// 				#00bae2 0,
		// 				#ffa9fa 11.29%,
		// 				#fec5fb 46.35%,
		// 				#00bae2 95.73%
		// 			)`;
		// 			circleInner.style.borderRadius = `5rem / calc(5rem / ${scale})`;
		// 			circleInner.style.transform = `scaleY(${scale})`;

		// 			circle.appendChild(circleInner);
		// 			pin.appendChild(circle);
		// 		}

		// 		const circles = pin.querySelectorAll('.scroll-smooth-effects__circle');

		// 		const circlesTl = gsap
		// 			.timeline({
		// 				scrollTrigger: {
		// 					trigger: wrapper,
		// 					start: 'top 90%',
		// 					end: 'bottom bottom',
		// 					scrub: 1
		// 				}
		// 			})
		// 			.to(circles, {
		// 				y: -window.innerHeight,
		// 				'--fy': (index: any, target: any) => target.dataset.scale,
		// 				stagger: 0.008,
		// 				ease: 'power2.inOut',
		// 				duration: 2
		// 			})
		// 			.to(
		// 				circles,
		// 				{
		// 					opacity: 0,
		// 					stagger: 0.008,
		// 					ease: 'power2.inOut',
		// 					duration: 2
		// 				},
		// 				'0.5'
		// 			);

		// 		const parallaxTl = gsap.timeline({
		// 			scrollTrigger: {
		// 				trigger: block,
		// 				start: 'top top',
		// 				end: 'bottom bottom',
		// 				pin: pin,
		// 				pinSpacing: false,
		// 				scrub: 1
		// 			}
		// 		});
		// 	}
		// );
	});
</script>

<!-- <div class="scroll-smooth-effects">
	<div class="box">
		<div class="scroll-smooth-effects__wrapper">
			<div class="scroll-smooth-effects__container h-dscreen"></div>
		</div>
	</div>
</div> -->

<div id="transition-container" class="flex items-start justify-center text-red-500 border">
	<h1 id="numbers" class="font-bold text-8xl"><span class="font-bold text-8xl">$</span>0</h1>
</div>

<style>
	/* .scroll-smooth-effects {
		position: relative;
	}

	.scroll-smooth-effects__container {
		align-items: center;
		display: flex;
		justify-content: center;
		padding-bottom: max(4rem, min(4.1424vw + 3.02913rem, 8rem));
		padding-top: max(4rem, min(4.1424vw + 3.02913rem, 8rem));
		width: 100%;
	} */
</style>
