import Image from 'next/image';

import {RedirectToHome} from '@/components/app/treasure/RedirectToHome';
import {getScopedI18n} from '@/locales/server';

export default async function Treasure() {
	const t = await getScopedI18n('treasure');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-main-center u-cross-center u-padding-64">
			<RedirectToHome />
			<h1
				className="heading-level-1 u-text-center"
				style={{color: 'hsl(var(--color-primary-100))'}}
			>
				{t('title')}
			</h1>
			<p className="heading-level-3">{t('content')}</p>
			<Image
				src="/treasurePath.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<Image
				src="/treasurePath.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<Image
				src="/treasurePath.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<Image
				src="/treasurePath.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<p className="heading-level-2">{t('secret')}</p>
		</main>
	);
}
