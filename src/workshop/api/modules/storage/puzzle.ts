import {Models} from 'appwrite';

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
    /**
		 * ----------------------------------------
		 * HERE : Appwrite error handling here
		 * ----------------------------------------
		 */
	}
};

export const getPuzzlePiecesForPreviews = ({fileId}: FilePreview): URL => {
	/**
	 * ----------------------------------------
	 * HERE : Retrieving the src link to display the image
	 * ----------------------------------------
	 */
};
