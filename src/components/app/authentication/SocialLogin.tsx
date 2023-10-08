'use client';

import {FC} from 'react';

import {useCurrentLocale, useScopedI18n} from '@/locales/client';
import {ROUTES} from '@/routing/routes.config';
import {UseAccount} from '@/workshop/hooks/useAccount';

export const SocialLogin: FC<{
	provider: string;
}> = ({provider}) => {
	const t = useScopedI18n('login');
	const locale = useCurrentLocale();
	const {socialLogin} = UseAccount();
	const currentPathname =
		typeof window !== 'undefined' ? window.location.origin : '';
	const successRedirectUrl = `${currentPathname}/${locale}/${ROUTES.dashboard}`;
	const failureRedirectUrl = `${currentPathname}/${locale}/failure`;

	const handleSignInWithSocialLogin = async () => {
		await socialLogin(provider, successRedirectUrl, failureRedirectUrl);
	};

	return (
		<button className="button" onClick={() => handleSignInWithSocialLogin()}>
			<span className="text">{t('googleSignIn')}</span>
			<span className="icon-google" aria-hidden="true" />
		</button>
	);
};
