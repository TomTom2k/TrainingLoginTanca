import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import CarouselScreen from './screens/CarouselScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Splash"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Splash" component={SplashScreen} />
				<Stack.Screen name="Carousel" component={CarouselScreen} />
				<Stack.Screen name="Auth" component={AuthScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Main" component={MainScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
