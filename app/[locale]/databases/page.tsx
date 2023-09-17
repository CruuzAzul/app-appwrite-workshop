import {CoordinatesForm} from '@/components/app/database/coordinates/CoordinatesForm';
import {CoordinatesList} from '@/components/app/database/coordinates/CoordinatesList';
import {getScopedI18n} from '@/locales/server';

export default async function Databases() {
	const t = await getScopedI18n('databases.coordinates');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<div className="u-flex u-flex-vertical u-gap-32">
				<CoordinatesList />
				<CoordinatesForm />
			</div>
		</main>
	);
}
