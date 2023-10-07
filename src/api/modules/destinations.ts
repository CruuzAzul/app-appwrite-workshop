import {ID} from 'appwrite';

import {Destination, DestinationType} from '@/models/destination';

import {database} from '../config/client.config';
import {EnvConfig} from '../config/env.config';

export const getDestinationList = async (): Promise<Destination[]> => {
	const {documents: destinationList} =
		await database.listDocuments<Destination>(
			EnvConfig.databaseId,
			EnvConfig.destinationCollectionId
		);

	return destinationList;
};

export const createDestination = async (
	destinationData: DestinationType
): Promise<DestinationType> => {
	const {document: destination} = await database.createDocument<Destination>(
		EnvConfig.databaseId,
		EnvConfig.destinationCollectionId,
		ID.unique(),
		destinationData
	);

	return destination;
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
