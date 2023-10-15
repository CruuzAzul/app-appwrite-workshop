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
		tag: 'Client SDK',
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
		icons: ['icon-user-circle'],
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
		icons: ['icon-users'],
	},
	{
		moduleName: 'Databases',
		path: 'databases',
		status: 'Ready',
		tag: 'Client SDK',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.databases.description',
			},
		],
		icons: ['icon-database'],
	},
	{
		moduleName: 'Storage',
		path: 'storage',
		status: 'Ready',
		tag: 'Client SDK',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.storage.description',
			},
		],
		icons: ['icon-paper-clip'],
	},
	{
		moduleName: 'Functions',
		path: 'functions',
		status: 'Ready',
		tag: 'Server SDK',
		infos: [
			{
				icon: 'icon-info',
				description: 'moduleConfig.functions.description',
			},
		],
		icons: ['icon-cloud'],
	},
];
