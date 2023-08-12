export const ServerConfig = {
	endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '',
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '',
	databaseId: process.env.APPWRITE_DATABASE_ID ?? '',
	destinationCollectionId: process.env.APPWRITE_DESTINATION_COLLECTION_ID ?? '',
};
