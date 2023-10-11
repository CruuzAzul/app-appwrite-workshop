/**
 * No changes may be made to this file
 */

export const EnvConfig = {
	endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '',
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '',
	storageBucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID ?? '',
	coordinatesCollectionId:
		process.env.NEXT_PUBLIC_APPWRITE_COORDINATES_COLLECTION_ID ?? '',
	cluesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_CLUES_COLLECTION_ID ?? '',
	destinationCollectionId:
		process.env.NEXT_PUBLIC_APPWRITE_DESTINATION_COLLECTION_ID ?? '',
	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? '',
	apiKey: process.env.APPWRITE_API_KEY,
};
