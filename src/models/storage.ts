import {Models} from 'appwrite';

export type File = Models.File;

export type FilesList = Models.FileList;

export type FilePreview = {
	fileId: string;
	width?: number;
	height?: number;
	gravity?: string;
	quality?: number;
	borderWidth?: number;
	borderColor?: string;
	borderRadius?: number;
	opacity?: number;
	rotation?: number;
	background?: string;
	output?: string;
};
