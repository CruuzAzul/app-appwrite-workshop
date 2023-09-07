import {Account, Client, Databases, Storage} from 'appwrite';

import {EnvConfig} from './env.config';

export const AppwriteClient = new Client()
	.setEndpoint(EnvConfig.endpoint ?? '')
	.setProject(EnvConfig.projectId ?? '');

export const database = new Databases(AppwriteClient);

export const account = new Account(AppwriteClient);

export const storage = new Storage(AppwriteClient);
