import {FC, ReactNode} from 'react';

export const TextInput: FC<{
	id?: string;
	label: string;
	setValue?: (value: string) => void;
	type?: string;
	placeholder?: string;
	children?: ReactNode;
	required?: boolean;
}> = ({
	id,
	label,
	setValue,
	type = 'text',
	placeholder = '',
	children,
	required = false,
}) => {
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
					required={required}
				/>
				{children}
			</div>
		</div>
	);
};
