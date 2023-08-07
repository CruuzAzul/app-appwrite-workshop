import React from 'react';

import {TextInput} from '@/components/common/TextInput';

export const PasswordInput: React.FC<{
	setValue: (value: string) => void;
	placeholder?: string;
}> = ({setValue, placeholder = ''}) => {
	const [visible, setVisible] = React.useState(false);

	return (
		<TextInput
			label="Mot de passe"
			setValue={setValue}
			placeholder={placeholder}
			type={visible ? 'text' : 'password'}
		>
			<button
				className="show-password-button"
				aria-label="show password"
				type="button"
				onClick={() => setVisible(!visible)}
			>
				<span className="icon-eye" aria-hidden="true"></span>
			</button>
		</TextInput>
	);
};
