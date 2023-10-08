'use client';

import {FC} from 'react';

import {Coordinates} from '@/models/coordinates';
import {deleteCoordinates} from '@/workshop/api/modules/databases/coordinates';

interface CoordinatesCardProps {
	coordinates: Coordinates;
}

export const CoordinatesCard: FC<CoordinatesCardProps> = ({coordinates}) => {
	const handleDelete = async () => {
		await deleteCoordinates(coordinates.$id);
	};

	return (
		<li key={coordinates.name}>
			<label className="card is-allow-focus u-cursor-pointer">
				<div className="u-flex u-gap-16">
					<input
						className="is-small u-margin-block-start-2"
						type="radio"
						name="plan"
					/>
					<div className="u-flex u-flex-vertical u-gap-4">
						<h4 className="body-text-2 u-bold">{coordinates.name}</h4>
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
						className="u-margin-inline-start-auto"
					>
						<span className="icon-trash" aria-hidden="true" />
					</button>
				</div>
			</label>
		</li>
	);
};
