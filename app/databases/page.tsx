import {CoordinatesList} from '@/components/app/database/coordinates/CoordinatesList';

export default function Databases() {
	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				Qu&apos;est ce que l&apos;on retrouve ici...
			</h1>
			<div className="u-grid u-grid-columns-auto-1fr">
				<CoordinatesList />
			</div>
		</main>
	);
}
