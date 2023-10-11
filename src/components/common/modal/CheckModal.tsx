'use client';

import {Ref, forwardRef, useEffect, useRef} from 'react';

import {Module, useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';

interface CheckModalProps {
	module: Module;
}

export const CheckModal = forwardRef<HTMLDialogElement, CheckModalProps>(
	({module}, ref) => {
		const {finishedModule} = useFinishedModule();
		const t = useScopedI18n('validation');

		const seeClue = () => {
			if (ref) {
				(ref as any)?.current?.showModal();
			}
		};

		return (
			<>
				<button
					onClick={seeClue}
					className={`button ${finishedModule[module] ? '' : 'u-none'}`}
				>
					{t('seeClue')}
				</button>
				<dialog className="modal is-big u-position-absolute" ref={ref}>
					<form className="modal-form" method="dialog">
						<header className="modal-header">
							<div className="u-flex u-main-space-between u-cross-center">
								<h4 className="modal-title heading-level-5">
									{t(`title.${module}`)}
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
	}
);

CheckModal.displayName = 'CheckModal';
