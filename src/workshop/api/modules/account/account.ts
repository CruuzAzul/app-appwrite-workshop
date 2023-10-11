import {UserType} from '@/types/UserHook.type';

export async function login(email: string, password: string): Promise<void> {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Session creation code (login)
		 * ----------------------------------------
		 */
	} catch (error) {
		/**
		 * ----------------------------------------
		 * HERE : Appwrite error handling here
		 * ----------------------------------------
		 */
	}
}

export async function register(
	email: string,
	password: string,
	name: string,
	login: (email: string, password: string) => Promise<void>
): Promise<UserType | undefined> {
	try {
		/**
		 * ----------------------------------------
		 * HERE : Account creation code (register)
		 * It looks like we need to return a `session` here
		 * ----------------------------------------
		 */
	} catch (error) {
		/**
		 * ----------------------------------------
		 * HERE : Appwrite error handling here
		 * ----------------------------------------
		 */
	}
}

export async function logout() {
	/**
	 * ----------------------------------------
	 * HERE : Session logout code
	 * ----------------------------------------
	 */
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
		/**
		 * ----------------------------------------
		 * HERE : Appwrite error handling here
		 * ----------------------------------------
		 */
	}
}
