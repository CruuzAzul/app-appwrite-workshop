'use client';

import {useEffect, useRef} from 'react';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';
import {Users} from '@/models/users';

interface UsersCheckModal {
	userList: Users;
}

export const UsersCheckModal = ({userList}: UsersCheckModal) => {
	const {finishedModule, setFinishedModule} = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (userList.length > 0 && !finishedModule.storage) {
			setFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				storage: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [userList]);

	return <CheckModal module="users" ref={dialogRef} />;
};
