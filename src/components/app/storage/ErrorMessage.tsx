export const ErrorMessage = ({error}: {error: string}) => (
	<p className="helper u-color-text-danger u-margin-block-start-8">
		<span className="icon-exclamation-circle" aria-hidden="true"></span>
		<span className="text">{error}</span>
	</p>
);
