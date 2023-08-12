import {Destination} from '@/models/destination';

import {database} from './config/appwrite.config';
import {ServerConfig} from './config/server.config';

export const getDestinations = async (): Promise<Destination[]> => {
	const {documents: destinations} = await database.listDocuments<Destination>(
		ServerConfig.databaseId,
		ServerConfig.destinationCollectionId
	);

	return destinations;
};
