import {FC, useState} from 'react';

import {TextInput} from '@/components/common/inputs/TextInput';

export const PasswordInput: FC<{
	setValue: (value: string) => void;
	placeholder?: string;
}> = ({setValue, placeholder = ''}) => {
	const [visible, setVisible] = useState(false);

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
				<span className="icon-eye" aria-hidden="true" />
			</button>
		</TextInput>
	);
};
