<script lang="ts">
	type ScheduledEvent = {
		event_name: string;
		id: string;
		time: string;
		day: string;
		date: string;
		description: string;
		tags?: string[];
	};

	export let event: ScheduledEvent;
	export let active = false;
</script>

<div class={active ? 'scheduleRowActive' : 'scheduleRow'}>
	<div class="flex justify-between">
		<p class="font-poppins font-medium text-lg text-dark">{event.time}</p>
		<p class="font-poppins font-medium text-lg text-dark">{event.event_name}</p>
	</div>
	<p class="font-poppins font-light text-end text-dark">{event.description}</p>
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
