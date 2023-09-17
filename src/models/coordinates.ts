import {Models} from 'appwrite';

export type Coordinate = {
  name: string;
  latitude: number;
  longitude: number;
  picture?: URL;
};

export type Coordinates = Models.Document & Coordinate;
