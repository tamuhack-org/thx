<script lang="ts">
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
		IconScale,
		IconMenu2,
		IconEdit,
		IconCalendar,
		IconUserQuestion,
		IconTrophy,
		IconCategory
	} from '@tabler/icons-svelte';
	import { animationDone } from '$lib/stores';

	let loaded = false;
	let open = false;
	$: active = open ? 'active' : '';

	onMount(() => {
		loaded = true;
	});
</script>

{#if $animationDone}
	<div
		class:opacity-0={!open}
		class:pointer-events-none={!open}
		class="fixed font-poppins w-full h-dscreen bg-[#2b2b2b] bg-opacity-70 backdrop-blur-sm top-0 left-0 flex sm:hidden text-2xl z-50 transition-opacity p-[6px] overflow-y-hidden"
	>
		<div
			class="flex flex-col rounded-xl bg-[#2b2b2b] w-full h-full text-white px-8 pt-8 pb-32 text-lg gap-6"
		>
			<a href="/" class="flex flex-row items-center gap-4 hover:opacity-75 transition-opacity">
				<IconEdit class="w-5 h-5" />
				<p>Apply</p>
			</a>
			<a href="/" class="flex flex-row items-center gap-4 hover:opacity-75 transition-opacity">
				<IconCalendar class="w-5 h-5" />
				<p>Schedule</p>
			</a>
			<a href="/" class="flex flex-row items-center gap-4 hover:opacity-75 transition-opacity">
				<IconUserQuestion class="w-5 h-5" />
				<p>FAQ</p>
			</a>
			<a href="/" class="flex flex-row items-center gap-4 hover:opacity-75 transition-opacity">
				<IconTrophy class="w-5 h-5" />
				<p>Prizes</p>
			</a>
			<span class="flex flex-row items-center gap-4 hover:opacity-75 transition-opacity">
				<IconCategory class="w-5 h-5" />
				<p>Resources</p>
			</span>
			<div class="flex flex-col gap-4 ml-2 font-light text-sm border-l border-[#626262] pl-4 py-1">
				<a href="/" class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity">
					<IconNotebook class="w-5 h-5" />
					<p>Hacker Guide</p>
				</a>
				<a
					href="https://discord.gg/VZyKP4JcC3"
					class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
				>
					<IconBrandDiscord class="w-5 h-5" />
					<p>Discord</p>
				</a>
				<a href="/" class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity">
					<IconBrandSpotify class="w-5 h-5" />
					<p>Spotify Queue</p>
				</a>
				<a href="/" class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity">
					<IconScale class="w-5 h-5" />
					<p>Devpost</p>
				</a>
				<a
					href="https://helpr.tamuhack.org"
					class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
				>
					<IconHelp class="w-5 h-5" />
					<p>HelpR</p>
				</a>
				<a
					href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*19bpx84*_ga*NDgxNjY1Mzk0LjE3MDIxODA5Njk.*_ga_E5KT6TC4TK*MTcwMjcwNzc3NC40LjAuMTcwMjcwNzc3NC4wLjAuMA.."
					class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
				>
					<IconLicense class="w-5 h-5" />
					<p>Code of Conduct</p>
				</a>
			</div>
		</div>
	</div>
	<div
		in:fly={{
			duration: 500,
			x: 0,
			y: 200,
			opacity: 1,
			delay: 3000
		}}
		class="flex w-full justify-center fixed bottom-8 font-poppins select-none z-50 pointer-events-none"
	>
		<button
			class="hidden sm:hidden justify-center rounded-xl bg-black bg-opacity-70 backdrop-blur-sm p-4 text-white z-50 pointer-events-auto"
			on:click={() => (open = !open)}
		>
			<IconMenu2 class="w-5 h-5" />
		</button>
		<div class="hidden sm:flex flex-col justify-center w-max pointer-events-auto">
			<div
				class:active
				class="flex flex-col items-center justify-center gap-[6px] bg-black bg-opacity-70 backdrop-blur-sm rounded-t-xl expand-container px-[6px]"
			>
				<div
					class="flex flex-row items-center bg-[#2b2b2b] mt-[6px] bg-opacity-70 px-6 backdrop-blur-sm rounded-lg w-full h-full text-white text-sm text-left gap-16"
				>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 transition-opacity duration-150"
					>
						<a href="/" class="flex flex-row items-center gap-2 opacity-75 transition-opacity">
							<IconNotebook class="w-5 h-5" />
							<p>Hacker Guide</p>
						</a>
						<a
							href="https://discord.gg/VZyKP4JcC3"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconBrandDiscord class="w-5 h-5" />
							<p>Discord</p>
						</a>
						<a href="/" class="flex flex-row items-center gap-2 opacity-75 transition-opacity">
							<IconBrandSpotify class="w-5 h-5" />
							<p>Spotify Queue</p>
						</a>
					</div>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 transition-opacity duration-150"
					>
						<a href="/" class="flex flex-row items-center gap-2 opacity-75 transition-opacity">
							<IconScale class="w-5 h-5" />
							<p>Devpost</p>
						</a>
						<a
							href="https://helpr.tamuhack.org"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconHelp class="w-5 h-5" />
							<p>HelpR</p>
						</a>
						<a
							href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*19bpx84*_ga*NDgxNjY1Mzk0LjE3MDIxODA5Njk.*_ga_E5KT6TC4TK*MTcwMjcwNzc3NC40LjAuMTcwMjcwNzc3NC4wLjAuMA.."
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconLicense class="w-5 h-5" />
							<p>Code of Conduct</p>
						</a>
					</div>
				</div>
			</div>
			<div
				class:rounded-t-xl={!open}
				class:transition-all={!open}
				class:delay-[200ms]={!open}
				class="flex flex-col bg-black bg-opacity-70 backdrop-blur-sm p-[6px] gap-[6px] rounded-b-xl"
			>
				<div class="flex items-center">
					<button
						class="flex flex-row justify-center items-center h-[60px] px-5 rounded-xl bg-black text-white font-semibold text-sm gap-2"
						on:click={() => (open = !open)}
					>
						<p>Resources</p>
						<span class:arrow-open={open} class:arrow-close={!open} class="flip">
							<IconChevronDown class="w-5 h-5" />
						</span>
					</button>
					<div class="flex p-[6px] gap-[6px] ml-[6px] bg-[#2b2b2b] rounded-lg scroll-smooth">
						<NavButton text="Schedule" />
						<NavButton text="FAQ" />
						<NavButton text="Prizes" />
						<CTANavButton text="Apply" link="https://register.tamuhack.com/" />
					</div>
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
		transition: height 0.25s ease;
		text-align: center;
	}

	.expand-container.active {
		height: 140px;
	}

	.arrow-close {
		animation: flip-icon 0.25s ease-in-out;
		transform: rotateX(180deg);
	}

	.arrow-open {
		animation: flip-icon-close 0.25s ease-in-out;
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
