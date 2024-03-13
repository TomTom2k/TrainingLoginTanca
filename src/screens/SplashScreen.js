// SplashScreen.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Image, useWindowDimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
	const { width } = useWindowDimensions();
	useEffect(() => {
		const checkToken = async () => {
			try {
				const token = await AsyncStorage.getItem('token');
				if (token) {
					navigation.navigate('Home');
				} else {
					const timer = setTimeout(() => {
						navigation.navigate('Carousel');
					}, 300);
					return () => clearTimeout(timer);
				}
			} catch (error) {
				console.error('Lỗi khi kiểm tra token:', error);
			}
		};

		checkToken();
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				padding: 20,
			}}
		>
			<Image
				source={require('../assets/images/logo-tanca.png')}
				style={{ width: width, resizeMode: 'contain' }}
			/>
		</View>
	);
};

export default SplashScreen;
