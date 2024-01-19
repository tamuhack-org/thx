<script lang="ts">
	import Question from './Question.svelte';

	export let title: string;
	export let questions: { question: string; answers: string[] }[] = [];
</script>

<div class="flex flex-col lg:flex-row">
	<div class="w-full mb-10 lg:mb-0 lg:w-1/4">
		<h2 id="new-section-title" class="sticky top-8 font-semibold text-4xl text-pink">
			{title}
		</h2>
	</div>
	<div class="w-full lg:w-3/4">
		{#each questions as item (item.question)}
			<Question {item} />
		{/each}
	</div>
</div>
