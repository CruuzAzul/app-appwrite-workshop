import {AppwriteException} from "appwrite";

import {Users} from '@/models/users';
import {users} from '@/workshop/api/config/server.config';

export const getTravelersList = async (): Promise<Users> => {
  try {
    const {users: usersList} = await users.list<Users>();

    return usersList;
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
