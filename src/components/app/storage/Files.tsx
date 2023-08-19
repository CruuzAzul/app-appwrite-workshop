import {getStorageFiles} from '@/api/storage';

export const Files = async () => {
	const filesList = await getStorageFiles();
	const {total, files} = filesList;

	return (
		<div className="card">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				Vous avez {total} fichier dans ce bucket
			</h2>
			<ul className="numeric-list">
				{(files ?? []).map((file) => (
					<li className="numeric-list-item u-bold" key={file.name}>
						{file.name}
					</li>
				))}
			</ul>
		</div>
	);
};
