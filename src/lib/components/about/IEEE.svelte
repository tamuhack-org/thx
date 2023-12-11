<script lang="ts">
	import { onMount } from 'svelte';
</script>

<div id="ieee-container" class="flex flex-col justify-center w-full h-full overflow-hidden">
	<div class="flex justify-center">
		<p
			id="prize-text"
			class="absolute text-white text-center font-poppins font-light text-md md:text-lg opacity-80 -translate-y-8"
		>
			TAMUhack + IEEE
		</p>

		<p id="prize-text" class="text-white font-poppins font-medium text-xl md:text-3xl opacity-90">
			Redefining Hardware Hacks
		</p>
	</div>
</div>

<style>
	@keyframes float {
		0% {
			transform: translate(0);
		}

		20% {
			transform: translate(-2px, 2px);
		}

		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}

		80% {
			transform: translate(2px, -2px);
		}

		100% {
			transform: translate(0);
		}
	}
</style>
