const {resolve} = require('path');

const {Client, Databases, Storage, Users} = require('node-appwrite');

require('dotenv').config({path: resolve(__dirname, '../.env.local')});

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
	.setKey(process.env.APPWRITE_API_KEY_SCRIPT);

const database = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);

const resetData = async () => {
	database.delete(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID);
	storage.deleteBucket(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID);
	users.list().then((userList) => {
		userList.users.forEach((user) => {
			users.delete(user.$id);
		});
	});
};

resetData();
