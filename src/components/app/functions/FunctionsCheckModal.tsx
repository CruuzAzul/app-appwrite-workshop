'use client';

import {useEffect, useRef} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
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
	const {finishedModule, setFinishedModule} = useFinishedModule();
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
					response.payload.flight === FUNCTIONS_SOLUTION.flight &&
					!finishedModule.functions
				) {
					setFinishedModule((oldFinishedModule) => ({
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

	return <CheckModal module="functions" ref={dialogRef} />;
};
