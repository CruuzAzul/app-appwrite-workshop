import {FC, useState} from 'react';

import {TextInput} from '@/components/common/inputs/TextInput';
import {useScopedI18n} from '@/locales/client';

export const PasswordInput: FC<{
	setValue: (value: string) => void;
	placeholder?: string;
}> = ({setValue, placeholder = ''}) => {
	const t = useScopedI18n('login');
	const [visible, setVisible] = useState(false);

	return (
		<TextInput
			label={t('password')}
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
