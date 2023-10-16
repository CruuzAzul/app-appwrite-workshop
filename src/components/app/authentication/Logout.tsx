'use client';

import {UseAccount} from '@/hooks/useAccount';

export const Logout = () => {
	const {logout, user} = UseAccount();

	return user ? (
		<button className="button" onClick={logout}>
			<span className="text">Logout</span>
			<span className="icon-logout-right" aria-hidden="true" />
		</button>
	) : null;
};
