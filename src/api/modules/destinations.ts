import {Destination} from '@/models/destination';

import {database} from '../config/client.config';
import {EnvConfig} from '../config/env.config';

export const getDestinations = async (): Promise<Destination[]> => {
	const {documents: destinations} = await database.listDocuments<Destination>(
		EnvConfig.databaseId,
		EnvConfig.destinationCollectionId
	);

	return destinations;
};
