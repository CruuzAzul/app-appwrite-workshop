import {Models} from 'appwrite';

export type Coordinate = {
	name: string;
	latitude: number;
	longitude: number;
};

export type Coordinates = Models.Document & Coordinate;
