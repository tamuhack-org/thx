<script lang="ts">
	import Title from '$lib/components/landing/Title.svelte';
	import PhysicsContainer from '$lib/components/landing/PhysicsContainer.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Marquee from '$lib/components/marquee/Marquee.svelte';
	import TopNavbar from '$lib/components/common/TopNavbar.svelte';

	let screenWidth: number;

</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="flex flex-col h-dscreen w-full font-poppins bg-[#E9E9E9] bg-opacity-50">
	<Navbar />
	<Marquee {screenWidth} />
	<TopNavbar />

	<div class="mb-16">
		<Title />
		<PhysicsContainer />
	</div>
</div>
<div class="h-screen bg-[#E9E9E9] bg-opacity-50"></div>
