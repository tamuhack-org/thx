<script lang="ts">
	let resources = [
		// {
		// 	name: 'Hacker Guide',
		// 	link: 'https://hackers.tamuhack.com/'
		// },
		// {
		// 	name: 'Spotify Queue',
		// 	link: '/'
		// },
		// {
		// 	name: 'Devpost',
		// 	link: '/'
		// },
		{
			name: 'HelpR',
			link: 'https://helpr.tamuhack.org/'
		},
		{
			name: 'Code of Conduct',
			link: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
		}
	];

	let socials = [
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/tamuhack'
		},
		{
			name: 'TikTok',
			link: 'https://www.tiktok.com/@tamuhack'
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/company/tamuhack'
		},
		{
			name: 'Discord',
			link: 'https://discord.gg/VZyKP4JcC3'
		}
	];

	let otherHackathons = [
		{
			name: 'TAMU Datathon',
			link: 'https://tamudatathon.com/'
		},
		{
			name: 'HackTX',
			link: 'https://hacktx.com/'
		},
		{
			name: 'HackUTD',
			link: 'https://hackutd.co/'
		},
		{
			name: 'HackUNT',
			link: 'https://www.unthackathon.com/'
		},
		{
			name: 'RowdyHacks',
			link: 'https://rowdyhacks.org/'
		},
		{
			name: 'HackRice',
			link: 'https://hack.rice.edu/'
		}
	];

	let workshops = [
		{
			name: 'Coming Soon!',
			link: '/'
		}
		// {
		// 	name: 'Intro to Web Dev',
		// 	link: '/'
		// }
		// {
		// 	name: 'Intro to Git',
		// 	link: '/'
		// }
	];
</script>

<div class="lg:flex lg:justify-between items-center px-8 lg:px-8 text-dark font-poppins">
	<div class="lg:text-start text-center">
		<p class="mb-0 font-poppins text-2xl font-semibold">Sign up to our newsletter</p>
		<p class="font-poppins font-light">
			Stay connected! Sign up for our mailing list for events, updates, and more.
		</p>
	</div>
	<form
		action="https://tamuhack.us9.list-manage.com/subscribe/post?u=ba74e26a78411ab40af6384c5&amp;id=2f4969eb6d"
		method="post"
		id="mc-embedded-subscribe-form"
		name="mc-embedded-subscribe-form"
		target="_blank"
		novalidate
	>
		<div
			class="w-full lg:flex-none flex flex-row max-[400px]:flex-col max-[400px]:justify-stretch justify-center items-stretch gap-3 lg:gap-5 py-4"
		>
			<label for="mce-EMAIL" style="display:none" class="border">Email Address </label>
			<input
				type="text"
				value=""
				name="EMAIL"
				class="2xl:w-96 w-full min-[401px]:w-64 px-4 py-2 rounded-md border-dark font-light border"
				id="mce-EMAIL"
				placeholder="Enter your email address"
			/>
			<button class="clear">
				<input
					type="submit"
					value="Subscribe"
					name="subscribe"
					id="mc-embedded-subscribe"
					class="px-4 py-2 w-full min-[401px]:w-auto rounded-md bg-dark hover:bg-white border border-dark text-white hover:text-dark font-normal cursor-pointer"
				/>
			</button>
		</div>
		<!-- Response divs  -->
		<!-- <div id="mce-responses" class="clear">
          <div
            class="response"
            id="mce-error-response"
            style="display: none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display: none"
          ></div>
        </div> -->
		<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		<div class="hidden" aria-hidden="true">
			<input type="text" name="b_43a795784ca963e25903a0da6_9937fe4fc5" tabindex="-1" value="" />
		</div>
	</form>
</div>
<!-- End Mailchimp sign up -->

<div class="lg:flex justify-between px-8 my-8 lg:my-16 text-dark">
	<div class="lg:w-1/5">
		<p class="font-poppins font-semibold text-3xl mb-8">TAMUhack X</p>
		<p class="font-poppins font-base text-xl mb-8">Celebrating 10 years of TAMUhack!</p>
		<div id="3d-friend" class="mb-8 hidden xl:block absolute right-5 bottom-5"></div>
	</div>
	<div class="flex flex-wrap justify-start lg:justify-end flex-grow gap-12">
		<div>
			<p class="font-light font-poppins text-base mb-2">Hacker Resources</p>
			{#each resources as resource}
				<div class="mb-2">
					<a
						href={resource.link}
						target="_blank"
						rel="noreferrer noopener"
						class="font-poppins font-medium text-lg hover:text-black transition-colors"
						>{resource.name}</a
					>
				</div>
			{/each}
		</div>
		<div>
			<p class="font-light font-poppins text-base mb-2">Socials</p>
			{#each socials as social}
				<div class="mb-2">
					<a
						href={social.link}
						target="_blank"
						rel="noreferrer noopener"
						class="font-poppins font-medium text-lg hover:text-black transition-colors"
						>{social.name}</a
					>
				</div>
			{/each}
		</div>
		<div>
			<p class="font-light font-poppins text-base mb-2">Other Hackathons</p>
			{#each otherHackathons as hackathon}
				<div class="mb-2">
					<a
						href={hackathon.link}
						target="_blank"
						rel="noreferrer noopener"
						class="font-poppins font-medium text-lg hover:text-black transition-colors"
						>{hackathon.name}</a
					>
				</div>
			{/each}
		</div>
		<div>
			<p class="font-light font-poppins text-base mb-2">Workshops</p>
			{#each workshops as workshop}
				<div class="mb-2">
					<a
						href={workshop.link}
						target="_blank"
						rel="noreferrer noopener"
						class="font-poppins font-medium text-lg hover:text-black transition-colors"
						>{workshop.name}</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="bottom-0">
	<div class="h-[3px] mx-8 bg-dark rounded-xl bg-opacity-5"></div>
	<p class="mx-8 py-3 text-sm text-dark font-light">
		Interested in sponsoring? Reach out to us at <a
			class="underline"
			href="mailto:sponsor@tamuhack.com">sponsor@tamuhack.com</a
		>.
	</p>
</div>
