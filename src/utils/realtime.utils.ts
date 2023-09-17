const enum EventName {
	CREATE = 'databases.*.collections.*.documents.*.create',
	UPDATE = 'databases.*.collections.*.documents.*.update',
	DELETE = 'databases.*.collections.*.documents.*.delete',
}

export const enum EventType {
	CREATE = 'create',
	UPDATE = 'update',
	DELETE = 'delete',
}

export const getEventType = ({events}: {events: string[]}): EventType => {
	if (events.includes(EventName.CREATE)) {
		return EventType.CREATE;
	}

	if (events.includes(EventName.UPDATE)) {
		return EventType.UPDATE;
	}

	if (events.includes(EventName.DELETE)) {
		return EventType.DELETE;
	}

	throw new Error('Unknown event type');
};
