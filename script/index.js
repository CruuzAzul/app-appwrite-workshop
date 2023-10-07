const {Permission, Role} = require('appwrite');
const {
	Client,
	Databases,
	ID,
	Storage,
	InputFile,
	Users,
} = require('node-appwrite');

const destination = require('./data/destination.js');

require('dotenv').config();

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
	.setKey(process.env.APPWRITE_API_KEY);

const database = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);

const createDatabase = async (databaseName) => {
	const existingDatabase = database.get(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
	);

	if (existingDatabase) {
		return;
	}

	return await database.create(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
		databaseName
	);
};

const createBucket = async (bucketName) => {
	const existingBucket = storage.getBucket(
		process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID
	);

	if (existingBucket) {
		return;
	}

	return await storage.createBucket(
		process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
		bucketName,
		[],
		false,
		true,
		undefined,
		['svg']
	);
};

const addFileToBucket = async () => {
	const file = InputFile.fromPath(
		'./script/assets/square-logo-pink.svg',
		'file.svg'
	);

	return await storage.createFile(
		process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
		ID.unique(),
		file
	);
};

const createCollection = async (collectionName, collectionId) => {
	const currentCollectionId = collectionId ?? ID.unique();

	try {
		await database.createCollection(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			currentCollectionId,
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
	return await database.createStringAttribute(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
		collectionId,
		key,
		255,
		true
	);
};

const createUser = async (name) => {
	return await users.create(ID.unique(), undefined, undefined, undefined, name);
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

	destinations.forEach((destination) => {
		createDestinationDocument(destination.name, destination.flight);
	});
};

const importData = async () => {
	await createDatabase('Workshop');
	await createCollection('Clues', process.env.APPWRITE_CLUES_COLLECTION_ID);
	await createDestinationCollection();
	await createBucket('Items');

	await addFileToBucket();
	['tessa', 'aditya', 'eldad', 'heroes'].forEach(async (name) => {
		await createUser(name);
	});
};

importData();
