<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const numbers = document.querySelector('#numbers')!;

		let startCount = 0,
			num = { var: startCount };

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#transition-container',
					pin: '#transition-container',
					start: 'top 45%',
					end: '+=1000',
					scrub: true,
					markers: false
				}
			})
			.to(num, {
				var: 6000,
				duration: 9999,
				ease: 'none',
				onUpdate: changeNumber
			})
			.to({}, { duration: 1 });

		function changeNumber() {
			numbers.innerHTML = `$${num.var.toFixed()}`;
		}
	});
</script>

<div
	id="transition-container"
	class="relative flex flex-col items-center justify-start text-white font-semibold gap-4 h-full w-full"
>
	<h1 id="numbers" class="text-4xl md:text-8xl">
		<span class="text-4xl md:text-8xl">$</span>0
	</h1>
	<h2 class="text-2xl md:text-4xl">in prizes!</h2>
</div>
