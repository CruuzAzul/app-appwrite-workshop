import {ReactNode} from 'react';

import {Metadata} from 'next';

import {Header} from '@/components/common/header/Header';

export const metadata: Metadata = {
	title: 'Appwrite Workshop - Dashboard 📋',
	description: 'Welcome to the dashboard ! 🎉',
};

export default function DashboardLayout({children}: {children: ReactNode}) {
	return (
		<main className="u-full-screen-height u-flex u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<Header />
			{children}
		</main>
	);
}
