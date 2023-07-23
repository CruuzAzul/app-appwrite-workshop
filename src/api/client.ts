import {ID, Models} from 'appwrite';

import {Destination} from '@/models/destination';

import {account, database} from './appwrite';
import {Server} from './server';

export const getDestinations = async (): Promise<Destination[]> => {
	const {documents: destinations} = await database.listDocuments<Destination>(
		Server.databaseId,
		Server.destinationCollectionId
	);

	return destinations;
};

export const createAccount = async (
	email: string,
	password: string,
	name: string
): Promise<Models.User<Models.Preferences>> => {
	const session = await account.create(ID.unique(), email, password, name);

	await creatEmailSession(email, password);

	return session;
};

export const creatEmailSession = async (
	email: string,
	password: string
): Promise<Models.Session> => {
	await account.createEmailSession(email, password);

	return await account.getSession('current');
};
