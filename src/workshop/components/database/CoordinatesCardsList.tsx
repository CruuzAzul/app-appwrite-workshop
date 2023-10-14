'use client';

import {FC, useEffect, useState} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {CoordinatesCard} from '@/components/app/database/coordinates/CoordinatesCard';
import {Coordinates} from '@/models/coordinates';
import {EventType, getEventType} from '@/utils/realtime.utils';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

interface CoordinatesCardsListProps {
	coordinatesList: Coordinates[];
}

export const CoordinatesCardsList: FC<CoordinatesCardsListProps> = ({
	coordinatesList,
}) => {
	const [updatedCoordinatesList, setUpdatedCoordinatesList] =
		useState(coordinatesList);
	const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;

	useEffect(() => {
		const unsubscribe = AppwriteClient.subscribe(
			coordinatesCollection,
			(response: RealtimeResponseEvent<Coordinates>) => {
				const eventType = getEventType({
					events: response.events,
				});

				switch (eventType) {
					case EventType.CREATE:
						setUpdatedCoordinatesList([
							response.payload as Coordinates,
							...updatedCoordinatesList,
						]);
						break;
					case EventType.DELETE:
						const deletedItemId = response.payload.$id;
						const filtered = updatedCoordinatesList.filter(
							(item) => item.$id !== deletedItemId
						);
						setUpdatedCoordinatesList([...filtered]);
						break;
					default:
						break;
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, [coordinatesCollection]);

	return (
		<ul className="numeric-list">
			{(updatedCoordinatesList ?? []).map((coordinates: Coordinates) => (
				<CoordinatesCard key={coordinates.name} coordinates={coordinates} />
			))}
		</ul>
	);
};
