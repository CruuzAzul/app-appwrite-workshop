import {CSSProperties} from 'react';

import {CardModule} from '@/components/app/dashboard/CardModule';
import {modulesConfig} from '@/config/modules.config';

export default function Home() {
	return (
			<div>
				<ul
					className="grid-box"
					style={
						{
							'--grid-gap': '2rem',
							'--grid-item-size': '50rem',
							'--grid-item-size-small-screens': '20rem',
						} as CSSProperties
					}
				>
					{modulesConfig.map((module, index) => (
						<CardModule module={module} key={index} />
					))}
				</ul>
			</div>
	);
}
