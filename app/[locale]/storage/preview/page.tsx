import {Metadata} from 'next';
import Link from "next/link";

import {getScopedI18n} from "@/locales/server";
import {ROUTES} from "@/routing/routes.config";
import {getPuzzlePieces} from '@/workshop/api/modules/storage/puzzle';
import Puzzle from '@/workshop/components/storage/puzzle';

import styles from '../styles.module.css';

export const metadata: Metadata = {
	title: 'AppVenture - Storage 💾',
};

export default async function StoragePreview() {
	const filesList = await getPuzzlePieces();
  const t = await getScopedI18n('storage');
  const {files} = filesList;

	return (
		<main className={`u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64 ${styles.backgroundPreview}`}>
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				Est-ce que l&apos;on arrive à trouver un truc avec ça ?
			</h1>
			<div className="u-min-width-100-percent u-height-100-percent u-flex u-main-center u-cross-center u-gap-32">
				<Puzzle files={files} />
			</div>
      <Link
        href={ROUTES.storage.upload}
        className="button u-bold u-font-size-24"
      >
        {t('linkUpload')}
      </Link>
		</main>
	);
}
