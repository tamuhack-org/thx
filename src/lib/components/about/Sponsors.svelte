<script>
	import { Confetti } from 'svelte-confetti';
</script>

<div class="relative w-full h-full flex flex-col justify-center overflow-hidden">
	<div class="w-full flex justify-center">
		<Confetti
			infinite
			x={[-0.5, -0.25]}
			y={[0.25, 0.5]}
			delay={[500, 2000]}
			colorArray={['var(--primary)']}
		/>

		<p
			id="prize-text"
			class="text-white font-poppins font-medium text-2xl sm:text-3xl opacity-90 z-10"
		>
			🥳 10th Anniversary 🎉
		</p>
		<Confetti
			infinite
			x={[0.25, 0.5]}
			y={[0.25, 0.5]}
			delay={[500, 2000]}
			colorArray={['var(--secondary)']}
		/>
	</div>
</div>

<style>
	:global(:root) {
		--primary: #fc94bb;
		--secondary: #39bfda;
	}
</style>
