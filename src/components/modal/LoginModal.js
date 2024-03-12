import { View, Text } from 'react-native';
import { ModalContent, BottomModal } from 'react-native-modals';
import PhoneInput from 'react-native-phone-number-input';
import React, { useRef, useState } from 'react';
import ButtonCus from '../common/ButtonCus';

const LoginModal = ({ show, onPress, onTouchOutside }) => {
	const phoneInput = useRef(null);
	const [value, setValue] = useState('');
	const [formattedValue, setFormattedValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handlerBtnLogin = () => {
		const formattedValueRegex = /^\+\d{2,4}\d{9}$/;

		if (formattedValueRegex.test(formattedValue)) {
			onPress(formattedValue);
			setErrorMessage('');
		} else {
			setErrorMessage('Số điện thoại không hợp lệ');
		}
	};

	return (
		<BottomModal visible={show} onTouchOutside={onTouchOutside}>
			<ModalContent>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 500,
						color: '#303E65',
						marginVertical: 10,
					}}
				>
					Đăng nhập
				</Text>
				<Text style={{ marginBottom: 40, color: '#96A0BD' }}>
					Xin chào, rất vui khi bạn đã quay lại
				</Text>
				<PhoneInput
					containerStyle={{
						width: '100',
						backgroundColor: '#F2F7FF',
						elevation: 0,
						borderRadius: 10,
					}}
					textContainerStyle={{
						borderRadius: 10,
						backgroundColor: '#F2F7FF',
					}}
					ref={phoneInput}
					defaultValue={value}
					defaultCode="VN"
					layout="second"
					onChangeText={(text) => {
						setValue(text);
					}}
					onChangeFormattedText={(text) => {
						setFormattedValue(text);
					}}
					countriesList={[]}
					withDarkTheme
					withShadow
					autoFocus
				/>
				<Text style={{ color: 'red', textAlign: 'center' }}>
					{errorMessage}
				</Text>
				<View style={{ marginTop: 20 }}>
					<ButtonCus onPress={handlerBtnLogin}>Đăng nhập</ButtonCus>
				</View>
				<View style={{ marginVertical: 30 }}>
					<Text style={{ textAlign: 'center' }}>
						Sign in with Azure AD
					</Text>
				</View>
			</ModalContent>
		</BottomModal>
	);
};

export default LoginModal;
