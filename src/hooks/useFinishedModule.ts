import useLocalStorage from './useLocalStorage';

const defaultFinishedModule = {
	functions: false,
	databases: false,
	storage: false,
	users: false,
};

export const useFinishedModule = () => {
	const [finishedValue, setFinishedValue] = useLocalStorage(
		'appwrite-workshop-finished-module',
		defaultFinishedModule
	);

	return [finishedValue, setFinishedValue];
};
