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
		IconEdit,
		IconCalendar,
		IconUserQuestion,
		IconTrophy,
		IconCategory,
		IconBrandGit,
		IconWorld,
		IconCpu,
		IconExclamationCircle,
		IconUsers
	} from '@tabler/icons-svelte';
	import { animationDone } from '$lib/stores';
	import { sectionInView } from '$lib/stores';

	let loaded = false;
	let open = false;
	$: active = open ? 'active' : '';

	onMount(() => {
		$sectionInView = '';
		loaded = true;
	});
</script>

{#if $animationDone}
	<div
		in:fly={{
			duration: 500,
			x: 0,
			y: 200,
			opacity: 1,
			delay: 100
		}}
		class="flex w-full justify-center fixed bottom-8 font-poppins select-none z-50 pointer-events-none"
	>
		<!-- MOBILE -->
		<div
			class="flex flex-col sm:hidden justify-center z-50 pointer-events-auto border border-opacity-25 rounded-xl overflow-hidden"
		>
			<div
				class:active
				class="flex flex-col items-center justify-center gap-[6px] bg-black bg-opacity-70 backdrop-blur-sm rounded-t-xl expand-container px-[6px]"
			>
				<div
					class="flex flex-col justify-center items-start mt-[6px] bg-[#2b2b2b] bg-opacity-70 px-6 backdrop-blur-sm rounded-lg w-full h-full text-white text-sm text-left gap-8"
				>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-4 transition-opacity duration-150 justify-between"
					>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 opacity-75 transition-opacity"
						>
							<IconNotebook class="w-5 h-5" />
							<p>Hacker Guide</p>
						</a>
						<a
							href="https://discord.gg/VZyKP4JcC3"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconBrandDiscord class="w-5 h-5" />
							<p>Discord</p>
						</a>
						<a
							href="https://tamuhack.org/devpost"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 transition-opacity"
						>
							<IconScale class="w-5 h-5" />
							<p>Devpost</p>
						</a>
						<a
							href="https://helpr.tamuhack.org"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconHelp class="w-5 h-5" />
							<p>HelpR</p>
						</a>
						<a
							href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*19bpx84*_ga*NDgxNjY1Mzk0LjE3MDIxODA5Njk.*_ga_E5KT6TC4TK*MTcwMjcwNzc3NC40LjAuMTcwMjcwNzc3NC4wLjAuMA.."
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconLicense class="w-5 h-5" />
							<p>Code of Conduct</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/17tD4eOPL54v6YPEZE57gkOrtEo9LA_r4U0bAOBRGRSo/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconBrandGit class="w-5 h-5" />
							<p>Intro to Git</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/16moIOAhsbH5qlyeWv0xfH73XT_hk0TJ-b6xct3njT5U/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 transition-opacity"
						>
							<IconWorld class="w-5 h-5" />
							<p>Intro to Web Dev</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/1PGyzuwHUsFabeBiMDdyGySel6rtKnuKERMko81i1Lb0/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 transition-opacity"
						>
							<IconCpu class="w-5 h-5" />
							<p>Intro to Hardware</p>
						</a>
						<a
							href="http://tamuhack.org/misconduct"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 transition-opacity"
						>
							<IconExclamationCircle class="w-5 h-5" />
							<p>Misconduct Reporting</p>
						</a>
						<a
							href="https://tamuhack.org/team-formation"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 transition-opacity"
						>
							<IconUsers class="w-5 h-5" />
							<p>Team Formation</p>
						</a>
					</div>
				</div>
			</div>
			<div
				class:rounded-t-xl={!open}
				class:transition-all={!open}
				class:delay-[200ms]={!open}
				class="flex items-center gap-4 rounded-b-xl bg-black bg-opacity-70 backdrop-blur-sm p-4 text-white"
			>
				<button
					on:click={() => (open = !open)}
					class="p-1 bg-white rounded-sm text-black border border-white"
				>
					<IconCategory class="w-5 h-5" />
				</button>
				<a
					href="#schedule"
					class={`p-1 border ${
						$sectionInView === 'Schedule' ? 'border-gray-400' : 'border-transparent'
					} rounded-sm transition-all`}
				>
					<IconCalendar class="w-5 h-5" />
				</a>
				<a
					href="#prizes-section"
					class={`p-1 border ${
						$sectionInView === 'Prizes' ? 'border-gray-400' : 'border-transparent'
					} rounded-sm transition-all`}
				>
					<IconTrophy class="w-5 h-5" />
				</a>
				<a
					href="#faq"
					class={`p-1 border ${
						$sectionInView === 'FAQ' ? 'border-gray-400' : 'border-transparent'
					} rounded-sm transition-all`}
				>
					<IconUserQuestion class="w-5 h-5" />
				</a>
				<!-- <button
					on:click={() => {
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					class="p-1 border border-transparent rounded-sm"
				>
					<IconEdit class="w-5 h-5" />
				</button> -->
				<div class="p-1 border border-transparent rounded-sm opacity-75">
					<IconEdit class="w-5 h-5" />
				</div>
			</div>
		</div>
		<!-- DESKTOP -->
		<div
			class="hidden sm:flex flex-col justify-center w-max pointer-events-auto border border-white border-opacity-25 rounded-xl overflow-hidden"
		>
			<div
				class:active
				class="flex flex-col items-center justify-center gap-[6px] bg-black bg-opacity-70 backdrop-blur-sm rounded-t-xl expand-container px-[6px]"
			>
				<div
					class="flex flex-row items-center bg-[#2b2b2b] mt-[6px] bg-opacity-70 px-6 py-6 backdrop-blur-sm rounded-lg w-full h-full text-white text-sm text-left gap-16"
				>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 justify-start h-full transition-opacity duration-150"
					>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 opacity-75 transition-opacity"
						>
							<IconNotebook class="w-5 h-5" />
							<p>Hacker Guide</p>
						</a>
						<a
							href="https://discord.gg/VZyKP4JcC3"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconBrandDiscord class="w-5 h-5" />
							<p>Discord</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/17tD4eOPL54v6YPEZE57gkOrtEo9LA_r4U0bAOBRGRSo/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconBrandGit class="w-5 h-5" />
							<p>Intro to Git</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/1PGyzuwHUsFabeBiMDdyGySel6rtKnuKERMko81i1Lb0/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconCpu class="w-5 h-5" />
							<p>Intro to Hardware</p>
						</a>
						<a
							href="https://tamuhack.org/team-formation"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconUsers class="w-5 h-5" />
							<p>Team Formation</p>
						</a>
					</div>
					<div
						class:opacity-100={open}
						class:opacity-0={!open}
						class="flex flex-col gap-3 justify-start h-full transition-opacity duration-150"
					>
						<a
							href="https://tamuhack.org/devpost"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconScale class="w-5 h-5" />
							<p>Devpost</p>
						</a>
						<a
							href="https://helpr.tamuhack.org"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconHelp class="w-5 h-5" />
							<p>HelpR</p>
						</a>
						<a
							href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*19bpx84*_ga*NDgxNjY1Mzk0LjE3MDIxODA5Njk.*_ga_E5KT6TC4TK*MTcwMjcwNzc3NC40LjAuMTcwMjcwNzc3NC4wLjAuMA.."
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconLicense class="w-5 h-5" />
							<p>Code of Conduct</p>
						</a>
						<a
							href="https://docs.google.com/presentation/d/16moIOAhsbH5qlyeWv0xfH73XT_hk0TJ-b6xct3njT5U/edit?usp=sharing"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconWorld class="w-5 h-5" />
							<p>Intro to Web Dev</p>
						</a>
						<a
							href="http://tamuhack.org/misconduct"
							target="_blank"
							rel="noreferrer noopener"
							class="flex flex-row items-center gap-2 hover:opacity-75 transition-opacity"
						>
							<IconExclamationCircle class="w-5 h-5" />
							<p>Misconduct Reporting</p>
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
						<NavButton text="Schedule" link="#schedule" />
						<NavButton text="Prizes" link="#prizes-section" />
						<NavButton text="FAQ" link="#faq" />
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
		height: 200px;
	}

	@media (max-width: 640px) {
		.expand-container.active {
			height: 400px;
		}
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
