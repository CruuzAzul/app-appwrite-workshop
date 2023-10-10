'use client';

import {useEffect, useRef} from 'react';

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
	const [finishedModule, setIsFinishedModule] = useFinishedModule();
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
					)
				) {
					setIsFinishedModule((oldFinishedModule: any) => ({
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

	const seeClue = () => {
		dialogRef.current?.showModal();
	};

	return (
		<>
			<button
				onClick={seeClue}
				className={`button ${finishedModule.function ? '' : 'u-none'}`}
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
						<p>{t('content')}</p>
					</div>
					<div className="modal-footer">
						<div className="u-flex u-main-end">
							<a className="button" href="google.com" target="_blank">
								{t('button')}
							</a>
						</div>
					</div>
				</form>
			</dialog>
		</>
	);
};
