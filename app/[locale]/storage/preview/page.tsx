import {getPuzzlePieces} from '@/workshop/api/modules/storage/puzzle';
import Puzzle from '@/workshop/components/storage/puzzle';

export default async function StoragePreview() {
	const filesList = await getPuzzlePieces();
	const {files} = filesList;

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				Est-ce que l&apos;on arrive à trouver un truc avec ça ?
			</h1>
			<div className="u-min-width-100-percent u-height-100-percent u-flex u-main-center u-cross-center u-gap-32">
				<Puzzle files={files} />
			</div>
		</main>
	);
}
