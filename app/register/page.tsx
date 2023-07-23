'use client';

import {FormEvent, useState} from 'react';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

import {createAccount} from '@/api/client';

export default function Register() {
	const router = useRouter();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	console.log(name, email, password);

	const handleSignup = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		try {
			await createAccount(email, password, name);
			await router.push('/');
		} catch (error) {
			console.log('ERROR');
			console.error(error);
		}
	};

	return (
		<>
			<section className="u-flex u-main-center u-cross-center u-full-screen-height u-flex-vertical u-gap-32">
				<h1 className="eyebrow-heading-1 u-text-center u-color-text-pink">
					Créez votre compte
				</h1>
				<div className="card u-width-600">
					<form
						onSubmit={handleSignup}
						className="u-flex u-flex-vertical u-row-gap-24"
					>
						<ul className="form-list">
							<li className="form-item">
								<label className="label">Name</label>
								<div className="input-text-wrapper">
									<input
										className="input-text"
										type="text"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</li>
							<li className="form-item">
								<label className="label">Email</label>
								<div className="input-text-wrapper">
									<input
										className="input-text"
										type="text"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</li>
							<li className="form-item">
								<label className="label">Mot de passe</label>
								<div className="input-text-wrapper">
									<input
										type="password"
										className="input-text"
										placeholder="Mot de passe"
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button
										className="show-password-button"
										aria-label="show password"
										type="button"
									>
										<span className="icon-eye" aria-hidden="true"></span>
									</button>
								</div>
							</li>
						</ul>

						<div className="u-flex u-flex-vertical u-main-center u-cross-center">
							<button
								type="submit"
								disabled={!name || !email || !password}
								className="button"
							>
								Register an account
							</button>
							<p className="u-padding-block-start-16">
								Vous avez déjà un compte ?{' '}
								<Link href="/login" className="link u-color-text-info	">
									Connectez-vous
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
