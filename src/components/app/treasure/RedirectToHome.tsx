'use client';

import {useEffect, useMemo} from 'react';

import {redirect} from 'next/navigation';

import {useIsFinishedModule} from '@/hooks/useIsModuleFinished';

export const RedirectToHome = () => {
	const isDatabaseFinished = useIsFinishedModule('databases');
	const isStorageFinished = useIsFinishedModule('storage');
	const isFunctionsFinished = useIsFinishedModule('functions');
	const isAccountFinished = useIsFinishedModule('account');
	const isUsersFinished = useIsFinishedModule('users');

	const finishedModule = useMemo(
		() => [
			isAccountFinished,
			isDatabaseFinished,
			isFunctionsFinished,
			isStorageFinished,
			isUsersFinished,
		],
		[
			isAccountFinished,
			isDatabaseFinished,
			isFunctionsFinished,
			isStorageFinished,
			isUsersFinished,
		]
	);

	useEffect(() => {
		if (finishedModule.includes(false)) {
			redirect('/');
		}
	}, [finishedModule]);

	return null;
};
