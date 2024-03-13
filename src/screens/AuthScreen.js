import { View, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import ButtonCus from '../components/common/ButtonCus';
import LoginModal from '../components/modal/LoginModal';
import OTPModal from '../components/modal/OTPModal';
import RegisModal from '../components/modal/RegisModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthScreen = ({ navigation, route }) => {
	const { isLogin } = route.params;
	const [showLogin, setShowLogin] = useState(isLogin);
	const [showRegis, setShowRegis] = useState(!isLogin);
	const [showOTP, setShowOTP] = useState(false);
	const [name, setName] = useState('');
	const [user, setUser] = useState(null);
	const handlerBtnLogin = (data) => {
		setUser(data);
		setShowOTP(true);
		setShowLogin(false);
	};
	const handlerBtnRegis = (data) => {
		setShowOTP(true);
		setShowRegis(false);
		setName(data.name);
		setUser({
			phoneNumber: data.phoneNumber,
		});
	};
	const handlerBtnVerifyOTP = async (data) => {
		let errorMessage = '';
		if (data.length === 5) {
			if (name) {
				setShowOTP(false);
				navigation.navigate('Main');
			} else {
				if (user?.OTP === data) {
					await AsyncStorage.setItem('token', user.token);
					setShowOTP(false);
					navigation.navigate('Home');
				} else {
					errorMessage = 'OTP không trùng khớp';
				}
			}
		}
		return errorMessage;
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
				to={user}
				onVerifyOTP={handlerBtnVerifyOTP}
			/>
		</ImageBackground>
	);
};

export default AuthScreen;
