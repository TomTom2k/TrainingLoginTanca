import { View, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import ButtonCus from '../components/common/ButtonCus';
import LoginModal from '../components/modal/LoginModal';
import OTPModal from '../components/modal/OTPModal';
import RegisModal from '../components/modal/RegisModal';

const AuthScreen = ({ navigation, route }) => {
	const { isLogin } = route.params;
	const [showLogin, setShowLogin] = useState(isLogin);
	const [showRegis, setShowRegis] = useState(!isLogin);
	const [showOTP, setShowOTP] = useState(false);
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const handlerBtnLogin = (phoneFormat) => {
		setShowOTP(true);
		setShowLogin(false);
		setPhoneNumber(phoneFormat);
		setName('');
	};
	const handlerBtnRegis = (data) => {
		setShowOTP(true);
		setShowRegis(false);
		setPhoneNumber(data.phoneNumber);
		setName(data.name);
	};
	const handlerBtnVerifyOTP = (data) => {
		console.log(name);
		if (data.length === 5) {
			if (name) {
				navigation.navigate('Main');
			} else {
				navigation.navigate('Home');
			}
			setShowOTP(false);
		}
	};
	const handlerOutsideLoginModal = () => {
		setShowLogin(false);
		setShowRegis(false);
		setShowOTP(false);
	};
	return (
		<ImageBackground
			source={require('../assets/images/bg-login.svg')}
			style={{ flex: 1, resizeMode: 'cover' }}
		>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 0.8,
				}}
			>
				<Image source={require('../assets/images/logo-tanca.png')} />
			</View>
			<View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
				<View style={{ flex: 1 }}>
					<ButtonCus outline onPress={() => setShowLogin(true)}>
						Login
					</ButtonCus>
				</View>
				<View style={{ flex: 1 }}>
					<ButtonCus onPress={() => setShowRegis(true)}>
						Join Now
					</ButtonCus>
				</View>
			</View>
			<LoginModal
				show={showLogin}
				onPress={handlerBtnLogin}
				onTouchOutside={handlerOutsideLoginModal}
			/>
			<RegisModal
				show={showRegis}
				onPress={handlerBtnRegis}
				onTouchOutside={handlerOutsideLoginModal}
			/>
			<OTPModal
				show={showOTP}
				to={phoneNumber}
				onVerifyOTP={handlerBtnVerifyOTP}
			/>
		</ImageBackground>
	);
};

export default AuthScreen;
