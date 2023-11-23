<script>
	export let text = 'link';
	export let link = '#';
</script>

<a
	href={link}
	class="flex flex-col justify-center h-[48px] px-4 rounded-md border border-[#4e4e4e] hover:border-gray-300 text-[#e1e1e1] font-light text-sm font-sans cursor-pointer transition-all"
>
	{text}
</a>
