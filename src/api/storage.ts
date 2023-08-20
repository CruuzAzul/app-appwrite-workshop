import {AppwriteException, ID} from 'appwrite';

import {storage} from '@/api/config/appwrite.config';
import {ServerConfig} from '@/api/config/server.config';
import {FilePreview, FilesList} from '@/models/storage';

export const getStorageFiles = async (): Promise<FilesList> => {
	return await storage.listFiles(ServerConfig.storageBucketId);
};

export const uploadFiles = async (files: File[]): Promise<void> => {
	await Promise.all(
		files.map(async (file) => {
			await storage.createFile(ServerConfig.storageBucketId, ID.unique(), file);
		})
	).catch((reason) => {
		throw new AppwriteException(reason);
	});
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
		ServerConfig.storageBucketId,
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
