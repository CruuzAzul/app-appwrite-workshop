'use client';

import {CardModule} from '@/components/app/dashboard/CardModule';
import {modulesConfig} from '@/config/modules.config';
import {I18nProviderClient} from '@/locales/client';

export default function Home() {
	return (
		<I18nProviderClient>
			<ul className="u-grid u-gap-16">
				{modulesConfig.map((module, index) => (
					<CardModule module={module} key={index} />
				))}
			</ul>
		</I18nProviderClient>
	);
}
