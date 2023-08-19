'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import {AppwriteException, ID, Models} from 'appwrite';
import {useRouter} from 'next/navigation';

import {account} from '@/api/config/appwrite.config';

export interface UserState {
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
	error: string | null;
	logout: () => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, name: string) => Promise<void>;
	socialLogin: (
		provider: string,
		successRedirectUrl: string,
		failureRedirectUrl: string
	) => Promise<void>;
}

const defaultState: UserState = {
	user: null,
	loading: true,
	error: null,
	logout: async () => {},
	register: async () => {},
	login: async () => {},
	socialLogin: async () => {},
};

const userContext = createContext<UserState>(defaultState);

export const UserProvider = ({children}: {children: ReactNode}) => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const router = useRouter();

	const loadAccount = async () => {
		try {
			const loadedAccount = await account.get();
			setUser(loadedAccount);
			setError('');
		} catch (error) {
			console.error(error);
			setError('No user logged in...');
		} finally {
			setLoading(false);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailSession(email, password);
			await loadAccount();
			router.push('/dashboard');
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			console.error(appwriteException.message);
		}
	};

	const register = async (email: string, password: string, name: string) => {
		try {
			const session = await account.create(ID.unique(), email, password, name);
			setUser(session);
			await login(email, password);
			router.push('/dashboard');
		} catch (error) {
			console.error(error);
		}
	};

	const socialLogin = async (
		provider: string,
		successRedirectUrl: string,
		failureRedirectUrl: string
	) => {
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
	};

	const logout = async () => {
		await account.deleteSession('current');
		setUser(null);
		router.push('/dashboard');
	};

	useEffect(() => {
		void loadAccount();
	}, []);

	return (
		<userContext.Provider
			value={{user, loading, error, logout, login, register, socialLogin}}
		>
			{children}
		</userContext.Provider>
	);
};

export const UseUser = () => {
	return useContext<UserState>(userContext);
};
