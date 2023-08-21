'use client';

import {useState} from 'react';

import {useRouter} from 'next/navigation';
import Typewriter from 'react-ts-typewriter';

export default function Home() {
	const router = useRouter();
	const [displayStartButton, setDisplayStartButton] = useState(false);

	const description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget mattis\n' +
		'tellus. Proin feugiat, magna at posuere bibendum, urna nisl pulvinar\n' +
		'ipsum, eu eleifend justo sem quis risus. Vestibulum fringilla varius\n' +
		'sagittis.';

	return (
		<main className="u-full-screen-height u-flex-vertical u-main-center u-cross-center u-gap-32">
			<h1 className="heading-level-1 eyebrow-heading-1 u-color-text-pink u-font-size-32">
				Appwrite Workshop
			</h1>
			<p className="u-color-text-gray u-text-center u-bold u-width-600">
				<Typewriter
					text={description}
					speed={20}
					random={50}
					onFinished={() => setDisplayStartButton(true)}
				/>
			</p>
			{displayStartButton && (
				<button className="button" onClick={() => router.push('/dashboard')}>
					<span className="text">Commencer l&apos;adventure</span>
					<span className="icon-paper-airplane" aria-hidden="true" />
				</button>
			)}
		</main>
	);
}
