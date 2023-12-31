import {Metadata} from 'next';

import {StorageCheckModal} from '@/components/app/storage/StorageCheckModal';
import {UploadBox} from '@/components/app/storage/UploadBox';
import {getScopedI18n} from '@/locales/server';

import styles from '../styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - Storage 💾',
};

export default async function StorageUpload() {
	const t = await getScopedI18n('storage.upload');

	return (
		<main
			className={`u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.background} ${styles.backgroundUpload}`}
		>
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				{t('title')}
			</h1>
			<UploadBox />
			<StorageCheckModal />
		</main>
	);
}
