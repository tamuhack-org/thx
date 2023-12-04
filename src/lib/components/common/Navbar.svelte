<script>
	import CTANavButton from './CTANavButton.svelte';
	import NavButton from './NavButton.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<div
		in:fly={{
			duration: 500,
			x: 0,
			y: 200,
			opacity: 1
		}}
		class="w-screen fixed bottom-8 font-poppins"
	>
		<div class="flex justify-center">
			<div
				class="flex items-center bg-black bg-opacity-70 backdrop-blur gap-[2px] px-[6px] rounded-xl"
			>
				<CTANavButton text="Apply" />
				<div
					class="flex p-[6px] m-[6px] gap-[6px] bg-[#3e3e3e] bg-opacity-75 backdrop-blur rounded-lg"
				>
					<NavButton text="Schedule" />
					<NavButton text="FAQ" />
					<NavButton text="Prizes" />
				</div>
				<CTANavButton text="Resources" />
			</div>
		</div>
	</div>
{/if}
