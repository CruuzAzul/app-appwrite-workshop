import Link from 'next/link';

import {Files} from '@/components/app/storage/Files';
import {ROUTES} from '@/config/routes.config';
import {getScopedI18n} from '@/locales/server';

export default async function Storage() {
	const t = await getScopedI18n('storage');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<p className="u-font-content body-text-1 u-bold">{t('description')}</p>
			<Files />
			<Link
				href={ROUTES.storage.upload}
				className="u-color-text-pink link u-bold"
			>
				{t('link')}
			</Link>
		</main>
	);
}
