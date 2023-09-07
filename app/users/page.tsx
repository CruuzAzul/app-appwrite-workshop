import {UsersList} from '@/components/app/users/UsersList';

export default function Users() {
	return (
		<main className="u-full-screen-height u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32 u-text-center">
				Voyons voir qui peut nous aider...
			</h1>
			<UsersList />
		</main>
	);
}
