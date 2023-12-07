<script>
	import CTANavButton from './CTANavButton.svelte';
	import NavButton from './NavButton.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import {
		IconBrandDiscord,
		IconBrandSpotify,
		IconChevronDown,
		IconHelp,
		IconLicense,
		IconNotebook,
		IconScale
	} from '@tabler/icons-svelte';
	// import ResourcesButton from './ResourcesButton.svelte';

	let loaded = false;
	let open = false;
	$: active = open ? 'active' : '';
	$: showText = open;

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
		<div class="flex flex-col justify-center w-max">
			<div
				class:active
				class="flex flex-col items-center justify-center gap-[6px] bg-black bg-opacity-70 backdrop-blur rounded-t-xl expand-container px-[6px]"
			>
				<div
					class="flex flex-row items-center bg-[#3e3e3e] mt-[6px] bg-opacity-75 px-6 backdrop-blur rounded-lg w-full h-full text-white text-sm text-left gap-16"
				>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 transition-opacity duration-300"
					>
						<span class="flex flex-row gap-2">
							<IconNotebook class="w-5 h-5" />
							<a href="/">Hacker Guide</a>
						</span>
						<span class="flex flex-row gap-2">
							<IconBrandDiscord class="w-5 h-5" />
							<a href="/">Discord</a>
						</span>
						<span class="flex flex-row gap-2">
							<IconBrandSpotify class="w-5 h-5" />
							<a href="/">Spotify Queue</a>
						</span>
					</div>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 transition-opacity duration-300"
					>
						<span class="flex flex-row gap-2">
							<IconScale class="w-5 h-5" />
							<a href="/">Devpost</a>
						</span>
						<span class="flex flex-row gap-2">
							<IconHelp class="w-5 h-5" />
							<a href="/">HelpR</a>
						</span>
						<span class="flex flex-row gap-2">
							<IconLicense class="w-5 h-5" />
							<a href="/">Code of Conduct</a>
						</span>
					</div>
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
						class="flex flex-row justify-center items-center h-[60px] px-5 rounded-xl bg-black text-white font-semibold text-sm gap-2"
						on:click={() => (open = !open)}
					>
						<p>Resources</p>
						<span class:arrow-open={open} class:arrow-close={!open} class="flip">
							<IconChevronDown class="w-5 h-5" />
						</span>
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
		height: 140px;
	}

	.arrow-open {
		animation: flip-icon 0.5s ease-in-out;
		transform: rotateX(180deg);
	}

	.arrow-close {
		animation: flip-icon-close 0.5s ease-in-out;
		transform: rotateX(0deg);
	}

	@keyframes flip-icon {
		0% {
			transform: rotateX(0deg);
		}
		100% {
			transform: rotateX(180deg);
		}
	}

	@keyframes flip-icon-close {
		0% {
			transform: rotateX(180deg);
		}
		100% {
			transform: rotateX(0deg);
		}
	}
</style>
