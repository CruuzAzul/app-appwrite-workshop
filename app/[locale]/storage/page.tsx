import {Metadata} from 'next';
import Link from 'next/link';

import {Files} from '@/components/app/storage/Files';
import {StorageCheckModal} from '@/components/app/storage/StorageCheckModal';
import {getScopedI18n} from '@/locales/server';
import {ROUTES} from '@/routing/routes.config';

import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - Storage 💾',
};

export default async function Storage() {
	const t = await getScopedI18n('storage');

	return (
		<main
			className={`u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.background} ${styles.backgroundList}`}
		>
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<Files />
			<Link
				href={ROUTES.storage.upload}
				className="u-color-text-pink link u-bold"
			>
				{t('link')}
			</Link>
			<StorageCheckModal />
		</main>
	);
}
