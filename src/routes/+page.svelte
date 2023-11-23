<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import Title from '$lib/components/landing/Title.svelte';
	import PhysicsContainer from '$lib/components/landing/PhysicsContainer.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
</script>

<div class="flex flex-col h-dscreen w-full gap-32 font-poppins">
	<Navbar />
	<Marquee class="py-2 bg-black text-white font-semibold">
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
	</Marquee>
	<div class="h-1/2">
		<Title />
		<PhysicsContainer />
	</div>
</div>
