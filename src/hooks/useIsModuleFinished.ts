'use client';

import {Module} from './useFinishedModule';

export const useIsFinishedModule = (module: Module) => {
  if (typeof window !== 'undefined') {
    const localStorageItem =
      localStorage.getItem('appwrite-workshop-finished-module') ?? '';

    return localStorageItem ? JSON.parse(localStorageItem)[module] : false;
  }

	return undefined;
};
