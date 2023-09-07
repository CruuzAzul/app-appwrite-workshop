'use client';

import {FC} from 'react';

import {UseAccount} from '@/hooks/useAccount';

export const SocialLogin: FC<{
	provider: string;
}> = ({provider}) => {
	const {socialLogin} = UseAccount();
	const currentPathname =
		typeof window !== 'undefined' ? window.location.href : '';
	const successRedirectUrl = currentPathname + '/dashboard';
	const failureRedirectUrl = currentPathname + '/failure';

	const handleSignInWithSocialLogin = async () => {
		await socialLogin(provider, successRedirectUrl, failureRedirectUrl);
	};

	return (
		<button className="button" onClick={() => handleSignInWithSocialLogin()}>
			<span className="text">Connexion avec Google</span>
			<span className="icon-google" aria-hidden="true" />
		</button>
	);
};
