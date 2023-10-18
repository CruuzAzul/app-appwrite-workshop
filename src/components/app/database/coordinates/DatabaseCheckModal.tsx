'use client';

import {useEffect, useRef, useState} from 'react';

import Link from 'next/link';

import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useIsFinishedModule} from '@/hooks/useIsModuleFinished';
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
	const {setFinishedModule} = useFinishedModule();
	const isModuleFinished = useIsFinishedModule('databases');
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);
	const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;

	useEffect(() => {
		if (!AppwriteClient) {
			return;
		}

		const unsubscribe = AppwriteClient.subscribe(
			coordinatesCollection,
			async () => {
				const coordinates = await getCoordinatesList();

				if (coordinates?.length !== DATABASE_SOLUTION.length) {
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
					!isModuleFinished
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

	const seeModal = () => {
		dialogRef.current?.showModal();
	};

	return (
		<>
			<button
				onClick={seeModal}
				className={`button ${isModuleFinished ? '' : 'u-none'}`}
			>
				{t('seeClue')}
			</button>
			<dialog className="modal is-big u-position-absolute" ref={dialogRef}>
				<form className="modal-form" method="dialog">
					<header className="modal-header">
						<div className="u-flex u-main-space-between u-cross-center">
							<h4 className="modal-title heading-level-5">
								{t('title.databases')}
							</h4>
							<button
								className="button is-text is-small is-only-icon"
								aria-label="Close modal"
							>
								<span className="icon-x" aria-hidden="true"></span>
							</button>
						</div>
					</header>
					<div className="modal-content">
						<p>{t('endContent')}</p>
					</div>
					<div className="modal-footer">
						<div className="u-flex u-main-end">
							<Link className="button" href="/treasure">
								{t('redirect')}
							</Link>
						</div>
					</div>
				</form>
			</dialog>
		</>
	);
};
