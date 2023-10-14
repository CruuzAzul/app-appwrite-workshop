'use client';

import {useEffect, useRef} from 'react';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';
import {Coordinate} from '@/models/coordinates';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';
import {getCoordinatesList} from '@/workshop/api/modules/database/coordinates';

const DATABASE_SOLUTION: Coordinate[] = [
	{name: 'Première', latitude: 32, longitude: 32},
	{name: 'Deuxième', latitude: 23, longitude: 23},
	{name: 'Troisième', latitude: 13, longitude: 32},
];

export const DatabaseCheckModal = () => {
	const {finishedModule, setFinishedModule} = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);
	const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;

	useEffect(() => {
		const unsubscribe = AppwriteClient.subscribe(
			coordinatesCollection,
			async () => {
				const coordinates = await getCoordinatesList();

				if (coordinates.length !== DATABASE_SOLUTION.length) {
					return;
				}

				const sortedCoordinates = coordinates.sort((a, b) =>
					a.name > b.name ? 1 : -1
				);
				const sortedSolution = DATABASE_SOLUTION.sort((a, b) =>
					a.name > b.name ? 1 : -1
				);

				if (
					sortedCoordinates.every(
						(coord, index) =>
							coord.name === sortedSolution[index].name &&
							coord.latitude === sortedSolution[index].latitude &&
							coord.longitude === sortedSolution[index].longitude
					) &&
					!finishedModule.databases
				) {
					setFinishedModule((oldFinishedModule) => ({
						...oldFinishedModule,
						databases: true,
					}));
					dialogRef.current?.showModal();
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, [coordinatesCollection]);

	return <CheckModal module="databases" ref={dialogRef} />;
};
