<script lang="ts">
	const imagesLg = [
		{
			src: 'aa.png',
			name: 'American Airlines',
			href: 'https://www.aa.com/homePage.do'
		},
		{
			src: 'sandia.png',
			name: 'Sandia National Laboratories',
			href: 'https://www.sandia.gov/'
		}
	];
	const imagesMd = [
		{
			src: 'phillips-66.png',
			name: 'Phillips 66',
			href: 'https://www.phillips66.com/'
		},
		{
			src: 'ieee.png',
			name: 'IEEE TAMU',
			href: 'https://ieee-tamu.org/'
		}
	];
	const imagesSm = [
		{
			src: 'l3harris.png',
			name: 'L3Harris',
			href: 'https://www.l3harris.com/'
		},
		{
			src: 'gm.png',
			name: 'General Motors',
			href: 'https://www.gm.com/'
		},
		{
			src: 'pimco.png',
			name: 'PIMCO',
			href: 'https://www.pimco.com/'
		},
		{
			src: 'usaa.png',
			name: 'USAA',
			href: 'https://www.usaa.com/'
		},
		{
			src: 'baker-hughes.png',
			name: 'Baker Hughes',
			href: 'https://www.bakerhughes.com/'
		},
		{
			src: 'jpmorgan.png',
			name: 'JPMorgan Chase & Co.',
			href: 'https://www.jpmorganchase.com/'
		},
		{
			src: 'frogslayer.png',
			name: 'FrogSlayer',
			href: 'https://frogslayer.com/'
		},
		{
			src: 'texas-instruments.png',
			name: 'Texas Instruments',
			href: 'https://www.ti.com/'
		}
	];
	const partners = [
		{
			src: 'sec.png',
			name: "Texas A&M Student Engineers' Council",
			href: 'https://sec.tamu.edu/'
		},
		{
			src: 'tamu.png',
			name: 'Texas A&M University',
			href: 'https://www.tamu.edu/'
		}
	];
</script>

<div class="flex flex-col w-full items-center justify-center text-center py-32">
	<h1
		id="thank-you"
		class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-dark leading-relaxed"
	>
		Thank you to our sponsors...
	</h1>
</div>
<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-16">
	{#each imagesLg as image}
		<a
			href={image.href}
			target="_blank"
			rel="noreferrer noopener"
			class="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 col-span-2"
		>
			<img class="w-4/5" src="/assets/sponsors/{image.src}" alt={image.name} />
		</a>
	{/each}
	{#each imagesMd as image}
		<a
			href={image.href}
			target="_blank"
			rel="noreferrer noopener"
			class="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 col-span-2"
		>
			<img
				class={image.name === 'Phillips 66' ? 'w-[30%] sm:w-1/4' : 'w-2/3'}
				src="/assets/sponsors/{image.src}"
				alt={image.name}
			/>
		</a>
	{/each}
	{#each imagesSm as image}
		<a
			href={image.href}
			target="_blank"
			rel="noreferrer noopener"
			class="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 col-span-1"
		>
			<img
				class={image.name === 'USAA' ? 'w-1/2 sm:w-1/3' : 'w-4/5 sm:w-3/4'}
				src="/assets/sponsors/{image.src}"
				alt={image.name}
			/>
		</a>
	{/each}
</div>
<div class="flex flex-col w-full items-center justify-center py-32 text-center">
	<h1
		id="thank-you"
		class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-dark leading-relaxed"
	>
		and partners...
	</h1>
</div>
<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
	{#each partners as image}
		<a
			href={image.href}
			target="_blank"
			rel="noreferrer noopener"
			class="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 col-span-1"
		>
			<img class="w-1/2 md:w-1/3" src="/assets/sponsors/{image.src}" alt={image.name} />
		</a>
	{/each}
</div>
