import {getScopedI18n} from '@/locales/server';
import FunctionsCard from '@/workshop/components/functions/FunctionsCard';

export default async function Functions() {
	const t = await getScopedI18n('functions');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<p className="u-font-content body-text-1 u-bold">{t('description')}</p>
			<FunctionsCard />
		</main>
	);
}
