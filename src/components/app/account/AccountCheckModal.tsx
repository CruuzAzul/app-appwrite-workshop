'use client';

import {useEffect, useRef} from 'react';

import {Models} from 'appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useIsFinishedModule} from '@/hooks/useIsModuleFinished';

interface AccountCheckModalProps {
	user?: Models.User<Models.Preferences> | null;
}

export const AccountCheckModal = ({user}: AccountCheckModalProps) => {
	const {setFinishedModule} = useFinishedModule();
	const isModuleFinished = useIsFinishedModule('account');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (user && !isModuleFinished) {
			setFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				account: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [isModuleFinished, setFinishedModule, user]);

	return <CheckModal module="account" ref={dialogRef} />;
};
