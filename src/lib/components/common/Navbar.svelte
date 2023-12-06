<script>
	import CTANavButton from './CTANavButton.svelte';
	import NavButton from './NavButton.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';
	import ResourcesButton from './ResourcesButton.svelte';

	let loaded = false;
	let open = false;
	$: active = open ? 'active' : '';

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
			opacity: 1,
			delay: 500
		}}
		class="flex w-full justify-center fixed bottom-8 font-poppins"
	>
		<div class="flex flex-col justify-center">
			<div
				class:active
				class="flex flex-col items-center justify-center gap-[6px] bg-black bg-opacity-70 backdrop-blur rounded-t-xl text-white expand-container px-[6px]"
			>
				<div
					class="flex flex-col bg-[#3e3e3e] mx-[100px] mt-[6px] bg-opacity-75 backdrop-blur rounded-lg w-full h-full"
				>
					<h1>Hacker Guide</h1>
					<h1>Discord</h1>
					<h1>Spotify Queue</h1>
					<h1>Devpost</h1>
					<h1>HelpR</h1>
				</div>
			</div>
			<div
				class:rounded-t-xl={!open}
				class:transition-all={!open}
				class:delay-[450ms]={!open}
				class="flex flex-col bg-black bg-opacity-70 backdrop-blur p-[6px] gap-[6px] rounded-b-xl"
			>
				<div class="flex items-center">
					<CTANavButton text="Apply" />
					<div
						class="flex p-[6px] gap-[6px] mx-[6px] bg-[#3e3e3e] bg-opacity-75 backdrop-blur rounded-lg"
					>
						<NavButton text="Schedule" />
						<NavButton text="FAQ" />
						<NavButton text="Prizes" />
					</div>
					<button
						class="flex flex-row justify-center items-center h-[60px] px-5 rounded-xl bg-black text-white font-semibold text-sm"
						on:click={() => (open = !open)}
					>
						<p>Resources</p>
						{#if open}
							<IconChevronUp class="w-5 h-5 ml-2" />
						{:else}
							<IconChevronDown class="w-5 h-5 ml-2" />
						{/if}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.expand-container {
		position: relative;
		overflow: hidden;
		height: 0px;
		transition: height 0.5s ease;
		text-align: center;
	}

	.expand-container.active {
		height: 150px;
	}
</style>
