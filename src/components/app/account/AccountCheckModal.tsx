'use client';

import {useEffect, useRef} from 'react';

import {Models} from 'appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';

interface AccountCheckModalProps {
	user?: Models.User<Models.Preferences> | null;
}

export const AccountCheckModal = ({user}: AccountCheckModalProps) => {
	const {finishedModule, setFinishedModule} = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (user && !finishedModule.account) {
			setFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				users: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [user]);

	return <CheckModal module="account" ref={dialogRef} />;
};
