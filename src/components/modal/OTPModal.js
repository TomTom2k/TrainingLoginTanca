import { View, Text, TextInput } from 'react-native';
import { ModalContent, BottomModal } from 'react-native-modals';
import React, { useState, useRef, useEffect } from 'react';
import ButtonCus from '../common/ButtonCus';

const OTPModal = ({ show, to, onVerifyOTP }) => {
	const refs = useRef([]);
	const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
	const [focusedIndex, setFocusedIndex] = useState(0);
	const [countdown, setCountdown] = useState(60);

	const handleOtpChange = (index, value) => {
		const newOtpValues = [...otpValues];
		newOtpValues[index] = value;
		setOtpValues(newOtpValues);

		if (value && index < otpValues.length - 1) {
			refs.current[index + 1].focus();
		} else if (!value && index > 0) {
			refs.current[index - 1].focus();
		}
	};

	const handleVerifyOTP = () => {
		const otp = otpValues.join('');
		onVerifyOTP(otp);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCountdown) => {
				if (prevCountdown === 0) {
					return 60;
				} else {
					return prevCountdown - 1;
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<BottomModal visible={show}>
			<ModalContent>
				<Text
					style={{
						fontSize: 22,
						fontWeight: '500',
						color: '#303E65',
						marginBottom: 10,
					}}
				>
					Xác minh OTP
				</Text>
				<Text
					style={{
						color: '#96A0BD',
						marginBottom: 20,
					}}
				>
					Nhập mã OTP gửi đến {to}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						gap: 20,
						marginVertical: 20,
					}}
				>
					{otpValues.map((value, index) => (
						<TextInput
							key={index}
							ref={(ref) => (refs.current[index] = ref)}
							style={{
								width: '13%',
								padding: 10,
								borderWidth: 1,
								borderRadius: 10,
								borderColor:
									focusedIndex === index
										? '#1ECC78'
										: '#F2F7FF',
								fontSize: 20,
								fontWeight: '700',
								textAlign: 'center',
								color: '#303E65',
								backgroundColor: '#F2F7FF',
							}}
							maxLength={1}
							keyboardType="numeric"
							value={value}
							onChangeText={(text) =>
								handleOtpChange(index, text)
							}
							onFocus={() => setFocusedIndex(index)}
						/>
					))}
				</View>
				<ButtonCus onPress={handleVerifyOTP}>Đồng ý</ButtonCus>
				<View
					style={{
						marginVertical: 30,
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Text>Gửi lại sau </Text>

					<Text style={{ fontWeight: '700', color: '#303E65' }}>
						({countdown}s)
					</Text>
				</View>
			</ModalContent>
		</BottomModal>
	);
};

export default OTPModal;
