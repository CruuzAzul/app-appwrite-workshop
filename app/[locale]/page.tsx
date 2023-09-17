'use client';

import HomePage from '@/components/app/home/HomePage';
import {I18nProviderClient} from '@/locales/client';

export default function Home() {
	return (
		<main className="u-full-screen-height u-flex-vertical u-main-center u-cross-center u-gap-32">
			<I18nProviderClient>
				<HomePage />
			</I18nProviderClient>
		</main>
	);
}
