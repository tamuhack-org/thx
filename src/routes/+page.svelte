<script lang="ts">
	import Title from '$lib/components/landing/Title.svelte';
	import PhysicsContainer from '$lib/components/landing/PhysicsContainer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Marquee from '$lib/components/marquee/Marquee.svelte';
	import TopNavbar from '$lib/components/navbar/TopNavbar.svelte';
	import Eyes from '$lib/components/about/Eyes.svelte';
	import PrizesAmount from '$lib/components/about/PrizesAmount.svelte';
	import Phone from '$lib/components/about/Phone.svelte';
	import Construction from '$lib/components/common/Construction.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import Anniversary from '$lib/components/about/Anniversary.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import anime from 'animejs';
	import { animationDone, screenWidth, screenHeight, scheduleLoaded } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import Tiger from '$lib/components/common/Tiger.svelte';
	import CommandMenu from '$lib/components/common/CommandMenu.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import PrizesContainer from '$lib/components/prizes/PrizesContainer.svelte';
	import { inview } from 'svelte-inview';
	import { sectionInView } from '$lib/stores';
	import Sponsors from '$lib/components/landing/Sponsors.svelte';
	import Faq from '$lib/components/faq/faq.svelte';

	// TODO: use export and use ScheduledEvent 
	export let data: 
	{
		events: 
		{	
			event_name: string;
			id: string;
			time: string;
			day: string;
			date: string;
			description: string;
			tags?: string[];
		}[];
		currentEventIndex: number;
	};

	function startLoader() {
		let counterElement = document.querySelector('.count p') as HTMLElement;
		let currentValue = 0;

		function updateCounter() {
			if (currentValue < 100) {
				let increment = Math.floor(Math.random() * 10) + 1;
				currentValue = Math.min(currentValue + increment, 100);
				counterElement.textContent = currentValue.toString();

				let delay = Math.floor(Math.random() * 50) + 25;
				setTimeout(updateCounter, delay);
			}
		}

		updateCounter();
	}

	onMount(() => {
		// force scroll to top after reload
		setTimeout(() => {
			window.scroll({
				top: 0,
				behavior: 'instant'
			});
		}, 1);

		startLoader();

		gsap.to('.count', { opacity: 0, delay: 1.5, duration: 0.5 });

		let textWrapper = document.querySelector('.ml16');
	
		if (textWrapper?.textContent) {
			textWrapper.innerHTML = textWrapper?.textContent?.replace(
				/\S/g,
				"<span class='inline-block leading-4 text-dark'>$&</span>"
			);
		}

		anime
			.timeline({ loop: false })
			.add({
				targets: '.ml16 span',
				translateY: [-100, 0],
				easing: 'easeOutExpo',
				duration: 1000,
				delay: (el, i) => 10 * i
			})
			.add({
				targets: '.ml16 span',
				translateY: [0, 100],
				easing: 'easeOutExpo',
				duration: 5000,
				delay: (el, i) => 500 + 30 * i
			});

		gsap.to('.pre-loader', {
			scale: 0.5,
			ease: 'power4.inOut',
			duration: 2,
			delay: 1.5
		});

		gsap.to('.loader', {
			height: '0',
			ease: 'power4.inOut',
			duration: 1.5,
			delay: 2.25
		});

		gsap.to('.loader-bg', {
			height: '0',
			ease: 'power4.inOut',
			duration: 1.5,
			delay: 2.5
		});

		gsap.to('.loader-2', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
			ease: 'power4.inOut',
			duration: 1,
			delay: 2.375,
			onComplete: () => {
				$animationDone = true;
				document.querySelector('body')!.style.overflow = 'auto';
			}
		});
	});
</script>

<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="description"
		content="[January 27th, 2024] - At TAMUhack, teams spend the weekend working on innovative software and hardware solutions to real-world problems in a community full of mentorship."
	/>
	<meta
		name="keywords"
		content="[January 27th, 2024] - At TAMUhack, teams spend the weekend working on innovative software and hardware solutions to real-world problems in a community full of mentorship."
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://x.tamuhack.org" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="TAMUhack X" />
	<meta
		property="og:description"
		content="[January 27th, 2024] - At TAMUhack, teams spend the weekend working on innovative software and hardware solutions to real-world problems in a community full of mentorship."
	/>
	<meta
		property="og:image"
		content="https://opengraph.b-cdn.net/production/documents/9bedb1b9-4c30-4ed5-901e-d7dca7365da7.png?token=MiAKlztSFMNTTwUrn3xz2SUwthNUAl-WnF0nH7DOGBE&height=630&width=1200&expires=33240558356"
	/>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="x.tamuhack.org" />
	<meta property="twitter:url" content="https://x.tamuhack.org" />
	<meta name="twitter:title" content="TAMUhack X" />
	<meta
		name="twitter:description"
		content="[January 27th, 2024] - At TAMUhack, teams spend the weekend working on innovative software and hardware solutions to real-world problems in a community full of mentorship."
	/>
	<meta
		name="twitter:image"
		content="https://opengraph.b-cdn.net/production/documents/9bedb1b9-4c30-4ed5-901e-d7dca7365da7.png?token=MiAKlztSFMNTTwUrn3xz2SUwthNUAl-WnF0nH7DOGBE&height=630&width=1200&expires=33240558356"
	/>
	<title>TAMUhack X</title>
</svelte:head>

<!-- LOADER ANIMATION -->
<div class="loader-container">
	<div class="pre-loader">
		<div class="loader"></div>
		<div class="loader-bg"></div>
	</div>
	<div class="loader-content">
		<div class="count"><p>0</p></div>
		<div class="copy"><p class="ml16">TAMUHACK X</p></div>
	</div>
	<div class="loader-2"></div>
</div>

<Marquee />
<main id="all" class="h-full w-full font-poppins max-w-[2000px] mx-auto bg-transparent">
	{#if $animationDone}
		<a
			id="mlh-trust-badge"
			style="display:block;max-width:100px;min-width:60px;position:absolute;right:20px;top:40px;width:10%;z-index:40"
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=black"
			target="_blank"
			in:fly={{
				duration: 500,
				x: 0,
				y: -300,
				opacity: 1,
				delay: $screenWidth > 768 ? 2500 : 1500
			}}
			><img
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
				alt="Major League Hacking 2024 Hackathon Season"
				style="width:100%"
			/></a
		>
	{/if}
	<TopNavbar />

	<div class="mb-2">
		<Title />
		<PhysicsContainer />
	</div>

	<div class="mx-8 mt-32">
		<p class="text-dark font-poppins font-light text-xl md:text-3xl md:w-2/3">
			TAMUhack is a <span class="font-semibold text-[#FF5799]">24-hour</span> event where teams
			create innovative <span class="font-semibold text-[#FF5799]">software and hardware</span>
			solutions to real-world problems in a
			<span class="font-semibold text-[#FF5799]">community of mentorship</span>.
			<!-- <a
				href="https://tamuhack.org/"
				class="underline">Learn more.</a
			> -->
		</p>
		<div
			class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-x-4 gap-y-4 mt-12 min-h-[1148px] md:min-h-[932px] xl:min-h-[500px]"
		>
			<div
				id="eyecontainer"
				class="relative flex justify-center col-span-2 md:col-span-1 min-h-[200px] rounded-xl bg-blue xl:max-h-[275px]"
			>
				<Eyes />
			</div>
			<div class="relative h-full col-span-2 min-h-[200px] rounded-xl bg-dark max-h-[275px]">
				<PrizesAmount />
			</div>
			<div
				class="relative h-full col-span-2 md:col-span-3 xl:col-span-2 row-span-2 min-h-[200px] rounded-xl bg-pink overflow-hidden max-h-[500px]"
			>
				<Phone />
			</div>
			<div
				class="relative h-full col-span-3 min-h-[200px] rounded-xl bg-dark overflow-hidden max-h-[275px]"
			>
				<Anniversary />
			</div>
		</div>
		<p class="text-dark font-poppins font-light text-md mt-12">
			<span class="font-bold">NOTE: </span> Acceptances will be sent out on a rolling basis. If you are
			accepted, you must check in before 11 AM or your acceptance will be forfeited. We will have a waitlist
			line for students who are not accepted. After 11AM, we will admit people from the waitlist line
			until the MSC capacity has been reached.
		</p>
		<div class="hidden md:flex h-[300px] overflow-x-hidden">
			<Tiger />
		</div>
		<div
			use:inview
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				if (inView) {
					$sectionInView = 'Schedule';
				}
			}}
			on:inview_leave={(event) => {
				const { inView, scrollDirection } = event.detail;
				if (scrollDirection.vertical === 'down') {
					$sectionInView = '';
				} else {
					$sectionInView = 'Prizes';
				}
			}}
			id="schedule"
			class="mt-16"
		>
			<Schedule events={data.events} currentEventIndex={data.currentEventIndex} />
		</div>
		{#if $scheduleLoaded}
			<PrizesContainer />
		{/if}
		<div id="faq" class="mt-72">
			<Faq />
		</div>
		<div>
			<Sponsors />
		</div>
		<div id="under-construction" class="my-32">
			<Construction />
		</div>
	</div>

	<Footer />
</main>

<!-- FIXED BOTTOM NAV  -->
<Navbar />

<style>
	/* LOADER ANIMATION CSS */
	.loader-container {
		pointer-events: none;
	}

	.pre-loader {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		z-index: 100;
	}

	.loader {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: white;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader-content {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		width: 300px;
		z-index: 200;
		color: #222454;
	}

	.count {
		flex: 2;
		text-align: right;
		line-height: 1;
		padding: 0 1em;
	}

	.copy {
		flex: 6;
		font-size: 30px;
		line-height: 1;
		font-weight: 600;
	}

	.ml16 {
		color: transparent;
		overflow: hidden;
	}

	.loader-bg {
		position: absolute;
		display: block;
		top: 0;
		width: 100%;
		height: 100%;
		background: #222454;
		z-index: -1;
	}

	.loader-2 {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: #222454;
		z-index: 60;
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	@media (max-width: 640px) {
		.loader-content {
			flex-direction: column;
		}

		.count {
			flex: 1;
			text-align: center;
			margin-bottom: 0.5em;
		}

		.copy {
			text-align: center;
			font-size: x-large;
		}
	}
</style>
