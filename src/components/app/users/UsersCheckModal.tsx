'use client';

import {useEffect, useRef} from 'react';

import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';
import {Users} from '@/models/users';

interface UsersCheckModal {
	userList: Users;
}

export const UsersCheckModal = ({userList}: UsersCheckModal) => {
	const [finishedModule, setIsFinishedModule] = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (userList.length > 0 && !finishedModule.storage) {
			setIsFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				storage: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [userList]);

	const seeClue = () => {
		dialogRef.current?.showModal();
	};

	return (
		<>
			<button
				onClick={seeClue}
				className={`button ${finishedModule.databases ? '' : 'u-none'}`}
			>
				{t('seeClue')}
			</button>
			<dialog className="modal is-big u-position-absolute" ref={dialogRef}>
				<form className="modal-form" method="dialog">
					<header className="modal-header">
						<div className="u-flex u-main-space-between u-cross-center">
							<h4 className="modal-title heading-level-5">
								{t('title.users')}
							</h4>
							<button
								className="button is-text is-small is-only-icon"
								aria-label="Close modal"
							>
								<span className="icon-x" aria-hidden="true"></span>
							</button>
						</div>
					</header>
					<div className="modal-content">
						<p>{t('content')}</p>
					</div>
					<div className="modal-footer">
						<div className="u-flex u-main-end">
							<a className="button" href="google.com" target="_blank">
								{t('button')}
							</a>
						</div>
					</div>
				</form>
			</dialog>
		</>
	);
};
