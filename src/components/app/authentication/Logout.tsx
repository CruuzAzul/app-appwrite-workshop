'use client';

import Image from 'next/image';

import {UseAccount} from '@/workshop/hooks/useAccount';

export const Logout = () => {
	const {logout, user} = UseAccount();

	return user ? (
		<button className="button" onClick={logout}>
			<span className="text">Logout</span>
			<span className="icon-logout-right" aria-hidden="true" />
		</button>
	) : (
		<a href="https://appwrite.io/" target="_blank" className="u-width-200">
			<Image
				width={200}
				height={54}
				src="https://appwrite.io/images-ee/press/badge-pink-button.svg"
				alt="Built with Appwrite"
			/>
		</a>
	);
};
