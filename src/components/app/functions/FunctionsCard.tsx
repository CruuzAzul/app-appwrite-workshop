'use client';
import {useEffect, useState} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {useScopedI18n} from '@/locales/client';
import {Destination} from '@/models/destination';
import {
	createDestination,
	deleteDestination,
	getDestinationList,
} from '@/services/functions/destinations';
import {EventType, getEventType} from '@/utils/realtime.utils';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

export default function FunctionsCard() {
	const t = useScopedI18n('functions');

	const [destinations, setDestinations] = useState<Destination[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!AppwriteClient) {
			return;
		}

		getDestinationList().then((data) => {
			setDestinations(data);
		});

		const unsubscribe = AppwriteClient.subscribe(
			`databases.${EnvConfig.databaseId}.collections.${EnvConfig.destinationCollectionId}.documents`,
			async (response: RealtimeResponseEvent<Destination>) => {
				if (getEventType({events: response.events}) == EventType.DELETE) {
					const distantDestinations = await getDestinationList();

					setDestinations((oldDestinations) => {
						const oldDestinationsId = oldDestinations.map(
							(oldDestination) => oldDestination.$id
						);

						const newDestination = distantDestinations.find(
							(distantDestination) =>
								!oldDestinationsId.includes(distantDestination.$id)
						);

						if (!newDestination) return oldDestinations;

						return [newDestination, ...oldDestinations.slice(0, -1)];
					});
					setIsLoading(false);
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, []);

	const addDestination = async () => {
		setIsLoading(true);

		const lastDestination = destinations.at(-1);

		if (!lastDestination) {
			console.error('There is no last destination');

			return;
		}

		try {
			await createDestination({
				destination: lastDestination.destination,
				flight: lastDestination.flight,
			});

			await new Promise((r) => setTimeout(r, 2000));

			await deleteDestination(lastDestination.$id);
		} catch (error: any) {
			console.error(error);
		}
	};

	return (
		<div className="card u-flex u-flex-vertical u-min-width-100-percent">
			<table className="table">
				<thead className="table-head">
					<tr className="table-row">
						<th className="table-head-col u-padding-16">
							<span className="eyebrow-heading-3">{t('destination')}</span>
						</th>
						<th className="table-head-col u-padding-16">
							<span className="eyebrow-heading-3">{t('flight')}</span>
						</th>
					</tr>
				</thead>
				<tbody className="table-tbody">
					{destinations.map((destination) => (
						<tr className="table-row" key={destination.$id}>
							<td className="table-col">
								<span className="text">{destination.destination}</span>
							</td>
							<td className="table-col">
								<span className="text">{destination.flight}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{destinations.length === 0 && (
				<p className="u-bold" style={{textAlign: 'center', paddingTop: '2rem'}}>
					{t('noData')}
				</p>
			)}
			<button
				className="button u-margin-block-start-52 u-cross-child-end"
				onClick={addDestination}
			>
				{isLoading ? t('addButtonLoading') : t('addButton')}
			</button>
		</div>
	);
}
