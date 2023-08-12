'use client';

import {useRouter} from 'next/navigation';

import {SocialLogin} from '@/components/app/login/SocialLogin';
import {UseUser} from '@/hooks/useUser';

export const UserInfos = () => {
	const router = useRouter();
	const {user, loading, error} = UseUser();

	const shouldDisplayError = error || loading;
	const shouldDisplayAuthButtons = !loading && !user;
	const shouldDisplayUserInfos = !loading && user;

	return (
		<div className="card">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				User :
			</h2>
			{loading && <p className="u-bold">Loading...</p>}
			{shouldDisplayError && (
				<p className="u-bold u-padding-block-end-32">{error}</p>
			)}
			{shouldDisplayUserInfos && (
				<ul className="list">
					<li className="list-item">
						<span className="icon-check" aria-hidden="true" />
						<span className="text u-bold">Name : {user.name}</span>
					</li>
					<li className="list-item">
						<span className="icon-check" aria-hidden="true" />
						<span className="text u-bold">Email : {user.email}</span>
					</li>
				</ul>
			)}
			{shouldDisplayAuthButtons && (
				<>
					<div className="u-flex u-gap-8">
						<button className="button" onClick={() => router.push('/login')}>
							<span className="text">Login</span>
							<span className="icon-user-circle" aria-hidden="true"></span>
						</button>
						<button className="button" onClick={() => router.push('/register')}>
							<span className="text">Register</span>
							<span className="icon-user-add" aria-hidden="true"></span>
						</button>
						<SocialLogin provider="google" />
					</div>
				</>
			)}
		</div>
	);
};
