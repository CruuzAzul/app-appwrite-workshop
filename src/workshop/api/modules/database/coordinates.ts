import {AppwriteException, ID} from 'appwrite';

import {Coordinate, Coordinates} from '@/models/coordinates';

import {database} from '../../config/client.config';
import {EnvConfig} from '../../config/env.config';

export const getCoordinatesList = async (): Promise<Coordinates[]> => {
  try {
    const {documents} = await database.listDocuments<Coordinates>(
      EnvConfig.databaseId,
      EnvConfig.coordinatesCollectionId
    );

    return documents;
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};

export const deleteCoordinates = async (id: string): Promise<void> => {
  try {
    await database.deleteDocument(
      EnvConfig.databaseId,
      EnvConfig.coordinatesCollectionId,
      id
    );
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};

export const createCoordinates = async (
	coordinatesData: Coordinate
): Promise<Coordinate> => {
  try {
    return await database.createDocument<Coordinates>(
      EnvConfig.databaseId,
      EnvConfig.coordinatesCollectionId,
      ID.unique(),
      coordinatesData
    );
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
