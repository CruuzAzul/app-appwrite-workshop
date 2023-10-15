import {Module} from './useFinishedModule';

export const useIsFinishedModule = (module: Module) => {
	const storage = JSON.parse(
		localStorage.getItem('appwrite-workshop-finished-module') ?? ''
	);

	return storage[module];
};
