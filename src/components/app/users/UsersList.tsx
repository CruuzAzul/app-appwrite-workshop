import {getScopedI18n} from '@/locales/server';
import {getTravelersList} from '@/workshop/api/modules/users/travelers';

import {UsersCheckModal} from './UsersCheckModal';

export const UsersList = async () => {
	const t = await getScopedI18n('users');
	const users = await getTravelersList();

	return (
		<div
			className="card u-flex-vertical u-gap-32 u-width-fit-content"
			style={{minWidth: '60%'}}
		>
			{(users ?? []).map((user) => (
				<div className="card" key={user.$id}>
					<div className="user-profile">
						<span className="avatar is-color-green">
							{user.name.substring(0, 2)}
						</span>
						<span className="user-profile-info">
							<span className="name">{user.name}</span>
							<div className="interactive-text-output u-padding-inline-0">
								<span className="text">{user.$id}</span>
								<div className="u-flex u-cross-child-start u-gap-8">
									<button
										className="interactive-text-output-button"
										aria-label="copy text"
									>
										<span className="icon-duplicate" aria-hidden="true"></span>
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
							<span className="text">
								<span
									className="icon-anonymous u-color-text-pink"
									aria-hidden="true"
								/>
								<span className="u-bold u-color-text-pink u-padding-inline-8">
									Password :
								</span>
								<span className="u-trim-1">{user.password}</span>
							</span>
						</span>
					</div>
				</div>
			))}
			{!users && (
				<p className="u-bold" style={{textAlign: 'center', fontSize: '1.1rem'}}>
					{t('noData')}
				</p>
			)}
			<UsersCheckModal userList={users ?? []} />
		</div>
	);
};
