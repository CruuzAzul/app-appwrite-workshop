'use client';

import {FC} from 'react';

import Link from 'next/link';

import {useI18n} from '@/locales/client';
import {ModuleConfig} from '@/routing/modules.config';

interface CardModuleProps {
	module: ModuleConfig;
}

export const CardModule: FC<CardModuleProps> = ({module}) => {
	const {moduleName, path, status, tag, infos, icons, validationComponent} =
		module;

	const t = useI18n();

	return (
		<li>
			<div className="card">
				<div className="grid-item-1">
					<div className="grid-item-1-start-start">
						<div className="eyebrow-heading-3">Module</div>
						<h2 className="heading-level-6 u-margin-block-start-4 u-bold">
							{moduleName}
						</h2>
						{infos.map((info, index) => (
							<p
								key={index}
								className="u-flex u-cross-baseline u-gap-4 u-margin-block-start-16"
							>
								<span
									className={`u-color-text-info ${info.icon}`}
									aria-hidden="true"
								/>
								<span className="u-color-light-only-text-neutral-70 u-color-dark-only-text-neutral-50">
									{t(info.description as any, {} as any)}
								</span>
							</p>
						))}
					</div>
					<div className="grid-item-1-start-end">
						<div className="status">
							<ul className="icons u-flex u-gap-8 u-color-text-info">
								{icons.map((icon, index) => (
									<li key={index}>
										<span
											className={`${icon} u-color-text-info`}
											aria-hidden="true"
										/>
									</li>
								))}
							</ul>
							<div className="tag">
								<span className="icon-duplicate" aria-hidden="true" />
								<span className="text">{tag}</span>
							</div>
							<button className="tag" disabled>
								<span className="text">{status}</span>
							</button>
						</div>
					</div>
					<div className="grid-item-1-end-start" />
					<div className="grid-item-1-end-end">
						<Link className="button u-cursor-pointer" href={path}>
							Commencer le module
							<span className="icon-lightning-bolt" aria-hidden="true" />
						</Link>
					</div>
					{validationComponent}
				</div>
			</div>
		</li>
	);
};
