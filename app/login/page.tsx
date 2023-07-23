'use client';

import {FormEvent, useState} from 'react';

import {useRouter} from 'next/navigation';

import {creatEmailSession} from '@/api/client';
import {LoginForm} from '@/components/app/login/LoginForm';

export default function Login() {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		try {
			await creatEmailSession(email, password);
			await router.push('/');
		} catch (error) {
			console.error(error);
		}
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
