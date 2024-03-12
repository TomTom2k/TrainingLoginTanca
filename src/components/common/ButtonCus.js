import { View, Text, Pressable } from 'react-native';
import React from 'react';

const ButtonCus = ({ children, outline, onPress }) => {
	return (
		<Pressable
			style={{
				width: '100%',
				borderRadius: 10,
				backgroundColor: !outline ? '#1ECC78' : 'white',
				padding: 12,
				borderWidth: 1,
				borderColor: '#1ECC78',
			}}
			onPress={onPress}
		>
			<Text
				style={{
					textAlign: 'center',
					color: outline ? '#1ECC78' : 'white',
				}}
			>
				{children}
			</Text>
		</Pressable>
	);
};

export default ButtonCus;
