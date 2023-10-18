import {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {getScopedI18n} from '@/locales/server';

import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - End 🔚',
};

export default async function Treasure() {
	const t = await getScopedI18n('treasure');

	return (
		<main
			className={`u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.container}`}
		>
			<div className={styles.textContainer}>
				<h1
					className={`heading-level-1 u-text-center ${styles.title}`}
					style={{color: 'hsl(var(--color-primary-100))'}}
				>
					{t('title')}
				</h1>
				<p className={`heading-level-3 u-text-center ${styles.text}`}>
					{t('content')}
				</p>
			</div>
			<Image
				src="/treasure/treasurePathCrossStart.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<div className={styles.textContainer}>
				<p className={`heading-level-3 u-text-center ${styles.text}`}>
					{t('contentStep1')}
				</p>
			</div>
			<Image
				src="/treasure/treasurePath.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<div className={styles.textContainer}>
				<p className={`heading-level-3 u-text-center ${styles.text}`}>
					{t('contentStep2')}
				</p>
			</div>
			<Image
				src="/treasure/treasurePathCrossEnd.svg"
				alt="treasure path"
				width={1000}
				height={1500}
			/>
			<div
				className={`heading-level-3 u-text-center ${styles.textContainer} ${styles.textContainerOss}`}
			>
				<p className={`heading-level-3 u-text-center ${styles.text}`}>
					{t('secretIntro')}
				</p>
				<p
					className={`heading-level-3 u-text-center ${styles.text} ${styles.secret}`}
				>
					{t('secret')}
				</p>
				<Image
					className={styles.communityScreen}
					src="/treasure/community.png"
					alt="community"
					width={1000}
					height={1500}
				/>
				<div className={styles.buttonsContainer}>
					<Link
						href="https://appwrite.io/community"
						className={`button ${styles.link}`}
					>
						<span className="icon-heart" aria-hidden="true" />
						{t('communityButton')}
					</Link>
					<Link
						href="https://openfeedback.io/p32EOIbP5bj4WDdz8bJs/2023-10-19/voyageaucoeurdappwritelebackendopensourcequichallengefirebase"
						className={`button is-secondary ${styles.link}`}
					>
						<span className="icon-annotation" aria-hidden="true" />
						{t('workshopOpinion')}
					</Link>
				</div>
			</div>
		</main>
	);
}
