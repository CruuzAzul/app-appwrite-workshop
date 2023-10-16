import {AppwriteException, Models} from 'appwrite';

import {FilePreview, FilesList} from '@/models/storage';

export const getPuzzlePieces = async (): Promise<FilesList> => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Code for retrieving the list of files
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};

export const uploadImageKey = async (
	files: File[]
): Promise<Awaited<Models.File>[]> => {
	try {
		return await Promise.all(
			files.map(async (file) => {
				/**
				 * ----------------------------------------
				 * HERE : Code for uploading a file
				 * ----------------------------------------
				 */
			})
		);
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};

export const getPuzzlePiecesForPreviews = ({fileId}: FilePreview): URL => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Retrieving the src link to display the image
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};
