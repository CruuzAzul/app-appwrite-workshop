'use client';

import {FormEvent, useState} from 'react';

import {FileUploader} from 'react-drag-drop-files';

import {uploadFiles} from '@/api/storage';
import {DropZone} from '@/components/app/storage/DropZone';
import {ErrorMessage} from '@/components/app/storage/ErrorMessage';
import {FilesToUploadList} from '@/components/app/storage/FilesToUploadList';
import {InputFile} from '@/components/app/storage/InputFile';
import {UploadButton} from '@/components/app/storage/UploadButton';

export const UploadBox = () => {
	const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleFilesChange = (files: FileList | null) => {
		if (files) {
			const updatedFiles: File[] = [...filesToUpload, ...files];
			setFilesToUpload(updatedFiles);
		}
	};

	const handleDelete = (fileToRemove: File) => {
		const filteredFiles = filesToUpload.filter((file) => file !== fileToRemove);

		setFilesToUpload(filteredFiles);
		setError(null);
	};

	const handleSubmit = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		try {
			await uploadFiles(filesToUpload);
			setFilesToUpload([]);
		} catch {
			setError("Une erreur est survenue lors de l'upload de vos fichier");
		}
	};

	const fileTypes = ['JPG', 'PNG', 'GIF'];

	return (
		<div className="u-min-width-100-percent">
			<form onSubmit={handleSubmit}>
				<div className="box is-border-dashed is-no-shadow u-padding-24">
					<div className="upload-file-box">
						<FileUploader
							multiple
							handleChange={handleFilesChange}
							name="file"
							types={fileTypes}
							classes="u-flex-vertical u-main-center u-cross-center u-gap-32"
						>
							<DropZone />
						</FileUploader>
						<InputFile
							handleFilesChange={(e) => {
								e.preventDefault();
								handleFilesChange(e.target.files);
							}}
						/>
						<FilesToUploadList
							filesToUpload={filesToUpload}
							handleDelete={handleDelete}
						/>
					</div>
					{error && <ErrorMessage error={error} />}
				</div>
				<UploadButton />
			</form>
		</div>
	);
};
