import useLocalStorage from './useLocalStorage';

export type Module =
	| 'functions'
	| 'databases'
	| 'storage'
	| 'users'
	| 'account';

type FinishedModule = Record<Module, boolean>;

const defaultFinishedModule: FinishedModule = {
	functions: false,
	databases: false,
	storage: false,
	users: false,
	account: false,
};

export const useFinishedModule = () => {
	const [finishedModule, setFinishedModule] = useLocalStorage(
		'appwrite-workshop-finished-module',
		defaultFinishedModule
	);

	return {finishedModule, setFinishedModule};
};
