import {getScopedI18n} from '@/locales/server';

export default async function Treasure() {
	const t = await getScopedI18n('treasure');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-main-center u-cross-center u-padding-64">
			<h1 className="heading-level-1">{t('title')}</h1>
			<p className="heading-level-3">{t('content')}</p>
			<p className="heading-level-2">{t('secret')}</p>
		</main>
	);
}
