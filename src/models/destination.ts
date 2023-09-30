import {Models} from 'appwrite';

export type DestinationType = {
	destination: string;
	flight: string;
};

export type Destination = Models.Document & DestinationType;
