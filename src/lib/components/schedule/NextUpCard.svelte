<script lang="ts">
	export let title: string;
	export let description: string;
	export let time: string;

	export let active = false;
	export let hidden = false;
</script>

<div
	class={`${active ? 'flex' : 'hidden lg:flex opacity-50'} ${
		hidden ? 'invisible' : 'visible'
	} justify-between min-w-[300px] w-[400px] py-4 px-4 border-2 border-dark border-opacity-25 rounded-md`}
>
	<div class="flex flex-col gap-0 w-2/3">
		<p
			class="text-xl font-medium text-dark font-poppins whitespace-nowrap text-ellipsis overflow-hidden"
		>
			{title}
		</p>
		<p class="text-lg text-dark font-light font-poppins">{description}</p>
	</div>
	<div class="flex justify-end w-1/3">
		<p class="text-lg text-dark font-light font-poppins">{time}</p>
	</div>
</div>
