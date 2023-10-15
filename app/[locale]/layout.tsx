import './globals.css';

import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';

import {ReactNode} from 'react';

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import Providers from '@/components/app/home/Providers';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'AppVenture - Home 🏠',
	description: 'Welcome to the Appwrite workshop ! 🎉',
  icons: {
    icon: '/appwrite.svg',
    shortcut: '/appwrite.svg',
    apple: '/appwrite.svg',
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang="fr">
			<Providers>
				<body className={inter.className}>{children}</body>
			</Providers>
		</html>
	);
}
