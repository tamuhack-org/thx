<script lang="ts">
	import Title from '$lib/components/landing/Title.svelte';
	import PhysicsContainer from '$lib/components/landing/PhysicsContainer.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Marquee from '$lib/components/marquee/Marquee.svelte';

	let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="flex flex-col h-dscreen w-full gap-32 font-poppins">
	<Navbar />
	<Marquee {screenWidth} />
	<div class="h-1/2">
		<Title />
		<PhysicsContainer />
	</div>
</div>
<div class="mt-32 h-screen bg-red-500"></div>
