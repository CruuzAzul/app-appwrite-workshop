import {Account, Client, Databases} from 'appwrite';

import {Server} from "./server";

export const AppwriteClient = new Client()
	.setEndpoint(Server.endpoint ?? '')
	.setProject(Server.projectId ?? '');

export const database = new Databases(AppwriteClient);

export const account = new Account(AppwriteClient);
