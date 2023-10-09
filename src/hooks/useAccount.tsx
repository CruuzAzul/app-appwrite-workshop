'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import {AppwriteException} from 'appwrite';
import {useRouter} from 'next/navigation';

import {defaultState} from '@/constants/defaultUserState';
import {ROUTES} from '@/routing/routes.config';
import {AccountState} from '@/types/AccountState.type';
import {UserType} from '@/types/UserHook.type';
import {account} from '@/workshop/api/config/client.config';
import {
	login,
	logout,
	register,
	socialLogin,
} from '@/workshop/api/modules/account/account';

const accountContext = createContext<AccountState>(defaultState);

export const AccountProvider = ({children}: {children: ReactNode}) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | undefined>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

  const appLogin = async (email: string, password: string) => {
		try {
			await login(email, password);
			await loadAccount();
			router.push(ROUTES.dashboard);
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			console.error(appwriteException.message);
		}
	};

  const appRegister = async (email: string, password: string, name: string) => {
		try {
			const session = await register(email, password, name, appLogin);
			setUser(session);
			router.push(ROUTES.dashboard);
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			console.error(appwriteException.message);
		}
	};

	const appLogout = async () => {
		await logout();
		setUser(null);
		router.push(ROUTES.dashboard);
	};

	const appSocialLogin = async (
		provider: string,
		successRedirectUrl: string,
		failureRedirectUrl: string
	) => {
		try {
			await socialLogin(provider, successRedirectUrl, failureRedirectUrl);
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
			value={{
				user,
				loading,
				error,
				logout: appLogout,
				login: appLogin,
				register: appRegister,
				socialLogin: appSocialLogin,
			}}
		>
			{children}
		</accountContext.Provider>
	);
};

export const UseAccount = () => {
	return useContext<AccountState>(accountContext);
};
