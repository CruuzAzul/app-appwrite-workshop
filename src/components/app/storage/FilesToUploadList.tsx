export const FilesToUploadList = ({
	filesToUpload,
	handleDelete,
}: {
	filesToUpload: File[];
	handleDelete: (fileToRemove: File) => void;
}) => (
	<ul className="upload-file-box-list u-min-width-0">
		{filesToUpload.map((file) => (
			<li className="u-flex u-cross-center u-min-width-0" key={file.name}>
				<span className="icon-document" aria-hidden="true"></span>
				<span className="upload-file-box-name u-trim u-min-width-0">
					{file.name}
				</span>
				<span className="upload-file-box-size u-margin-inline-start-4 u-margin-inline-end-16">
					{file.size} bytes
				</span>
				<button
					type="button"
					className="button is-text is-only-icon u-margin-inline-start-auto"
					aria-label="remove file"
					onClick={() => handleDelete(file)}
				>
					<span className="icon-x" aria-hidden="true"></span>
				</button>
			</li>
		))}
	</ul>
);
