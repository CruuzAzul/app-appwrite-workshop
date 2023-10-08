import {getScopedI18n} from '@/locales/server';
import {getPuzzlePieces} from '@/workshop/api/modules/storage/puzzle';

export const Files = async () => {
	const t = await getScopedI18n('storage');
	const filesList = await getPuzzlePieces();
	const {total, files} = filesList;

	return (
		<div className="card u-min-width-100-percent u-height-100-percent">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				{t('count', {count: total})}
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
