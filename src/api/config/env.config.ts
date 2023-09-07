export const EnvConfig = {
	endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '',
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '',
	storageBucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID ?? '',
	databaseId: process.env.APPWRITE_DATABASE_ID ?? '',
	destinationCollectionId: process.env.APPWRITE_DESTINATION_COLLECTION_ID ?? '',
	apiKey: process.env.APPWRITE_API_KEY,
};
