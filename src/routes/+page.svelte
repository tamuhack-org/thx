<script lang="ts">
	import Title from '$lib/components/landing/Title.svelte';
	import PhysicsContainer from '$lib/components/landing/PhysicsContainer.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Marquee from '$lib/components/marquee/Marquee.svelte';
	import TopNavbar from '$lib/components/common/TopNavbar.svelte';
	import Eyes from '$lib/components/about/Eyes.svelte';
	import Prizes from '$lib/components/about/Prizes.svelte';
	import IEEE from '$lib/components/about/IEEE.svelte';
	import Phone from '$lib/components/about/Phone.svelte';
	import Messages from '$lib/components/about/Messages.svelte';

	let screenWidth: number;
	let screenHeight: number;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<!-- LANDING -->
<div class="min-h-dscreen w-full font-poppins bg-opacity-50 max-w-[2000px]">
	<Marquee {screenWidth} />
	<TopNavbar />

	<!-- FIXED BOTTOM NAV  -->
	<Navbar />

	<div class="mb-16">
		<Title />
		<PhysicsContainer />
	</div>

	<div class="mx-8 mt-32">
		<p class="text-dark font-poppins font-light text-xl md:text-3xl md:w-2/3">
			TAMUhack is a 24 hour event where teams create innovative software and hardware solutions to
			real-world problems in a community of mentorship. <a
				href="https://tamuhack.org/"
				class="underline">Learn more.</a
			>
		</p>
		<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-12">
			<div
				class="flex justify-center col-span-2 md:col-span-1 md:aspect-square min-h-[200px] rounded-xl bg-blue max-h-[275px]"
			>
				<Eyes />
			</div>
			<div class="h-full col-span-2 min-h-[200px] rounded-xl bg-[#1d1d1d] max-h-[275px]">
				<Prizes />
			</div>
			<div
				class="h-full col-span-2 row-span-2 min-h-[200px] rounded-xl bg-pink overflow-hidden max-h-[500px]"
			>
				<Phone />
			</div>
			<div
				class="h-full col-span-2 min-h-[200px] rounded-xl bg-[#1d1d1d] overflow-hidden max-h-[275px]"
			>
				<IEEE />
			</div>
		</div>
		<p class="text-dark font-poppins font-light text-md mt-12">
			<span class="font-bold">NOTE: </span> Acceptances will be sent out on a rolling basis. If you are
			accepted, you must check in before 11 AM or your acceptance will be forfeited. We will have a waitlist
			line for students who are not accepted. After 11AM, we will admit people from the waitlist line
			until the MSC capacity has been reached.
		</p>
	</div>
</div>

<div class="h-dscreen w-full font-poppins bg-[#E9E9E9] bg-opacity-50 max-w-[2000px]"></div>
