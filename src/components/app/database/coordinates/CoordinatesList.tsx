import {getScopedI18n} from '@/locales/server';
import {getCoordinatesList} from '@/workshop/api/modules/database/coordinates';
import {CoordinatesCardsList} from '@/workshop/components/database/CoordinatesCardsList';

export const CoordinatesList = async () => {
	const t = await getScopedI18n('databases.coordinates.list');
	const coordinatesList = await getCoordinatesList();

	return (
		<div className="card u-width-600">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				{t('title')}
			</h2>
			<CoordinatesCardsList coordinatesList={coordinatesList} />
		</div>
	);
};
