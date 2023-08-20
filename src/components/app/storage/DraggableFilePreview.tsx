'use client';

import Draggable from 'react-draggable';

export const DraggableFilePreview = ({
	key,
	imgSrc,
}: {
	key: string;
	imgSrc: URL;
}) => (
	<Draggable key={key}>
		<div
			className="u-width-250 u-min-height-100-percent"
			style={{
				background: `url(${imgSrc})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
			}}
		/>
	</Draggable>
);
