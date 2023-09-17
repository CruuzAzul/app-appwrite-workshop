import {useScopedI18n} from '@/locales/client';

export const UploadButton = () => {
	const t = useScopedI18n('storage.upload');

	return (
		<div className="u-flex u-main-end">
			<button type="submit" className="button u-margin-block-start-32 ">
				{t('button')}
			</button>
		</div>
	);
};
