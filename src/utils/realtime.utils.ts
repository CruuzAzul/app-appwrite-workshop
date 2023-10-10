const enum DatabaseEventName {
	CREATE = 'databases.*.collections.*.documents.*.create',
	UPDATE = 'databases.*.collections.*.documents.*.update',
	DELETE = 'databases.*.collections.*.documents.*.delete',
}

const enum StorageEventName {
	CREATE = 'buckets.*.files.*.create',
	DELETE = 'buckets.*.files.*.delete',
}

export const enum EventType {
	CREATE = 'create',
	UPDATE = 'update',
	DELETE = 'delete',
}

export const getEventType = ({events}: {events: string[]}): EventType => {
	if (
		events.includes(DatabaseEventName.CREATE) ||
		events.includes(StorageEventName.CREATE)
	) {
		return EventType.CREATE;
	}

	if (events.includes(DatabaseEventName.UPDATE)) {
		return EventType.UPDATE;
	}

	if (
		events.includes(DatabaseEventName.DELETE) ||
		events.includes(StorageEventName.DELETE)
	) {
		return EventType.DELETE;
	}

	throw new Error('Unknown event type');
};
