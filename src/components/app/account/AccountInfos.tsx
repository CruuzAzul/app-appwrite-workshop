'use client';

import {UseAccount} from '@/hooks/useAccount';

export const AccountInfos = () => {
	const {user, loading} = UseAccount();

	const shouldDisplayIndice = !loading && !user;
	const shouldDisplayUserInfos = !loading && user;

	return (
		<div className="card">
			{loading && (
				<span className="text u-bold u-color-text-info u-flex u-cross-center u-gap-8">
					<div className="loader" />
					Recharche de compte en cours...
				</span>
			)}
			{shouldDisplayIndice && (
				<span className="text u-bold u-color-text-info">
					Ummmhh... Il semblerait qu&apos;il y ait aucun utilisateur connecté,
					et si on commençait pas par là ?
				</span>
			)}
			{shouldDisplayUserInfos && (
				<div className="user-profile">
					<span className="avatar is-color-green">UN</span>
					<span className="user-profile-info">
						<span className="name eyebrow-heading-3">{user.name}</span>
						<div className="interactive-text-output u-padding-inline-0">
							<span className="text">{user.$id}</span>
							<div className="u-flex u-cross-child-start u-gap-8">
								<button
									className="interactive-text-output-button"
									aria-label="copy text"
								>
									<span className="icon-duplicate" aria-hidden="true" />
								</button>
							</div>
						</div>
					</span>
					<span className="user-profile-sep"></span>
					<span className="user-profile-empty-column"></span>
					<span className="user-profile-info">
						<span className="text">
							<span
								className="icon-mail u-color-text-pink"
								aria-hidden="true"
							/>
							<span className="u-bold u-color-text-pink u-padding-inline-8">
								Email :
							</span>
							<span>{user.email}</span>
						</span>
					</span>
				</div>
			)}
		</div>
	);
};
