import {Models} from 'appwrite';

export type Coordinates = Models.Document & {
	name: string;
	latitude: number;
	longitude: number;
	picture: URL;
};
