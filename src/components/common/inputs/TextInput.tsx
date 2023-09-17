import {FC, ReactNode} from 'react';

export const TextInput: FC<{
	id?: string;
	label: string;
	setValue?: (value: string) => void;
	type?: string;
	placeholder?: string;
	children?: ReactNode;
}> = ({id, label, setValue, type = 'text', placeholder = '', children}) => {
	return (
		<div className="form-item">
			<label className="label">{label}</label>
			<div className="input-text-wrapper">
				<input
					id={id}
					className="input-text"
					type={type}
					placeholder={placeholder}
					onChange={(e) => setValue && setValue(e.target.value)}
				/>
				{children}
			</div>
		</div>
	);
};
