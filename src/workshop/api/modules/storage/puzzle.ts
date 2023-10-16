import {AppwriteException, Models} from 'appwrite';

import {FilePreview, FilesList} from '@/models/storage';

export const getPuzzlePieces = async (): Promise<FilesList> => {
	/**
	 * ----------------------------------------
	 * HERE : Code for retrieving the list of files
	 * ----------------------------------------
	 */
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
		const appwriteException = error as AppwriteException;
		console.error(appwriteException.message);
	}
};

export const getPuzzlePiecesForPreviews = ({fileId}: FilePreview): URL => {
	/**
	 * ----------------------------------------
	 * HERE : Retrieving the src link to display the image
	 * ----------------------------------------
	 */
};
