'use client';

import {useEffect, useRef} from 'react';

import {Models} from 'appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useIsFinishedModule} from '@/hooks/useIsModuleFinished';
import {useScopedI18n} from '@/locales/client';

interface AccountCheckModalProps {
	user?: Models.User<Models.Preferences> | null;
}

export const AccountCheckModal = ({user}: AccountCheckModalProps) => {
	const {setFinishedModule} = useFinishedModule();
	const isModuleFinished = useIsFinishedModule('account');
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (user && !isModuleFinished) {
			setFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				account: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [user]);

	return <CheckModal module="account" ref={dialogRef} />;
};
