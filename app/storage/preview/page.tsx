import Image from 'next/image';

import {getFilesForPreviews, getStorageFiles} from '@/api/storage';

export default async function StoragePreview() {
	const filesList = await getStorageFiles();
	const {files} = filesList;

	return (
		<main className="u-full-screen-height u-flex u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				Est-ce que l&apos;on arrive à trouver un truc avec ça ?
			</h1>
			<div className="u-min-width-100-percent u-height-100-percent u-flex u-main-center u-cross-center u-gap-32">
				{files.map((file) => {
					const imgSrc = getFilesForPreviews({
						fileId: file.$id,
						background: file.mimeType === 'image/png' ? '000000' : undefined,
					});

					return (
						<Image
							src={imgSrc.toString()}
							key={file.name}
							alt={file.name}
							width={200}
							height={200}
							className="u-width-140 u-height-auto"
						/>
					);
				})}
			</div>
		</main>
	);
}
