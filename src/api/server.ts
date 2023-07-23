export const Server = {
	endpoint: process.env.APPWRITE_ENDPOINT ?? '',
	projectId: process.env.APPWRITE_PROJECT_ID ?? '',
	databaseId: process.env.APPWRITE_DATABASE_ID ?? '',
	destinationCollectionId: process.env.APPWRITE_DESTINATION_COLLECTION_ID ?? '',
};
