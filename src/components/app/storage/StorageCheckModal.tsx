'use client';

import {useEffect, useRef} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';
import {EventType, getEventType} from '@/utils/realtime.utils';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

const STORAGE_SOLUTION = 'Capture d’écran 2023-10-08 à 15.34.04.png';

export const StorageCheckModal = () => {
	const [finishedModule, setIsFinishedModule] = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);
	const bucket = `buckets.${EnvConfig.storageBucketId}.files`;

	useEffect(() => {
		const unsubscribe = AppwriteClient.subscribe(
			bucket,
			(response: RealtimeResponseEvent<File>) => {
				const eventType = getEventType({events: response.events});

				if (
					eventType === EventType.CREATE &&
					response.payload.name === STORAGE_SOLUTION
				) {
					setIsFinishedModule((oldFinishedModule: any) => ({
						...oldFinishedModule,
						storage: true,
					}));
					dialogRef.current?.showModal();
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, [bucket]);

	const seeClue = () => {
		dialogRef.current?.showModal();
	};

	return (
		<div>
			<button
				onClick={seeClue}
				className={`button ${finishedModule.storage ? '' : 'u-none'}`}
			>
				{t('seeClue')}
			</button>
			<dialog className="modal is-big u-position-absolute" ref={dialogRef}>
				<form className="modal-form" method="dialog">
					<header className="modal-header">
						<div className="u-flex u-main-space-between u-cross-center">
							<h4 className="modal-title heading-level-5">
								{t('title.storage')}
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
		</div>
	);
};
