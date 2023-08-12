import {Account, Client, Databases} from 'appwrite';

import {ServerConfig} from "./server.config";

export const AppwriteClient = new Client()
	.setEndpoint(ServerConfig.endpoint ?? '')
	.setProject(ServerConfig.projectId ?? '');

export const database = new Databases(AppwriteClient);

export const account = new Account(AppwriteClient);
