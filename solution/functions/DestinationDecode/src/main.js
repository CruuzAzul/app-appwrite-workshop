/* eslint-disable import/no-anonymous-default-export */
import { Client, Databases } from 'node-appwrite';

const decryptMap = {
  IITK2E: 'Nantes',
  OEJ0DJ: 'Toulouse',
  MEO312: 'Strasbourg',
  BA342H: 'Lille',
  MP0909: 'Paris',
  JI93JZ: 'Lyon',
  QAPZE3: 'Grenoble',
  O0121S: 'Rennes',
  POA123: 'Nice',
  MLMLM2: 'Marseille',
};

export const decrypt = (textToDecrypt) => {
  return decryptMap[textToDecrypt];
};

export default async ({ req, res, log, error }) => {
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
