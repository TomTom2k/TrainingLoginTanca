// SplashScreen.js

import React, { useEffect } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	useWindowDimensions,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
	const { width } = useWindowDimensions();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate('Carousel');
		}, 300);
		return () => clearTimeout(timer);
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
