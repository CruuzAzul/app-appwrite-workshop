'use client';

import {FormEvent, useState} from 'react';

import {LoginForm} from '@/components/app/authentication/LoginForm';
import {UseAccount} from '@/workshop/hooks/useAccount';

export default function Login() {
	const {login} = UseAccount();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		await login(email, password);
	};

	return (
		<LoginForm
			onSubmit={handleSignIn}
			setEmail={setEmail}
			setPassword={setPassword}
			email={email}
			password={password}
		/>
	);
}
