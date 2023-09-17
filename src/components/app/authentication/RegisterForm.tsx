import {FC, FormEvent} from 'react';

import Link from 'next/link';

import {SocialLogin} from '@/components/app/authentication/SocialLogin';
import {PasswordInput} from '@/components/common/inputs/PasswordInput';
import {TextInput} from '@/components/common/inputs/TextInput';
import {ROUTES} from '@/config/routes.config';
import {useScopedI18n} from '@/locales/client';

export const RegisterForm: FC<{
	onSubmit: (e: FormEvent<EventTarget>) => Promise<void>;
	setName: (value: ((prevState: string) => string) | string) => void;
	setEmail: (value: ((prevState: string) => string) | string) => void;
	setPassword: (value: ((prevState: string) => string) | string) => void;
	name: string;
	email: string;
	password: string;
}> = ({onSubmit, setName, setEmail, setPassword, name, email, password}) => {
	const t = useScopedI18n('register');

	return (
		<section className="u-flex-vertical u-main-center u-cross-center u-full-screen-height u-gap-32">
			<h1 className="eyebrow-heading-1 u-text-center u-color-text-pink">
				{t('title')}
			</h1>
			<div className="card u-width-600 u-min-width-200">
				<form onSubmit={onSubmit} className="u-flex-vertical u-row-gap-24">
					<ul className="form-list">
						<TextInput label={t('name')} setValue={setName} />
						<TextInput label={t('email')} setValue={setEmail} type="email" />
						<PasswordInput setValue={setPassword} />
					</ul>
					<div className="u-flex-vertical u-main-center u-cross-center">
						<button
							type="submit"
							disabled={!name || !email || !password}
							className="button"
						>
							{t('signUpButton')}
						</button>
						<p className="u-padding-32">
							{t('alreadyHaveAccount')}
							<Link href={ROUTES.login} className="link u-color-text-info">
								{t('signIn')}
							</Link>
						</p>
						<SocialLogin provider="google" />
					</div>
				</form>
			</div>
		</section>
	);
};
