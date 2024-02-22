import {AppwriteException} from 'appwrite';

import {Coordinate, Coordinates} from '@/models/coordinates';

export const getCoordinatesList = async (): Promise<Coordinates[]> => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Code for retrieving the list of contact details.
		 * It seems that we need to return the
		 * documents renamed to `coordinatesList` here
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};

export const deleteCoordinates = async (id: string): Promise<void> => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Code for deleting contact details
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};

export const createCoordinates = async (
	coordinatesData: Coordinate
): Promise<Coordinate> => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Code for retrieving the list of coordinates.
		 * It seems that we need to return the
		 * documents renamed to `coordinates` here
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};
