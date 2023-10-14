import {ID} from 'appwrite';

import {Destination, DestinationType} from '@/models/destination';
import {database} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

export const getDestinationList = async (): Promise<Destination[]> => {
	const {documents} = await database.listDocuments<Destination>(
		EnvConfig.databaseId,
		EnvConfig.destinationCollectionId
	);

	return documents;
};

export const createDestination = async (
	destinationData: DestinationType
): Promise<DestinationType> => {
	return await database.createDocument<Destination>(
		EnvConfig.databaseId,
		EnvConfig.destinationCollectionId,
		ID.unique(),
		destinationData
	);
};

export const deleteDestination = async (
	destinationId: string
): Promise<void> => {
	await database.deleteDocument(
		EnvConfig.databaseId,
		EnvConfig.destinationCollectionId,
		destinationId
	);
};
