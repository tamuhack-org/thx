<script lang="ts">
	import Section from './section.svelte';
	import content from './content.json';
</script>

<div class="w-full lg:container">
	<div class="flex">
		<div class="w-full lg:w-3/4">
			<h1 id="faq-title" class="font-semibold text-7xl text-white lg:">FAQ</h1>
			<div class="mt-10 text-[#192F6D] text-2xl">
				<p>Everything you need to know about participating in TAMUhack.</p>
				<p class="">
					Can’t find what you’re looking for? <a class="underline" href="mailto:hello@tamuhack.com"
						>Contact Our Team.</a
					>
				</p>
			</div>
		</div>
		<div class="w-0 lg:w-1/4">
			<img src="/assets/faqgif.png" alt="happy computer" />
		</div>
	</div>
	<div class="mt-10">
		{#each content as section}
			<div class="mb-12 lg:mb-16">
				<Section title={section.title} questions={section.questions} />
			</div>
		{/each}
	</div>
</div>

<style>
	#faq-title {
		-webkit-text-stroke-width: 4px;
		-webkit-text-stroke-color: #000044;
		opacity: 0.5;
	}
</style>
