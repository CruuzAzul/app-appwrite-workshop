import {FileUploader} from 'react-drag-drop-files';

const fileTypes = ['JPEG', 'PNG'];

export const DropZone = ({
	handleFilesChange,
}: {
	handleFilesChange: (files: FileList | null) => void;
}) => (
	<FileUploader
		multiple
		handleChange={handleFilesChange}
		name="file"
		types={fileTypes}
		classes="u-flex-vertical u-main-center u-cross-center u-gap-32"
	>
		<div className="upload-file-box-image">
			<span className="icon-upload" aria-hidden="true" />
		</div>
		<div className="u-min-width-0 u-text-center">
			<h5 className="upload-file-box-title heading-level-7 u-inline">
				<span className="is-only-desktop">
					Drag and drop files here to upload
				</span>
				<span className="is-not-desktop">Upload a File</span>
			</h5>
			<button
				className="tooltip u-inline u-margin-inline-start-4"
				aria-label="variables info"
			>
				<span className="icon-info" aria-hidden="true" />
				<span className="tooltip-popup" role="tooltip">
					Only PNGs & JPEGs accepted.
				</span>
			</button>
		</div>
	</FileUploader>
);
