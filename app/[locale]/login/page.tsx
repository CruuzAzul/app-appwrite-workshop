'use client';

import {FormEvent, useState} from 'react';

import {LoginForm} from '@/components/app/authentication/LoginForm';
import {UseAccount} from '@/hooks/useAccount';
import {I18nProviderClient} from '@/locales/client';

export default function Login() {
	const {login} = UseAccount();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		await login(email, password);
	};

	return (
		<I18nProviderClient>
			<LoginForm
				onSubmit={handleSignIn}
				setEmail={setEmail}
				setPassword={setPassword}
				email={email}
				password={password}
			/>
		</I18nProviderClient>
	);
}
