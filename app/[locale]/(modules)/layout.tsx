import {ReactNode} from 'react';

import Link from 'next/link';

import {ROUTES} from '@/routing/routes.config';

export default function DashboardLayout({children}: {children: ReactNode}) {
	return (
		<>
			<Link
				href={ROUTES.dashboard}
				className="button is-only-icon is-big	u-position-absolute u-inset-inline-start-16	u-inset-block-start-16"
			>
				<span className="icon-home" aria-hidden="true" />
			</Link>
			{children}
		</>
	);
}
