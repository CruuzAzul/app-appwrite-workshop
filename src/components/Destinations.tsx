import {getDestinations} from '@/api/client';

export default async function Destinations() {
	const destinations = await getDestinations();

	return (
		<ul>
			{(destinations ?? []).map((destination) => (
				<li key={destination.name}>{destination.name}</li>
			))}
		</ul>
	);
}
