import {Client, Databases} from 'appwrite';

export const AppwriteClient = new Client()
	.setEndpoint(process.env.APPWRITE_ENDPOINT ?? '')
	.setProject(process.env.APPWRITE_PROJECT_ID ?? '');

export const database = new Databases(AppwriteClient);
