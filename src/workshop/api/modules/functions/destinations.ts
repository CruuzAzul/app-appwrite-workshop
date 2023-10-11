import {Destination, DestinationType} from '@/models/destination';

export const getDestinationList = async (): Promise<Destination[]> => {
	/**
	 * ----------------------------------------
	 * HERE : Retrieval code for the list of destinations.
	 * It would appear that all documents must be returned here
	 * ----------------------------------------
	 */
};

export const createDestination = async (
	destinationData: DestinationType
): Promise<DestinationType> => {
	/**
	 * ----------------------------------------
	 * HERE : Destination creation code.
	 * It would appear that we should return the document created here
	 * ----------------------------------------
	 */
};

export const deleteDestination = async (
	destinationId: string
): Promise<void> => {
	/**
	 * ----------------------------------------
	 * HERE : Code for deleting a destination
	 * ----------------------------------------
	 */
};
