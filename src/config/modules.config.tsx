import React from 'react';

import {AccountInfos} from '@/components/app/account/AccountInfos';

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

export const modulesConfig = [
	{
		moduleName: 'Account',
		path: 'login',
		status: 'Ready',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.account.description',
			},
			{
				icon: 'icon-exclamation u-color-text-warning',
				description: 'moduleConfig.account.warning',
			},
		],
		icons: ['icon-user-circle', 'icon-shield-check'],
		validationComponent: <AccountInfos />,
	},
	{
		moduleName: 'Users',
		path: 'users',
		status: 'Ready',
		tag: 'Server SDK',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.users.description',
			},
		],
		icons: ['icon-users', 'icon-server'],
	},
	{
		moduleName: 'Databases',
		path: 'databases',
		status: 'In progress',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.databases.description',
			},
		],
		icons: ['icon-database', 'icon-shield-check'],
	},
	{
		moduleName: 'Storage',
		path: 'storage',
		status: 'Ready',
		tag: 'Interactive',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.storage.description',
			},
		],
		icons: ['icon-database', 'icon-shield-check'],
	},
];
