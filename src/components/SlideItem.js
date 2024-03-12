import { View, Text, useWindowDimensions, Image } from 'react-native';
import React from 'react';

const SlideItem = ({ item }) => {
	const { width, height } = useWindowDimensions();
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ height: height * 0.4, justifyContent: 'flex-end' }}>
				<Image
					source={item.image}
					style={{ width: width - 20, resizeMode: 'contain' }}
				/>
			</View>
			<View style={{ height: 120, paddingTop: 20 }}>
				<Text
					style={{
						fontSize: 25,
						maxWidth: width - 70,
						textAlign: 'center',
					}}
				>
					{item.content}
				</Text>
			</View>
		</View>
	);
};

export default SlideItem;
