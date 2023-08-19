export const DropZone = () => (
	<>
		<div className="upload-file-box-image">
			<span className="icon-upload" aria-hidden="true"></span>
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
				<span className="icon-info" aria-hidden="true"></span>
				<span className="tooltip-popup" role="tooltip">
					Only PNGs & JPEGs accepted.
				</span>
			</button>
		</div>
	</>
);
