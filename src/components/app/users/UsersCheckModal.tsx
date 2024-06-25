'use client';

import {useEffect, useRef} from 'react';

import {Models} from 'node-appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useIsFinishedModule} from '@/hooks/useIsModuleFinished';
import {useScopedI18n} from '@/locales/client';
import {Users} from '@/models/users';

interface UsersCheckModal {
	userList: Users;
}

export const UsersCheckModal = ({userList}: UsersCheckModal) => {
	const {setFinishedModule} = useFinishedModule();
	const isModuleFinished = useIsFinishedModule('users');
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (userList.length > 0 && !isModuleFinished) {
			setFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				users: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [userList]);

	return <CheckModal module="users" ref={dialogRef} />;
};
