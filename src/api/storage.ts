import {AppwriteException, ID} from 'appwrite';

import {storage} from '@/api/config/appwrite.config';
import {ServerConfig} from '@/api/config/server.config';
import {FilesList} from '@/models/storage';

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
