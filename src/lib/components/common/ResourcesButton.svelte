<script lang="ts">
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';

	let open = false;
	let resources = [
		{
			name: 'Link 1',
			link: '#'
		},
		{
			name: 'Link 2',
			link: '#'
		}
	];
</script>

<div class="flex flex-col items-stretch relative">
	{#if open}
		<div
			class="absolute bottom-[4.5rem] flex flex-col w-full bg-black rounded-xl p-5 text-white font-semibold text-sm gap-4"
		>
			{#each resources as r}
				<a href={r.link}>
					{r.name}
				</a>
			{/each}
		</div>
	{/if}
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
