import {Files} from '@/components/app/storage/Files';
import {UploadBox} from '@/components/app/storage/UploadBox';

export default function Storage() {
	return (
		<main className="u-full-screen-height u-flex u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<Files />
			<UploadBox />
		</main>
	);
}
