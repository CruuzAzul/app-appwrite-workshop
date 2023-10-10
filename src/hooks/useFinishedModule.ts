import useLocalStorage from './useLocalStorage';

type Module = 'functions' | 'databases' | 'storage' | 'users' | 'account';

type FinishedModule = Record<Module, boolean>;

const defaultFinishedModule: FinishedModule = {
	functions: false,
	databases: false,
	storage: false,
	users: false,
	account: false,
};

export const useFinishedModule = () => {
	return useLocalStorage(
		'appwrite-workshop-finished-module',
		defaultFinishedModule
	);
};
