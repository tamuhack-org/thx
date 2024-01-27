<script>
	export let text = 'Link';
	export let link = '#';
</script>

<!-- 
<a
	href={link}
	target="_blank"
	rel="noopener noreferrer"
	class="flex flex-col justify-center h-[48px] px-4 rounded-lg border bg-white text-black border-[#4e4e4e] hover:border-white font-normal text-sm cursor-pointer transition-all"
>
	{text}
</a> -->
<div
	class="flex flex-col justify-center h-[48px] px-4 rounded-lg border bg-white text-black border-[#4e4e4e] font-normal text-sm pointer-events-none transition-all opacity-75"
>
	{text}
</div>
