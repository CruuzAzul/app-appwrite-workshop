'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import {AppwriteException, ID} from 'appwrite';
import {useRouter} from 'next/navigation';

import {defaultState} from '@/constants/defaultUserState';
import {ROUTES} from '@/routing/routes.config';
import {AccountState} from '@/types/AccountState.type';
import {UserType} from '@/types/UserHook.type';
import {account} from '@/workshop/api/config/client.config';

const accountContext = createContext<AccountState>(defaultState);

export const AccountProvider = ({children}: {children: ReactNode}) => {
  const router = useRouter();
	const [user, setUser] = useState<UserType>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailSession(email, password);
			await loadAccount();
			router.push(ROUTES.dashboard);
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
			router.push(ROUTES.dashboard);
		} catch (error) {
			console.error(error);
		}
	};

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
    router.push(ROUTES.dashboard);
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

	useEffect(() => {
		void loadAccount();
	}, []);

	return (
		<accountContext.Provider
			value={{user, loading, error, logout, login, register, socialLogin}}
		>
			{children}
		</accountContext.Provider>
	);
};

export const UseAccount = () => {
	return useContext<AccountState>(accountContext);
};
