<script lang="ts">
	import { IconHandClick } from '@tabler/icons-svelte';

	$: hovering = false;
</script>

<IconHandClick
	class={`absolute bottom-4 right-4 text-white w-5 h-5 z-20 transition-opacity ${
		hovering && 'opacity-20'
	}`}
/>
<div
	class="relative w-full h-full flex flex-col justify-center overflow-hidden"
	role="banner"
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
>
	<div class="w-full flex justify-center">
		<p
			id="prize-text"
			class="text-white font-poppins font-medium text-2xl sm:text-3xl opacity-90 z-10"
		>
			$6000+ in prizes
		</p>
	</div>
	<div id="square-container" class="absolute w-full h-full">
		<div class="group relative w-full h-full">
			<div
				class="floater absolute w-8 rounded-md aspect-square top-8 left-6 bg-blue -rotate-12 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
			<div
				class="floater absolute w-8 rounded-md aspect-square top-16 left-64 bg-pink -rotate-12 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
			<div
				class="floater absolute w-8 rounded-md aspect-square top-6 right-6 bg-blue -rotate-12 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
			<div
				class="floater absolute w-8 rounded-md bg-pink aspect-square bottom-12 right-32 -rotate-12 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
			<div
				class="floater absolute w-8 rounded-md bg-pink aspect-square bottom-12 left-12 -rotate-12 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
			<div
				class="floater absolute w-8 rounded-md bg-blue aspect-square bottom-6 left-32 rotate-45 hover:scale-125 group-hover:rotate-180 transition-all"
			></div>
		</div>
	</div>
</div>
