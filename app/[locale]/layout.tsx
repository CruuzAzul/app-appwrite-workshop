import './globals.css';

import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';

import {ReactNode} from 'react';

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import {AccountProvider} from '@/hooks/useAccount';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Appwrite Workshop - Home 🏠',
	description: 'Welcome to the Appwrite workshop ! 🎉',
};

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang="fr">
			<AccountProvider>
				<body className={inter.className}>{children}</body>
			</AccountProvider>
		</html>
	);
}
