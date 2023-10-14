import {Models} from 'appwrite';

export type AccountState = {
	user: Models.User<Models.Preferences> | null | undefined;
	loading: boolean;
	error?: string;
	logout: () => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, name: string) => Promise<void>;
	socialLogin: (
		provider: string,
		successRedirectUrl: string,
		failureRedirectUrl: string
	) => Promise<void>;
};
