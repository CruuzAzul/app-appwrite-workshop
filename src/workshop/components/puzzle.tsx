import {Models} from 'appwrite';

import {DraggableFilePreview} from '@/components/app/storage/DraggableFilePreview';
import {getPuzzlePiecesForTransformedPreviews} from '@/workshop/api/modules/storage/puzzle';

export default async function Puzzle({files}: {files: Models.File[]}) {
	return files.map((file) => {
		const imgSrc = getPuzzlePiecesForTransformedPreviews({
			fileId: file.$id,
			background: '000000',
		});

		return (
			<DraggableFilePreview
				key={file.name}
				imgSrc={JSON.parse(JSON.stringify(imgSrc))}
			/>
		);
	});
}
