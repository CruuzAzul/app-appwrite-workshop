import {AppwriteException} from 'appwrite';

import {Users} from '@/models/users';

export const getTravelersList = async (): Promise<Users> => {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Code for retrieving the list of all users.
		 * It looks like we need to return the whole list here
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
};
