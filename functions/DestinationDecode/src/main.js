/* eslint-disable import/no-anonymous-default-export */
import { Client, Databases } from 'node-appwrite';

import { decrypt } from './decrypt.js';

export default async ({ req, res }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);

  database.updateDocument(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_DESTINATION_COLLECTION_ID,
    req.body.$id,
    {
      destination: decrypt(req.body.destination),
    }
  );

  return res.send();
};
