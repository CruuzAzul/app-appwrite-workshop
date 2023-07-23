import {Account, Client, Databases} from 'appwrite';

export const AppwriteClient = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '')
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '');

export const database = new Databases(AppwriteClient);

export const account = new Account(AppwriteClient);
