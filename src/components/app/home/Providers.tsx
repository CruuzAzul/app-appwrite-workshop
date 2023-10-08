'use client';

import {ReactNode} from 'react';

import {I18nProviderClient} from '@/locales/client';
import {AccountProvider} from '@/workshop/hooks/useAccount';

export default function Providers({children}: {children: ReactNode}) {
	return (
		<AccountProvider>
			<I18nProviderClient>{children}</I18nProviderClient>
		</AccountProvider>
	);
}
