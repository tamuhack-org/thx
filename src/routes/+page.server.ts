export async function load() {

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
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
	
			// Convert UTC to Central Time
			const centralTimeOptions = { timeZone: 'America/Chicago' }; // Replace with your desired time zone
			const centralTimeA = dateA.toLocaleString('en-US', centralTimeOptions);
			const centralTimeB = dateB.toLocaleString('en-US', centralTimeOptions);
	
			// Compare the converted times
			return new Date(centralTimeA).getTime() - new Date(centralTimeB).getTime();
		});

		events.forEach((event) => {
			const date = new Date(event.date);
			event.day = date.toLocaleDateString('en-US', {
				day: 'numeric',
				timeZone: 'America/Chicago'
			});
			event.time = date.toLocaleTimeString('en-US', {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true
			});

			if (event.description != '') {
				//event.description is a string with the format "description | tags", where tags is a comma separated list of tags
				const eventInfo = event.description.split('|');
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

  const events = await getEvents();
  const currentEventIndex = getCurrentEventIndex(events);

	return {
		events: events,
		currentEventIndex: currentEventIndex,
	};
}