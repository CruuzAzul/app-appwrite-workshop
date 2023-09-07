import {getDestinations} from '@/api/modules/destinations';

export const Destinations = async () => {
	const destinations = await getDestinations();

	return (
		<div className="card">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				Destinations :
			</h2>
			<ul className="numeric-list">
				{(destinations ?? []).map((destination) => (
					<li className="numeric-list-item u-bold" key={destination.name}>
						{destination.name}
					</li>
				))}
			</ul>
		</div>
	);
};
