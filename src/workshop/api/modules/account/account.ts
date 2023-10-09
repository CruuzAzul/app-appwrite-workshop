import {AppwriteException, ID} from 'appwrite';

import {UserType} from '@/types/UserHook.type';
import {account} from '@/workshop/api/config/client.config';

export async function login(email: string, password: string): Promise<void> {
	try {
		await account.createEmailSession(email, password);
	} catch (error) {
		const appwriteException = error as AppwriteException;
		console.error(appwriteException.message);
	}
}

export async function register(
	email: string,
	password: string,
	name: string,
	login: (email: string, password: string) => Promise<void>
): Promise<UserType | undefined> {
	try {
		const session = await account.create(ID.unique(), email, password, name);
		await login(email, password);

		return session;
	} catch (error) {
		const appwriteException = error as AppwriteException;
		console.error(appwriteException.message);
	}
}

export async function logout() {
	await account.deleteSession('current');
}

export async function socialLogin(
  provider: string,
  successRedirectUrl: string,
  failureRedirectUrl: string
) {
  try {
    account.createOAuth2Session(
      provider,
      successRedirectUrl,
      failureRedirectUrl
    );
  } catch (error: any) {
    const appwriteException = error as AppwriteException;
    console.error(appwriteException.message);
  }
}
