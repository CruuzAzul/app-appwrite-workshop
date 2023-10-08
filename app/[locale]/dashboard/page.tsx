import {CardModule} from '@/components/app/dashboard/CardModule';
import {modulesConfig} from '@/routing/modules.config';

export default function Home() {
	return (
		<ul className="u-grid u-gap-16">
			{modulesConfig.map((module, index) => (
				<CardModule module={module} key={index} />
			))}
		</ul>
	);
}
