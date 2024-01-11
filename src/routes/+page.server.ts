export async function load() {

  console.log("server running")

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
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
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

  console.log(events)
  console.log(currentEventIndex)

	return {
		events: events,
		currentEventIndex: currentEventIndex,
	};
}