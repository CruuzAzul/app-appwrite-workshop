import {Module} from './useFinishedModule';

export const useIsFinishedModule = (module: Module) => {
	const localStorageItem =
		localStorage.getItem('appwrite-workshop-finished-module') ?? '';

  return localStorageItem ? JSON.parse(localStorageItem)[module] : false;
};
