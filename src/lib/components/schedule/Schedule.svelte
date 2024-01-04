<script lang="ts">
	import { onMount } from 'svelte';
	import NextUpCard from './NextUpCard.svelte';

	let events: ScheduledEvent[] = [];
	let filters = ['Required', 'Company Events', 'Food', 'Workshops', 'For Fun'];
	let activeFilters: string[] = [];

	let currentEventIndex = 0;

	type ScheduledEvent = {
		event_name: string;
		id: string;
		time: string;
		day: string;
		date: string;
		description: string;
		tags?: string[];
	};

	//fetch and format schedule data
	const getEvents = async () => {
		const res = await fetch('https://hum-console.vercel.app/api/th24').then((res) => res.json());

		const events: ScheduledEvent[] = res.Items.sort((a: ScheduledEvent, b: ScheduledEvent) => {
			let dateA = new Date(a.date).getTime();
			let dateB = new Date(b.date).getTime();
			return dateA - dateB;
		});

		events.forEach((event) => {
			const date = new Date(event.date);
			event.day = date.toLocaleDateString('en-US', {
				day: 'numeric'
			});
			event.time = date.toLocaleTimeString('en-US', {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true
			});

			if (event.description != '') {
				//event.description is a string with the format "description | tags", where tags is a comma separated list of tags
				let eventInfo = event.description.split('|');
				event.description = eventInfo[0].trim();

				if (eventInfo.length > 1) {
					event.tags = eventInfo[1].split(',').map((tag) => tag.trim());
				}
			}
		});

		return events;
	};

	const getCurrentEventIndex = (events: ScheduledEvent[]) => {
		const now = new Date().getTime();
		let index = 0;
		for (let i = 0; i < events.length; i++) {
			const event = events[i];
			const eventTime = new Date(event.time).getTime();
			if (eventTime > now) {
				index = i;
				break;
			}
		}
		return index;
	};

	const handleFilter = (filter: string) => {
		if (activeFilters.includes(filter)) {
			activeFilters.splice(activeFilters.indexOf(filter), 1);
			activeFilters = activeFilters;
		} else {
			activeFilters = [...activeFilters, filter];
		}

		console.log(activeFilters);
	};

	onMount(async () => {
		events = await getEvents();
		currentEventIndex = getCurrentEventIndex(events);
	});
</script>

<p id="schedule" class="text-center font-medium text-[30px] text-dark font-poppins">Next Up</p>
<div class="mx-auto w-[50px] h-1 bg-dark rounded-full"></div>

<div class="flex justify-center gap-4 mt-4 md:mt-8 overflow-scroll">
	<NextUpCard
		title={events[currentEventIndex - 1]?.event_name || 'Loading'}
		description={events[currentEventIndex - 1]?.description || ''}
		time={events[currentEventIndex - 1]?.time || ''}
		hidden={currentEventIndex <= 0}
	/>
	<NextUpCard
		title={events[currentEventIndex]?.event_name || 'Loading'}
		description={events[currentEventIndex]?.description || ''}
		time={events[currentEventIndex]?.time || 'Loading'}
		active
	/>
	<NextUpCard
		title={events[currentEventIndex + 1]?.event_name || 'Loading'}
		description={events[currentEventIndex + 1]?.description || ''}
		time={events[currentEventIndex + 1]?.time || ''}
		hidden={currentEventIndex > events.length - 1}
	/>
</div>

<div class="flex flex-col lg:flex-row justify-center gap-4 mt-8">
	<div class="relative">
		<div class="sticky top-0 lg:translate-y-[56px] lg:w-[300px] max-w-[400px] mx-auto">
			<div class="p-4 border border-dark rounded-md">
				<p class="text-xl text-dark font-poppins mb-4">Filters</p>
				<div class="flex flex-wrap gap-x-2">
					{#each filters as filter}
						<button
							on:click={() => handleFilter(filter)}
							class={`${
								activeFilters.includes(filter)
									? 'border-[#FF5799] bg-[#FF5799] text-white'
									: 'text-dark border-dark'
							} text-md font-poppins mb-4 border border-opacity-20 rounded-md p-2 transition-all`}
							>{filter}</button
						>
					{/each}
				</div>
			</div>
			<p class="font-poppins text-dark">*More events coming soon</p>
			<img src="/assets/scheduley.png" alt="" class="hidden lg:flex mt-8" />
		</div>
	</div>
	<div class="lg:w-1/2">
		<p class="text-3xl text-[#FF5799] font-poppins font-semibold mb-4">Day 1: Saturday</p>
		<div class="rounded-md border border-dark p-4">
			{#each events.filter((event) => event.day == '27') as event, index}
				<div class="group">
					<div
						class={activeFilters.some((item) => event.tags?.includes(item)) ||
						activeFilters.length == 0
							? 'scheduleRowActive'
							: 'scheduleRow'}
					>
						<div class="flex justify-between">
							<p class="font-poppins font-medium text-lg text-dark w-1/3 flex-shrink-0">
								{event.time}
							</p>
							<p class="font-poppins font-medium text-lg text-dark w-2/3 text-end">
								{event.event_name}
							</p>
						</div>

						<div class="flex justify-end">
							<p class="font-poppins font-light text-end text-dark">{event.description}</p>
						</div>
					</div>
					{#if index !== events.filter((event) => event.day == '27').length - 1}
						<div
							class="w-full h-[2px] bg-dark rounded-full bg-opacity-20 group-hover:bg-opacity-80 transition-all"
						/>
					{/if}
				</div>
			{/each}
		</div>
		<p class="text-3xl text-[#FF5799] font-poppins font-semibold mb-4 mt-8">Day 2: Sunday</p>
		<div class="rounded-md border border-dark p-4">
			{#each events.filter((event) => event.day == '28') as event, index}
				<div class="group">
					<div
						class={activeFilters.some((item) => event.tags?.includes(item)) ||
						activeFilters.length == 0
							? 'scheduleRowActive'
							: 'scheduleRow'}
					>
						<div class="flex justify-between">
							<p class="font-poppins font-medium text-lg text-dark w-1/3 flex-shrink-0">
								{event.time}
							</p>
							<p class="font-poppins font-medium text-lg text-dark w-2/3 text-end">
								{event.event_name}
							</p>
						</div>

						<div class="flex justify-end">
							<p class="font-poppins font-light text-end text-dark">{event.description}</p>
						</div>
					</div>
					{#if index !== events.filter((event) => event.day == '28').length - 1}
						<div
							class="w-full h-[2px] bg-dark rounded-full bg-opacity-20 group-hover:bg-opacity-80 transition-all"
						/>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.scheduleRow {
		padding: 8px;
		transition: all 0.2s;
		opacity: 0.25;
	}

	.scheduleRowActive {
		padding: 8px;
		transition: all 0.2s;
	}
</style>
