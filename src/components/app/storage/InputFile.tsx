export const InputFile = ({
	handleFilesChange,
}: {
	handleFilesChange: (files: FileList | null) => void;
}) => (
	<div className="u-flex u-main-center u-cross-center u-gap-16 u-flex-vertical-mobile">
		<p className="upload-file-box-info body-text-2">Max file size: 10MB</p>
		<button className="button is-secondary is-full-width-mobile">
			<label htmlFor="files">Choose a file</label>
			<input
				id="files"
				type="file"
				multiple
				style={{display: 'none'}}
				accept="image/png, image/jpeg"
				onChange={(e) => {
					e.preventDefault();
					handleFilesChange(e.target.files);
				}}
			/>
		</button>
	</div>
);
