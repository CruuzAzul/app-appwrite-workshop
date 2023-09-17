'use client';

import {useState} from 'react';

import Link from 'next/link';
import Typewriter from 'react-ts-typewriter';

import {useScopedI18n} from '@/locales/client';

export default function HomePage() {
	const [displayStartButton, setDisplayStartButton] = useState(false);
	const t = useScopedI18n('home');

	return (
		<>
			<h1 className="heading-level-1 eyebrow-heading-1 u-color-text-pink u-font-size-32">
				Appwrite Workshop
			</h1>
			<p className="u-color-text-gray u-text-center u-bold u-width-600">
				<Typewriter
					text={t('description')}
					speed={20}
					random={50}
					onFinished={() => setDisplayStartButton(true)}
				/>
			</p>
			{displayStartButton && (
				<Link className="button" href="dashboard">
					<span className="text">{t('startButton')}</span>
					<span className="icon-paper-airplane" aria-hidden="true" />
				</Link>
			)}
		</>
	);
}
