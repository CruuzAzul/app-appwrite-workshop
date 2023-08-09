'use client';

import {FormEvent, useState} from 'react';

import {RegisterForm} from '@/components/app/register/RegisterForm';
import {UseUser} from '@/hooks/useUser';

export default function Register() {
  const {register} = UseUser();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

    await register(email, password, name);
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
