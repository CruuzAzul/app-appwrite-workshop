'use client';

import {UseUser} from '@/hooks/useUser';

export const Logout = () => {
	const {logout, user} = UseUser();

	return (
		user && (
			<button className="button" onClick={logout}>
				<span className="text">Logout</span>
				<span className="icon-logout-right" aria-hidden="true"></span>
			</button>
		)
	);
};
