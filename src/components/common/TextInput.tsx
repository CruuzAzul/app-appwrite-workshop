import React from 'react';

export const TextInput: React.FC<{
	label: string;
	setValue: (value: string) => void;
	type?: string;
	placeholder?: string;
	children?: React.ReactNode;
}> = ({label, setValue, type = 'text', placeholder = '', children}) => {
	return (
		<div className="form-item">
			<label className="label">{label}</label>
			<div className="input-text-wrapper">
				<input
					className="input-text"
					type={type}
					placeholder={placeholder}
					onChange={(e) => setValue(e.target.value)}
				/>
				{children}
			</div>
		</div>
	);
};
