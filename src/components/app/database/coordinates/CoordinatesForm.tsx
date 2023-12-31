'use client';

import React, {useRef, useState} from 'react';

import {AppwriteException} from 'appwrite';

import {TextInput} from '@/components/common/inputs/TextInput';
import {useScopedI18n} from '@/locales/client';
import {createCoordinates} from '@/workshop/api/modules/database/coordinates';

export const CoordinatesForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const t = useScopedI18n('databases.coordinates.form');
	const [error, setError] = useState<AppwriteException | null>(null);

	const getInputValue = (
		elements: HTMLFormControlsCollection,
		name: string
	): string => {
		return (elements.namedItem(name) as HTMLInputElement).value;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const {elements} = event.currentTarget;

		const formData = {
			name: getInputValue(elements, 'name'),
			latitude: parseFloat(getInputValue(elements, 'latitude')),
			longitude: parseFloat(getInputValue(elements, 'longitude')),
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
				{t('title')}
			</h2>
			<form
				onSubmit={handleSubmit}
				className="u-flex-vertical u-row-gap-24"
				ref={formRef}
			>
				<ul className="form-list">
					<TextInput id="name" label="Name" type="text" required />
					<TextInput id="latitude" label="Latitude" type="number" required />
					<TextInput id="longitude" label="Longitude" type="number" required />
				</ul>
				{error && (
					<p className="u-color-text-pink u-text-center">{error.message}</p>
				)}
				<div className="u-flex-vertical u-main-center u-cross-center">
					<button type="submit" className="button">
						{t('submitButton')}
					</button>
				</div>
			</form>
		</div>
	);
};
