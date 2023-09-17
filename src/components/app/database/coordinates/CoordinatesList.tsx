import {getCoordinatesList} from '@/api/modules/coordinates';
import {CoordinatesCard} from '@/components/app/database/coordinates/CoordinatesCard';
import {Coordinates} from '@/models/coordinates';

export const CoordinatesList = async () => {
	const coordinatesList = await getCoordinatesList();

	return (
		<div className="card u-width-600">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				Coordoonées :
			</h2>
			<ul className="numeric-list">
				{(coordinatesList ?? []).map((coordinates: Coordinates) => (
					<CoordinatesCard key={coordinates.name} coordinates={coordinates} />
				))}
			</ul>
		</div>
	);
};
