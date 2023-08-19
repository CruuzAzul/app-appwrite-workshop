'use client';

import {ChangeEvent, FormEvent, useState} from 'react';

import {uploadFiles} from '@/api/storage';
import {DropZone} from '@/components/app/storage/DropZone';
import {FilesToUploadList} from '@/components/app/storage/FilesToUploadList';
import {InputFile} from '@/components/app/storage/InputFile';
import {UploadButton} from '@/components/app/storage/UploadButton';

export const UploadBox = () => {
	const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

	const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const fileList = e.target.files;

		if (fileList) {
			const updatesFiles: File[] = [...filesToUpload, ...fileList];
			setFilesToUpload(updatesFiles);
		}
	};

	const handleDelete = (fileToRemove: File) => {
		const filteredFiles = filesToUpload.filter((file) => file !== fileToRemove);

		setFilesToUpload(filteredFiles);
	};

	const handleSubmit = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		await uploadFiles(filesToUpload);
	};

	return (
		<div className="u-padding-24 u-min-width-100-percent">
			<form onSubmit={handleSubmit}>
				<div className="box is-border-dashed is-no-shadow u-padding-24">
					<div className="upload-file-box">
						<DropZone />
						<InputFile handleFilesChange={handleFilesChange} />
						<FilesToUploadList
							filesToUpload={filesToUpload}
							handleDelete={handleDelete}
						/>
					</div>
				</div>
				<UploadButton />
			</form>
		</div>
	);
};
