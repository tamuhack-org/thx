<script lang="ts">
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { quintInOut } from 'svelte/easing';
	import Circuits from './Circuits.svelte';

	let isInView: boolean;

	type ProjectReference = {
		name: string;
		link: string;
	};

	type Prize = {
		title: string;
		desc: string;
		prizes: string[];
		projectRefs?: ProjectReference[];
	};

	let otherPrizes: Prize[] = [
		{
			title: 'Best Design',
			desc: 'In the world of hacking and engineering, a product must not only work well, but also provide the best user experience possible. Best hack that demonstrates clear design and usability intentions.',
			prizes: ['Prize: Polaroid Now 2nd Gen']
		},
		{
			title: 'Best Beginner Software Hack',
			desc: 'Best hack created by first-time hackers at TAMUhack. (Must have at least 2 first-timers to qualify)',
			prizes: ['Prize: Mini-Projector']
		},
		{
			title: 'American Airlines Challenge',
			desc: 'Create a solution for the airline industry, be it passenger experience, employee experience, or operational efficiencies.',
			prizes: [
				'1st Place: 75k AAdvantage® Miles for each team member',
				'2nd Place: 50k AAdvantage® Miles for each team member',
				'3rd Place: 25k AAdvantage® Miles for each team member'
			]
		},
		{
			title: 'Sandia Challenge',
			desc: 'The proliferation of personally identifiable information (birthdays, interests/hobbies, family connections, occupation/title, etc.) across social media and the wider internet has enabled many threat actors to conduct phishing attacks and impersonate unsuspecting individuals. Develop an application, methodology, or tool to aid in the detection of possible phishing attempts and alert users to open-source intelligence that could be used to impersonate them.',
			prizes: [
				'1st Place: Beats™ Studio Buds',
				'2nd Place: Bose™ Soundlink Flex Bluetooth Speaker',
				'3rd Place: Sandia Swag Bag'
			]
		},
		{
			title: 'PIMCO Challenge',
			desc: 'Develop a hack that encourages good financial behavior and help to set individuals up for success in meeting their financial goals. Whether you choose to focus on saving, investing, building credit, financial literacy, or anything else you dream up, from our perspective, when you combine finance with technology, the sky’s the limit.',
			prizes: ['1st Place: $80 Amazon gift cards', '2nd Place: $40 Amazon gift cards']
		},
		{
			title: 'L3Harris Technologies Challenge',
			desc: 'L3Harris Technologies is the Trusted Disruptor in the Aerospace & Defense industry. With customers mission-critical needs always in mind, our employee teams deliver creative end-to-end technology solutions connecting space, air, land, sea, and cyber domains in the interest of national security. In order to provide these advanced engineering solutions, we need skilled, engaged, and passionate engineering teams. As a company, we strive to stimulate lasting interest in STEM careers in school-aged children. Challenge: Develop a user experience that will stimulate lasting interest in and preparation for STEM careers for those under 12 years of age.',
			prizes: [
				'1st Place: $200 Amazon gift cards',
				'2nd Place: $100 Amazon gift cards',
				'3rd Place: $50 Amazon gift cards'
			]
		},
		{
			title: 'Frogslayer Challenge',
			desc: 'Build an application that utilizes a cross-platform framework (Flutter, .NET MAUI, React Native)',
			prizes: ['Prize: $50 Amazon Gift Cards']
		},
		{
			title: 'USAA Challenge',
			desc: 'Create a hack that utilizes a REST API developed by your team. *Bonus points for resiliency, gathering information from multiple data sources (DB, Other rest apis, etc), full CRUD capabilities, user authentication, friendly UI for non-technical users).',
			prizes: ['Prize: Raspberry Pi 4 Model B: Quad Core 64 bit, WiFi + Bluetooth']
		},
		{
			title: 'Baker Hughes Challenge',
			desc: 'Develop an innovative solution for compressing 3-phase power analysis data without any loss in information. Make sure to read through the challenge document for more information!',
			prizes: ['Prize: Toshiba Canvio Flex 2TB Portable External Hard Drive'],
			projectRefs: [
				{
					name: 'Challenge Document',
					link: 'http://bit.ly/BakerHughesChallengeDoc'
				},
				{
					name: 'Dataset',
					link: 'http://bit.ly/BakerHughesDataset'
				}
			]
		}
	];

	let otherHardwarePrizes = [
		{
			title: 'Cybersecurity Challenge',
			desc: 'USB devices are commonly used for data transfer between computers and various peripherals. However, these devices pose security risks due to the potential introduction of malware or unauthorized data access. Ensuring the integrity and confidentiality of data transferred via USB is crucial for cybersecurity. Develop a simple and cost-effective hardware solution to enhance the security of USB data transfer',
			prizes: ['Prize: AirPods (2nd Generation)'],
			projectRefs: [
				{
					name: 'Challenge Document',
					link: '/assets/th2024-cybersecurity-problem-statements.pdf'
				}
			]
		},
		{
			title: 'Best Medical Device Hack',
			desc: 'The Best Medical Device Hack is an open ended challenge meant to target the medical or biomedical field in terms of engineering application. Hackers can create their own project without limitations. If you have questions, reach out to IEEE!',
			prizes: ['Prize: AirPods (2nd Generation)']
		},
		{
			title: 'Best Beginner Hardware Hack',
			desc: 'Best hardware hack created by first-time hackers at TAMUhack. (Must have at least 2 first-timers to qualify)',
			prizes: ['Prize: Wireless Qi Charger']
		}
	];

	let hoverText = '1st place software track.';

	function handleHover() {
		hoverText = '...and the scooter was electric.';
	}

	function handleMouseOut() {
		hoverText = '1st place software track.';
	}
	let otherPrizesHardware = [
		{
			title: 'Frogslayer Challenge',
			desc: 'Build an application that utilizes a cross-platform framework (Flutter, .NET MAUI, React Native)',
			prizes: ['$50 Amazon Gift Cards']
		},
		{
			title: 'Pimco Challenge',
			desc: 'Develop a hack that encourages good financial behavior and help to set individuals up for success in meeting their financial goals. Whether you choose to focus on saving, investing, building credit, financial literacy, or anything else you dream up, from our perspective, when you combine finance with technology, the sky’s the limit.',
			prizes: ['Airpods 3rd Gen']
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
				<img
					in:scale={{
						duration: 750,
						easing: quintInOut
					}}
					class="rotate-[20deg] scale-75 md:scale-100 sm:-translate-y-32 lg:-translate-y-0 xl:-translate-y-24"
					alt="Scooter Graphic"
					src="/assets/prizes/svgs/scooter-sparkle.svg"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">First Place Software</p>
					<p
						on:mouseover={handleHover}
						on:mouseout={handleMouseOut}
						class="text-lg font-light font-poppins copy-on-dark opacity-90 cursor-default"
					>
						{hoverText}
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: Electric Scooter</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative blue-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				<img
					in:scale={{
						duration: 750,
						delay: 100,
						easing: quintInOut
					}}
					class="sm:w-1/2 mx-auto md:w-full scale-[0.8] md:-tranlate-y-12 lg:-translate-y-0 xl:-translate-y-12"
					alt="Monitor Graphic"
					src="/assets/prizes/monitor.webp"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Second Place Software</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						2nd place software track.
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
				<img
					in:scale={{
						duration: 750,
						delay: 200,
						easing: quintInOut
					}}
					class="rotate-[20deg] sm:w-1/2 mx-auto md:w-full scale-75 -translate-y-12 sm:-translate-y-12 lg:-translate-y-0 xl:-translate-y-24 bg-transparent"
					alt="Headphones Graphic"
					src="/assets/prizes/headphones-sparkle.webp"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Third Place Software</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						3rd place software track.
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
					<h1 class="text-2xl font-medium font-poppins copy-on-dark">
						{prize.title}
					</h1>
					<p class="text-base md:text-lg font-light font-poppins copy-on-dark mt-2 opacity-90">
						{prize.desc}
					</p>
					{#if prize?.projectRefs}
						<h2 class="text-base md:text-xl font-poppins copy-on-dark mt-4">Project References</h2>
						<ul class="text-base md:text-lg font-light font-poppings copy-on-dark mt-2 opacity-90">
							{#each prize.projectRefs as ref}
								<li>
									<a href={ref.link}><u>{ref.name}</u></a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<div class="mt-8">
					{#each prize.prizes as win}
						<p class="text-base md:text-xl font-poppins copy-on-dark mt-2">{win}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<p class="text-center text-3xl md:text-6xl font-poppins font-semibold copy-on-dark mt-24">
		Hardware Prizes
	</p>
	<p class="text-center md:text-xl xl:text-2xl font-poppins copy-on-dark mt-2">
		Participants can choose to compete in the hardware track to be eligible for these prizes.
	</p>

	<!-- HARDWARE PRIZES-->
	<div class="relative grid grid-cols-6 gap-4 w-full mt-32">
		<div
			class="flex flex-col justify-between items-center col-span-6 w-full md:w-2/3 lg:col-span-2 lg:w-full mx-auto"
		>
			<div
				class="relative pink-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				<img
					in:scale={{
						duration: 750,
						easing: quintInOut
					}}
					class="rotate-[20deg] sm:-translate-y-32 lg:-translate-y-0 xl:-translate-y-12"
					alt="iPad Graphic"
					src="/assets/prizes/ipadhardware.webp"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">First Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						1st place hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: iPad 10th Gen</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative blue-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				<img
					in:scale={{
						duration: 750,
						delay: 100,
						easing: quintInOut
					}}
					class="sm:w-1/2 mx-auto md:w-full xl:scale-125 rotate-12 md:-tranlate-y-12 lg:-translate-y-0 xl:-translate-y-12"
					alt="Monitor Graphic"
					src="/assets/prizes/scooterhardware.webp"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Second Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						2nd place hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-light font-poppins copy-on-dark">
					Prize: Electric Scooter
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-between items-center col-span-6 md:col-span-3 lg:col-span-2">
			<div
				class="relative green-gradient w-full h-[250px] rounded-t-md overflow-hidden md:overflow-visible"
			>
				<img
					in:scale={{
						duration: 750,
						delay: 200,
						easing: quintInOut
					}}
					class="-rotate-12 sm:w-1/2 mx-auto md:w-full sm:-translate-y-6 lg:-translate-y-0 xl:-translate-y-12 bg-transparent"
					alt="Headphones Graphic"
					src="/assets/prizes/3dprinter.webp"
				/>
			</div>
			<div class="flex flex-col justify-between w-full h-[150px] p-4 dark-bg rounded-b-md z-10">
				<div>
					<p class="text-2xl font-medium font-poppins copy-on-dark">Third Place Hardware</p>
					<p class="text-lg font-light font-poppins copy-on-dark opacity-90">
						3rd place hardware track.
					</p>
				</div>
				<p class="text-base md:text-xl font-poppins copy-on-dark">Prize: Ender 3 3D Printer</p>
			</div>
		</div>
	</div>
	<div class="grid md:grid-cols-2 gap-4 mt-4">
		{#each otherHardwarePrizes as prize}
			<div class="flex flex-col justify-between w-full p-4 dark-bg rounded-md z-10">
				<div>
					<h1 class="text-2xl font-medium font-poppins copy-on-dark">
						{prize.title}
					</h1>
					<p class="text-base md:text-lg font-light font-poppins copy-on-dark mt-2 opacity-90">
						{prize.desc}
					</p>
					{#if prize?.projectRefs}
						<h2 class="text-base md:text-xl font-poppins copy-on-dark mt-4">Project References</h2>
						<ul class="text-base md:text-lg font-light font-poppings copy-on-dark mt-2 opacity-90">
							{#each prize.projectRefs as ref}
								<li>
									<a href={ref.link}><u>{ref.name}</u></a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<div class="mt-8">
					{#each prize.prizes as win}
						<p class="text-base md:text-xl font-poppins copy-on-dark mt-2">{win}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<!-- <div class="grid md:grid-cols-2 gap-4 mt-4 mb-32">
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
	</div> -->
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

	.blue-gradient {
		background: #cabcff;
	}

	.pink-gradient {
		background: #eedbe9;
	}
</style>
