'use client';

import {FC, useEffect, useState} from 'react';

import {CoordinatesCard} from '@/components/app/database/coordinates/CoordinatesCard';
import {Coordinates} from '@/models/coordinates';

interface CoordinatesCardsListProps {
	coordinatesList: Coordinates[];
}

export const CoordinatesCardsList: FC<CoordinatesCardsListProps> = ({
	coordinatesList,
}) => {
	const [updatedCoordinatesList, setUpdatedCoordinatesList] =
		useState(coordinatesList);

	useEffect(() => {
		/**
		 * ----------------------------------------
		 * HERE : Subscribe to the realtime events on the coordinates collection
		 * and update the coordinates list accordingly
		 *
		 * Hint: You can use the getEventType function to know if the event is a creation, update or deletion.
		 * ----------------------------------------
		 */
	}, []);

	return (
		<ul className="numeric-list">
			{(updatedCoordinatesList ?? []).map((coordinates: Coordinates) => (
				<CoordinatesCard key={coordinates.name} coordinates={coordinates} />
			))}
		</ul>
	);
};
