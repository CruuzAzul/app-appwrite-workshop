'use client';

import React, {useRef, useState} from 'react';

import {AppwriteException} from 'appwrite';

import {createCoordinates} from '@/api/modules/coordinates';
import {TextInput} from '@/components/common/inputs/TextInput';

export const CoordinatesForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [error, setError] = useState<AppwriteException | null>(null);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const {elements} = event.currentTarget;

		const data = {
			name: (elements.namedItem('name') as HTMLInputElement).value,
			latitude: parseFloat(
				(elements.namedItem('latitude') as HTMLInputElement).value
			),
			longitude: parseFloat(
				(elements.namedItem('longitude') as HTMLInputElement).value
			),
		};

		try {
			await createCoordinates(data);

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
