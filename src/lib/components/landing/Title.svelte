<script>
	import { onMount } from 'svelte';

	export let title = 'TAMUHACK X';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<div class="flex flex-col justify-end">
	<div class="flex justify-center">
		{#if loaded}
			<div class="">
        <h2 class="text-center font-light my-8">Presenting our tenth anniversary</h2>
				<h1
					class="text-[50px] text-blue-400 font-semibold tracking-wide font-poppins"
				>
					{title}
				</h1>
			</div>
		{/if}
	</div>
</div>

<style>
  h1 {
    font-size: clamp(42px,-6.5915492958px + 9.7183098592vw,180px);
    line-height: 100%;
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
    color: #222;
    font-family: 'Poppins', sans-serif;
  }
</style>
