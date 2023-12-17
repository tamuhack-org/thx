<script>
	export let text = 'link';
	export let link = '/#under-construction';
</script>

<a
	href={link}
	class="flex flex-col justify-center h-[48px] px-4 rounded-lg border border-[#4e4e4e] hover:border-gray-300 text-[#e1e1e1] font-normal text-sm cursor-pointer transition-all"
>
	{text}
</a>
