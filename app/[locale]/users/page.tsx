import {Metadata} from "next";

import {UsersList} from '@/components/app/users/UsersList';
import {getScopedI18n} from '@/locales/server';

export const metadata: Metadata = {
	title: 'AppVenture - Users 👥',
};

export default async function Users() {
	const t = await getScopedI18n('users');

	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				{t('title')}
			</h1>
			<UsersList />
		</main>
	);
}
