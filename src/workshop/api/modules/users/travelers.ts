import {Users} from '@/models/users';
import {users} from '@/workshop/api/config/server.config';

export const getTravelersList = async (): Promise<Users> => {
	const {users: usersList} = await users.list<Users>();

	return usersList;
};
