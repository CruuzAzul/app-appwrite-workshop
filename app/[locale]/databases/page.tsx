import {Metadata} from 'next';

import {CoordinatesForm} from '@/components/app/database/coordinates/CoordinatesForm';
import {CoordinatesList} from '@/components/app/database/coordinates/CoordinatesList';
import {DatabaseCheckModal} from '@/components/app/database/coordinates/DatabaseCheckModal';
import {getScopedI18n} from '@/locales/server';

import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - Databases 💽',
};

export default async function Databases() {
	const t = await getScopedI18n('databases.coordinates');

	return (
		<main
			className={`u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.background}`}
		>
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<div className="u-flex u-flex-vertical u-gap-32">
				<div className="u-flex u-gap-32">
					<CoordinatesList />
					<CoordinatesForm />
				</div>
				<DatabaseCheckModal />
			</div>
		</main>
	);
}
