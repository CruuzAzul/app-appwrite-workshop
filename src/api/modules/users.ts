import {users} from '@/api/config/server.config';
import {Users} from '@/models/users';

export const getUsersList = async (): Promise<Users> => {
	const {users: usersList} = await users.list<Users>();

	return usersList;
};
