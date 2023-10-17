import {Client, Users} from 'node-appwrite';

import {EnvConfig} from './env.config';

export const AppwriteClient = new Client()
	.setEndpoint(EnvConfig.endpoint ?? '')
	.setProject(EnvConfig.projectId ?? '')
	.setKey(EnvConfig.apiKeyUsers ?? '');

export const users = new Users(AppwriteClient);
