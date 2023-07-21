import {Destination} from '@/models/destination';

import {database} from './appwrite';
import {Server} from './server';

export const getDestinations = async (): Promise<Destination[]> => {
	const {documents: destinations} = await database.listDocuments<Destination>(
		Server.databaseId,
		Server.destinationCollectionId
	);

	return destinations;
};
