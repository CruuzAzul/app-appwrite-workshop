import React from 'react';

import {UserInfos} from '@/components/app/user/UserInfos';

export type ModuleConfig = {
	moduleName: string;
	path: string;
	status: string;
	tag: string;
	infos: {
		description: string;
		icon: string;
	}[];
	icons: string[];
	validationComponent?: any;
};

export const modulesConfig: ModuleConfig[] = [
	{
		moduleName: 'Account',
		path: '/login',
		status: 'Ready',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description:
					'Ce module va vous permettre de gérer un compte utilisateur. Vous pourrez créer un compte, vous connecter et intéragir avec votre compte.',
			},
			{
				icon: 'icon-exclamation u-color-text-warning',
				description:
					'Ce module est nécessaire pour utiliser les autres modules.',
			},
		],
		icons: ['icon-user-circle', 'icon-shield-check'],
		validationComponent: <UserInfos />,
	},
	{
		moduleName: 'Databases',
		path: '/dashboard',
		status: 'In progress',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description:
					'Ce module va vous permettre de communiquer avec une base de données. Vous pourrez créer, lire, mettre à jour et supprimer des données.',
			},
		],
		icons: ['icon-database', 'icon-shield-check'],
	},
	{
		moduleName: 'Storage',
		path: '/storage',
		status: 'Ready',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description:
					"Ce module va vous permettre de communiquer avec des buckets de storage et les fichiers à l'intérieur.",
			},
		],
		icons: ['icon-database', 'icon-shield-check'],
	},
];
