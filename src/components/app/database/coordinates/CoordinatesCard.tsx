'use client';

import {FC} from 'react';

import {Coordinates} from '@/models/coordinates';
import {deleteCoordinates} from '@/workshop/api/modules/database/coordinates';

interface CoordinatesCardProps {
	coordinates: Coordinates;
}

export const CoordinatesCard: FC<CoordinatesCardProps> = ({coordinates}) => {
	const handleDelete = async () => {
		await deleteCoordinates(coordinates.$id);
	};

	return (
		<li key={coordinates.name}>
			<div className="card">
				<div className="u-flex u-gap-16">
					<div className="u-flex u-flex-vertical u-gap-4">
						<h4 className="heading-level-6 u-bold">{coordinates.name}</h4>
						<p className="u-color-text-gray">
							Latitude : <b>{coordinates.latitude}</b>
						</p>
						<p className="u-color-text-gray">
							Longitude : <b>{coordinates.longitude}</b>
						</p>
					</div>
					<button
						type="button"
						onClick={handleDelete}
						className="u-margin-inline-start-auto is-only-icon button"
					>
						<span className="icon-trash" aria-hidden="true" />
					</button>
				</div>
			</div>
		</li>
	);
};
