export const useIsFinishedModule = (module: string) => {
	const storage = JSON.parse(
		localStorage.getItem('appwrite-workshop-finished-module') ?? ''
	);

	return storage[module];
};
