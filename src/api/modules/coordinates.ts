import {ID} from 'appwrite';

import {Coordinates} from '@/models/coordinates';

import {database} from '../config/client.config';
import {EnvConfig} from '../config/env.config';

export const getCoordinatesList = async (): Promise<Coordinates[]> => {
	const {documents: coordinatesList} =
		await database.listDocuments<Coordinates>(
			EnvConfig.databaseId,
			EnvConfig.coordinatesCollectionId
		);

	return coordinatesList;
};

export const deleteCoordinates = async (id: string): Promise<void> => {
	await database.deleteDocument(
		EnvConfig.databaseId,
		EnvConfig.coordinatesCollectionId,
		id
	);
};

export const createCoordinates = async (
	coordinatesData: Coordinates
): Promise<Coordinates> => {
	const {document: coordinates} = await database.createDocument<Coordinates>(
		EnvConfig.databaseId,
		EnvConfig.coordinatesCollectionId,
		ID.unique(),
		coordinatesData
	);

	return coordinates;
};
