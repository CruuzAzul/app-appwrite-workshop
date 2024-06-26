'use client';

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

import {AppwriteException, OAuthProvider} from 'appwrite';
import {usePathname, useRouter} from 'next/navigation';

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
	const currentRoute = usePathname();
	const [user, setUser] = useState<UserType | undefined>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>('');

	const appLogin = async (email: string, password: string) => {
		try {
			await login(email, password);
			await loadAccount();
			const loggedUser = await account.get();
			if (loggedUser) {
				router.push(ROUTES.dashboard);
			}
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			setError(appwriteException.message.toString());
			console.error(appwriteException);
		}
	};

	const appRegister = async (email: string, password: string, name: string) => {
		try {
			const session = await register(email, password, name, appLogin);
			if (session) {
				router.push(ROUTES.login);
			}
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			setError(appwriteException.message.toString());
			console.error(appwriteException);
		}
	};

	const appLogout = async () => {
		await logout();
		setUser(null);
		router.push(ROUTES.dashboard);
	};

	const appSocialLogin = async (
		provider: OAuthProvider,
		successRedirectUrl: string,
		failureRedirectUrl: string
	) => {
		try {
			await socialLogin(provider, successRedirectUrl, failureRedirectUrl);
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			setError(appwriteException.message.toString());
			console.error(appwriteException.message);
		}
	};

	const loadAccount = async () => {
		try {
			const loadedAccount = await account.get();
			setUser(loadedAccount);
			setError('');
		} catch (error) {
			const appwriteException = error as AppwriteException;
			console.error(appwriteException.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		void loadAccount();
	}, []);

	useEffect(() => {
		setError('');
	}, [currentRoute]);

	const contextState = useMemo(
		() => ({
			user,
			loading,
			error,
			logout: appLogout,
			login: appLogin,
			register: appRegister,
			socialLogin: appSocialLogin,
		}),
		[user, error, loading]
	);

	return (
		<accountContext.Provider value={contextState}>
			{children}
		</accountContext.Provider>
	);
};

export const UseAccount = () => {
	return useContext<AccountState>(accountContext);
};
