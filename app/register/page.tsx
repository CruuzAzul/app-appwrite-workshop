'use client';

import {FormEvent, useState} from 'react';

import {useRouter} from 'next/navigation';

import {createAccount} from '@/api/client';
import {RegisterForm} from '@/components/app/register/RegisterForm';

export default function Register() {
	const router = useRouter();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		try {
			await createAccount(email, password, name);
			await router.push('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<RegisterForm
			onSubmit={handleSignup}
			setName={setName}
			setEmail={setEmail}
			setPassword={setPassword}
			name={name}
			email={email}
			password={password}
		/>
	);
}
