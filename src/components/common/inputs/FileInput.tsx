import {FC} from 'react';

export const FileInput: FC<{
	id?: string;
	label: string;
}> = ({id, label}) => (
	<div className="form-item">
		<p className="upload-file-box-info body-text-2">{label}</p>
		<input id={id} type="file" accept="image/png, image/jpeg" />
	</div>
);
