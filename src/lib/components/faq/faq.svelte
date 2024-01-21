<script lang="ts">
	import Section from './section.svelte';
	import content from './content.json';
</script>

<div class="w-full lg:container">
	<div class="flex">
		<div class="w-full lg:w-3/4">
			<h1 id="faq-title" class="font-semibold text-7xl text-transparent">FAQ</h1>
			<div id="faq-description" class="mt-10 text-white text-xl md:text-2xl">
				<p>Everything you need to know about participating in TAMUhack.</p>
				<p class="mt-4 md:mt-0">
					Can’t find what you’re looking for? <a class="underline" href="mailto:hello@tamuhack.com"
						>Contact Our Team.</a
					>
				</p>
				<!-- <div class="flex gap-4 mt-8">
					<a
						href="#"
						class="px-4 py-1 font-poppins text-base text-dark border-2 bg-pink rounded-full"
					>
						General
					</a>
				</div> -->
			</div>
		</div>
		<div class="w-0 lg:w-1/4 mr-10">
			<img src="/assets/faq.gif" alt="happy computer" />
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
		-webkit-text-stroke-color: #ffffff;
		opacity: 0.7;
	}
</style>
