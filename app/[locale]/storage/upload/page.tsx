import {UploadBox} from '@/components/app/storage/UploadBox';
import {getScopedI18n} from '@/locales/server';

export default async function StorageUpload() {
	const t = await getScopedI18n('storage.upload');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				{t('title')}
			</h1>
			<p className="u-font-content body-text-1 u-bold">{t('description')}</p>
			<UploadBox />
		</main>
	);
}
