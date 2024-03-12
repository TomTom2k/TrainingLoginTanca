import { View, Text, TextInput } from 'react-native';
import { ModalContent, BottomModal } from 'react-native-modals';
import PhoneInput from 'react-native-phone-number-input';
import React, { useRef, useState } from 'react';
import ButtonCus from '../common/ButtonCus';

const RegisModal = ({ show, onPress, onTouchOutside }) => {
	const phoneInput = useRef(null);
	const [name, setName] = useState('');
	const [value, setValue] = useState('');
	const [formattedValue, setFormattedValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handlerBtnRegis = () => {
		const formattedValueRegex = /^\+\d{2,4}\d{9}$/;
		if (formattedValueRegex.test(formattedValue)) {
			onPress({
				phoneNumber: formattedValue,
				name: name,
			});
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
					Đăng ký
				</Text>
				<Text style={{ marginBottom: 40, color: '#96A0BD' }}>
					Hãy cho chúng tôi biết về bạn
				</Text>
				<TextInput
					style={{
						backgroundColor: '#F2F7FF',
						marginBottom: 20,
						padding: 15,
						borderRadius: 10,
						fontSize: 16,
					}}
					placeholder="Nhập họ và tên"
					placeholderTextColor={'#DCE7F9'}
					onChangeText={(text) => setName(text)}
				/>
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
					placeholder="Nhập số điện thoại"
				/>
				<Text style={{ color: 'red', textAlign: 'center' }}>
					{errorMessage}
				</Text>
				<View style={{ marginTop: 20 }}>
					<ButtonCus onPress={handlerBtnRegis}>Đăng ký</ButtonCus>
				</View>
			</ModalContent>
		</BottomModal>
	);
};

export default RegisModal;
