'use client';

import React, {useRef, useState} from 'react';

import {AppwriteException} from 'appwrite';

import {FileInput} from '@/components/common/inputs/FileInput';
import {TextInput} from '@/components/common/inputs/TextInput';
import {createCoordinates} from '@/workshop/api/modules/databases/coordinates';
import {
	getPuzzlePiecesForView,
	uploadImageKey,
} from '@/workshop/api/modules/storage/puzzle';

export const CoordinatesForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [error, setError] = useState<AppwriteException | null>(null);

	const getInputValue = (
		elements: HTMLFormControlsCollection,
		name: string
	): string => {
		return (elements.namedItem(name) as HTMLInputElement).value;
	};

	const uploadAndRetrievePicture = async (
		elements: HTMLFormControlsCollection
	): Promise<URL | undefined> => {
		const pictureInput = elements.namedItem('picture') as HTMLInputElement;
		const picture = pictureInput.files?.[0];

		if (picture) {
			const uploadedFile = await uploadImageKey([picture]);

			return getPuzzlePiecesForView(uploadedFile[0].$id);
		}

		return undefined;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const {elements} = event.currentTarget;

		const formData = {
			name: getInputValue(elements, 'name'),
			latitude: parseFloat(getInputValue(elements, 'latitude')),
			longitude: parseFloat(getInputValue(elements, 'longitude')),
			picture: await uploadAndRetrievePicture(elements),
		};

		try {
			await createCoordinates(formData);
			formRef.current && formRef.current.reset();
		} catch (error: any) {
			setError(error as AppwriteException);
		}
	};

	return (
		<div className="card u-width-600">
			<h2 className="eyebrow-heading-1 u-padding-block-end-32 u-color-text-pink">
				Vous avez trouvé une nouvelle coordonnée ? :
			</h2>
			<form
				onSubmit={handleSubmit}
				className="u-flex-vertical u-row-gap-24"
				ref={formRef}
			>
				<ul className="form-list">
					<TextInput id="name" label="Name" type="text" />
					<TextInput id="latitude" label="Latitude" type="number" />
					<TextInput id="longitude" label="Longitude" type="number" />
					<FileInput id="picture" label="Picture" />
				</ul>
				{error && (
					<p className="u-color-text-pink u-text-center">{error.message}</p>
				)}
				<div className="u-flex-vertical u-main-center u-cross-center">
					<button type="submit" className="button">
						Noter cette coordonnée
					</button>
				</div>
			</form>
		</div>
	);
};
