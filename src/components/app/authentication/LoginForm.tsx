import {FC, FormEvent} from 'react';

import Link from 'next/link';

import {SocialLogin} from '@/components/app/authentication/SocialLogin';
import {PasswordInput} from '@/components/common/inputs/PasswordInput';
import {TextInput} from '@/components/common/inputs/TextInput';

export const LoginForm: FC<{
	onSubmit: (e: FormEvent<EventTarget>) => Promise<void>;
	setEmail: (value: ((prevState: string) => string) | string) => void;
	setPassword: (value: ((prevState: string) => string) | string) => void;
	email: string;
	password: string;
}> = ({onSubmit, setEmail, setPassword, email, password}) => {
	return (
		<section className="u-flex u-main-center u-cross-center u-full-screen-height u-flex-vertical u-gap-32">
			<h1 className="eyebrow-heading-1 u-text-center u-color-text-pink">
				Accédez à votre compte
			</h1>
			<div className="card u-width-600 u-min-width-200">
				<form
					onSubmit={onSubmit}
					className="u-flex u-flex-vertical u-row-gap-24"
				>
					<ul className="form-list">
						<TextInput label="Email" setValue={setEmail} type="email" />
						<PasswordInput setValue={setPassword} />
					</ul>
					<div className="u-flex u-flex-vertical u-main-center u-cross-center">
						<button
							type="submit"
							disabled={!email || !password}
							className="button"
						>
							Connexion
						</button>
						<p className="u-padding-32">
							Vous n&apos;avez pas encore un compte ?{' '}
							<Link href="/register" className="link u-color-text-info	">
								Inscrivez-vous
							</Link>
						</p>
						<SocialLogin provider="google" />
					</div>
				</form>
			</div>
		</section>
	);
};