<script>
	export let text = 'Link';
	export let link = '#';
</script>

<a
	href={link}
	target="_blank"
	rel="noopener noreferrer"
	class="flex flex-col justify-center h-[60px] px-5 rounded-xl bg-black text-white font-semibold text-sm"
>
	{text}
</a>
