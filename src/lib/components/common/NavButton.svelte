<script lang="ts">
	import { sectionInView } from '$lib/stores';

	export let text = 'link';
	export let link = '/#under-construction';
</script>

<a
	href={link}
	class={`flex flex-col justify-center h-[48px] px-4 rounded-lg border  hover:border-gray-300 text-[#e1e1e1] font-normal text-sm cursor-pointer transition-all ${
		$sectionInView === text ? 'border-gray-300' : 'border-[#4e4e4e]'
	}`}
>
	{text}
</a>
