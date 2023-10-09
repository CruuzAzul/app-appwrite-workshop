'use client';

import {ReactNode} from 'react';

import {AccountProvider} from '@/hooks/useAccount';
import {I18nProviderClient} from '@/locales/client';

export default function Providers({children}: {children: ReactNode}) {
	return (
		<AccountProvider>
			<I18nProviderClient>{children}</I18nProviderClient>
		</AccountProvider>
	);
}
