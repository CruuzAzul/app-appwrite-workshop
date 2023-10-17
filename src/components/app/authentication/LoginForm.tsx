import {FC, FormEvent} from 'react';

import {AppwriteException} from "appwrite";
import Link from 'next/link';

import {PasswordInput} from '@/components/common/inputs/PasswordInput';
import {TextInput} from '@/components/common/inputs/TextInput';
import {useScopedI18n} from '@/locales/client';
import {ROUTES} from '@/routing/routes.config';

import styles from './styles.module.css';
import {ErrorMessage} from '../storage/ErrorMessage';

export const LoginForm: FC<{
	onSubmit: (e: FormEvent<EventTarget>) => Promise<void>;
	setEmail: (value: ((prevState: string) => string) | string) => void;
	setPassword: (value: ((prevState: string) => string) | string) => void;
	email: string;
	password: string;
	error?: string;
}> = ({onSubmit, setEmail, setPassword, email, password, error}) => {
	const t = useScopedI18n('login');

	return (
		<section
			className={`u-flex-vertical u-main-center u-cross-center u-full-screen-height u-gap-32 ${styles.background} ${styles.backgroundLogin}`}
		>
			<h1 className="eyebrow-heading-1 u-text-center u-color-text-pink">
				{t('title')}
			</h1>
			<div className="card u-width-600 u-min-width-200">
				<form onSubmit={onSubmit} className="u-flex-vertical u-row-gap-24">
					<ul className="form-list">
						<TextInput label={t('email')} setValue={setEmail} type="email" />
						<PasswordInput setValue={setPassword} />
					</ul>
					{error && <ErrorMessage error={error}></ErrorMessage>}
					<div className="u-flex-vertical u-main-center u-cross-center">
						<button
							type="submit"
							disabled={!email || !password}
							className="button"
						>
							{t('connection')}
						</button>
						<p className="u-padding-32">
							{t('noAccount')}
							<Link href={ROUTES.register} className="link u-color-text-info	">
								{t('signUp')}
							</Link>
						</p>
						{/*<SocialLogin provider="google" />*/}
					</div>
				</form>
			</div>
		</section>
	);
};
