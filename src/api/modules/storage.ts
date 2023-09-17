import {AppwriteException, ID, Models} from 'appwrite';

import {storage} from '@/api/config/client.config';
import {EnvConfig} from '@/api/config/env.config';
import {FilePreview, FilesList} from '@/models/storage';

export const getStorageFiles = async (): Promise<FilesList> => {
	return await storage.listFiles(EnvConfig.storageBucketId);
};

export const uploadFiles = async (
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

export const getFilesForPreviews = ({
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
}: FilePreview): URL => {
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
};

export const getFileForView = (fileId: string): URL => {
	try {
		return storage.getFileView(EnvConfig.storageBucketId, fileId);
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};
