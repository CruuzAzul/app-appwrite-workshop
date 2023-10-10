'use client';

import {useEffect, useRef} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';
import {Destination, DestinationType} from '@/models/destination';
import {EventType, getEventType} from '@/utils/realtime.utils';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

const FUNCTIONS_SOLUTION: DestinationType = {
	destination: 'Lyon',
	flight: 'LY432',
};

export const FunctionsCheckModal = () => {
	const [finishedModule, setIsFinishedModule] = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);
	const destinationCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.destinationCollectionId}.documents`;

	useEffect(() => {
		const unsubscribe = AppwriteClient.subscribe(
			destinationCollection,
			async (response: RealtimeResponseEvent<Destination>) => {
				const eventType = getEventType({events: response.events});

				if (
					eventType === EventType.UPDATE &&
					response.payload.destination === FUNCTIONS_SOLUTION.destination &&
					response.payload.flight === FUNCTIONS_SOLUTION.flight
				) {
					setIsFinishedModule((oldFinishedModule: any) => ({
						...oldFinishedModule,
						functions: true,
					}));
					dialogRef.current?.showModal();
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, [destinationCollection]);

	const seeClue = () => {
		dialogRef.current?.showModal();
	};

	return (
		<div>
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
								{t('title.functions')}
							</h4>
							<button
								className="button is-text is-small is-only-icon"
								aria-label="Close modal"
							>
								<span className="icon-x" aria-hidden="true"></span>
							</button>
						</div>
						s
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
		</div>
	);
};
