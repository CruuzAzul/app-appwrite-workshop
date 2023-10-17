const {resolve} = require('path');

const {Permission, Role} = require('appwrite');
const {
	Client,
	Databases,
	ID,
	Storage,
	InputFile,
	Users,
} = require('node-appwrite');

const destinations = require('./data/destination.js');
const userList = require('./data/user.js');

require('dotenv').config({path: resolve(__dirname, '../.env.local')});

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
	.setKey(process.env.APPWRITE_API_KEY_SCRIPT);

const database = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);

const createDatabase = async (databaseName) => {
	try {
		return await database.get(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID);
	} catch (error) {
		return await database.create(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			databaseName
		);
	}
};

const createBucket = async (bucketName) => {
	try {
		return await storage.getBucket(
			process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID
		);
	} catch (error) {
		return await storage.createBucket(
			process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
			bucketName,
			[],
			false,
			true,
			undefined,
			['png']
		);
	}
};

const addFileToBucket = async (path, name) => {
	const file = InputFile.fromPath(path, name);

	return await storage.createFile(
		process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
		ID.unique(),
		file
	);
};

const createCollection = async (collectionName, collectionId) => {
	if (!collectionId) {
		console.error('No collection Id found');

		return;
	}

	try {
		await database.createCollection(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			collectionId,
			collectionName,
			[
				Permission.read(Role.any()),
				Permission.delete(Role.any()),
				Permission.create(Role.any()),
			]
		);
	} catch (error) {
		console.error(`${collectionName} already exist`);
	}
};

const createStringAttribute = async (key, collectionId) => {
	try {
		await database.createStringAttribute(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			collectionId,
			key,
			255,
			true
		);
	} catch (error) {
		console.error(
			`Attribute ${key} already exist on collection with id ${collectionId}`
		);
	}
};

const createUser = async (user) => {
	try {
		await users.create(
			ID.unique(),
			user.email,
			undefined,
			user.password,
			user.name
		);

		// TODO : Add preferences to user
	} catch (error) {
		console.error(`User ${user.name} already exist`);
	}
};

const createDestinationDocument = async (destination, flight) => {
	return await database.createDocument(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
		process.env.NEXT_PUBLIC_APPWRITE_DESTINATION_COLLECTION_ID,
		ID.unique(),
		{
			destination,
			flight,
		}
	);
};

const createDestinationCollection = async () => {
	await createCollection(
		'Destinations',
		process.env.NEXT_PUBLIC_APPWRITE_DESTINATION_COLLECTION_ID
	);
	await createStringAttribute(
		'destination',
		process.env.NEXT_PUBLIC_APPWRITE_DESTINATION_COLLECTION_ID
	);
	await createStringAttribute(
		'flight',
		process.env.NEXT_PUBLIC_APPWRITE_DESTINATION_COLLECTION_ID
	);

	await new Promise((r) => setTimeout(r, 5000));

	destinations.forEach((destination) => {
		createDestinationDocument(destination.name, destination.flight);
	});
};

const importData = async () => {
	await createDatabase('Workshop');
	await createBucket('Items');
	await createCollection(
		'Personal Data',
		process.env.NEXT_PUBLIC_APPWRITE_PERSONAL_DATA_COLLECTION_ID
	);
	await createDestinationCollection();

	await addFileToBucket('./script/assets/puzzle-1.png', 'puzzle-1.png');
	await addFileToBucket('./script/assets/puzzle-2.png', 'puzzle-2.png');
	await addFileToBucket('./script/assets/puzzle-3.png', 'puzzle-3.png');
	await addFileToBucket('./script/assets/puzzle-4.png', 'puzzle-4.png');
	await addFileToBucket(
		'./script/assets/puzzle-code-1234.png',
		'puzzle-code-1234.png'
	);
	await addFileToBucket('./script/assets/puzzle-end.png', 'puzzle-end.png');

	userList.forEach(async (user) => {
		await createUser(user);
	});
};

importData();
