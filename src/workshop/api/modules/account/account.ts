import {AppwriteException} from 'appwrite';

import {UserType} from '@/types/UserHook.type';

export async function login(email: string, password: string) {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Session creation code (login)
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
}

export async function register(
	email: string,
	password: string,
	name: string,
	login: (email: string, password: string) => Promise<void>
): Promise<UserType> {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Account creation code (register)
		 * It looks like we need to return a `session` here
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
}

export async function logout() {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Session logout code
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
}

export async function socialLogin(
	provider: string,
	successRedirectUrl: string,
	failureRedirectUrl: string
) {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Session connection code (social login)
		 * ----------------------------------------
		 */
	} catch (error: any) {
		throw new AppwriteException(error);
	}
}
