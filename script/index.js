const {
	Client,
	Databases,
	ID,
	Storage,
	InputFile,
	Users,
} = require('node-appwrite');

require('dotenv').config();

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
	.setKey(process.env.APPWRITE_API_KEY);

const database = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);

const createDatabase = async () => {
	const existingDatabase = database.get(process.env.APPWRITE_DATABASE_ID);

	if (existingDatabase) {
		return;
	}

	return await database.create(
		process.env.APPWRITE_DATABASE_ID,
		'databaseName'
	);
};

const createBucket = async () => {
	const existingBucket = storage.getBucket(process.env.APPWRITE_BUCKET_ID);

	if (existingBucket) {
		return;
	}

	return await storage.createBucket(
		process.env.APPWRITE_BUCKET_ID,
		'Bucket',
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
		process.env.APPWRITE_BUCKET_ID,
		ID.unique(),
		file
	);
};

const createCollection = async () => {
	const existingCollection = database.getCollection(
		process.env.APPWRITE_DATABASE_ID,
		process.env.APPWRITE_DESTINATION_COLLECTION_ID
	);

	if (existingCollection) {
		return;
	}

	return await database.createCollection(
		process.env.APPWRITE_DATABASE_ID,
		process.env.APPWRITE_DESTINATION_COLLECTION_ID,
		'Solutions'
	);
};

const createUser = async (name) => {
	return await users.create(ID.unique(), undefined, undefined, undefined, name);
};

const createDestination = async () => {
	const destinationName = process.argv[2];

	if (!destinationName) return;

	return await database.createDocument(
		process.env.APPWRITE_DATABASE_ID,
		process.env.APPWRITE_DESTINATION_COLLECTION_ID,
		ID.unique(),
		{
			name: destinationName,
		}
	);
};

const importData = async () => {
	await createDatabase();
	await createCollection();
	await createBucket();
	await addFileToBucket();
	['tessa', 'aditya', 'eldad', 'heroes'].forEach(async (name) => {
		await createUser(name);
	});
};

// createDestination().then(console.log);
importData();
