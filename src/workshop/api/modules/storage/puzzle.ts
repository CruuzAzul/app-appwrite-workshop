import {AppwriteException, ID, Models} from 'appwrite';

import {FilePreview, FilesList} from '@/models/storage';
import {storage} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

export const getPuzzlePieces = async (): Promise<FilesList> => {
  try {
    return await storage.listFiles(EnvConfig.storageBucketId);
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
				return await storage.createFile(
					EnvConfig.storageBucketId,
					ID.unique(),
					file
				);
			})
		);
	} catch (error: any) {
    throw new AppwriteException(error);
	}
};

export const getPuzzlePiecesForPreviews = ({
	fileId,
	width,
	height,
	gravity,
	quality,
	borderWidth,
	borderColor,
	borderRadius,
	opacity,
	rotation,
	background,
	output,
}: FilePreview): URL | undefined => {
  try {
		return storage.getFilePreview(
			EnvConfig.storageBucketId,
			fileId,
			width,
			height,
			gravity,
			quality,
			borderWidth,
			borderColor,
			borderRadius,
			opacity,
			rotation,
			background,
			output
		);
	} catch (error: any) {
    throw new AppwriteException(error);
	}
};
