import {ReactNode} from 'react';

import {Metadata} from 'next';

import {Header} from '@/components/common/header/Header';

import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - Dashboard 📋',
	description: 'Welcome to the dashboard ! 🎉',
};

export default function DashboardLayout({children}: {children: ReactNode}) {
	return (
		<main
			className={`u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.background}`}
		>
			<Header />
			{children}
		</main>
	);
}
