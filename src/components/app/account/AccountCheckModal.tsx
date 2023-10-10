'use client';

import {useEffect, useRef} from 'react';

import {Models} from 'appwrite';

import {useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';

interface AccountCheckModalProps {
	user?: Models.User<Models.Preferences> | null;
}

export const AccountCheckModal = ({user}: AccountCheckModalProps) => {
	const [finishedModule, setIsFinishedModule] = useFinishedModule();
	const t = useScopedI18n('validation');
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (user && !finishedModule.account) {
			setIsFinishedModule((oldFinishedModule) => ({
				...oldFinishedModule,
				users: true,
			}));
			dialogRef.current?.showModal();
		}
	}, [user]);

	const seeClue = () => {
		dialogRef.current?.showModal();
	};

	return (
		<div>
			<button
				onClick={seeClue}
				className={`button ${finishedModule.account ? '' : 'u-none'}`}
			>
				{t('seeClue')}
			</button>
			<dialog className="modal is-big u-position-absolute" ref={dialogRef}>
				<form className="modal-form" method="dialog">
					<header className="modal-header">
						<div className="u-flex u-main-space-between u-cross-center">
							<h4 className="modal-title heading-level-5">
								{t('title.account')}
							</h4>
							<button
								className="button is-text is-small is-only-icon"
								aria-label="Close modal"
							>
								<span className="icon-x" aria-hidden="true"></span>
							</button>
						</div>
						s
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
		</div>
	);
};
