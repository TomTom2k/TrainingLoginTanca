import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const Paginator = ({ data, currentIndex }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 120,
				justifyContent: 'center',
			}}
		>
			{data.map((_, i) => {
				const backgroundColor =
					i === currentIndex ? '#1ECC78' : '#E4ECFF';
				return (
					<View
						key={i.toString()}
						style={{
							height: 10,
							width: 10,
							borderRadius: 5,
							backgroundColor,
							marginHorizontal: 4,
						}}
					/>
				);
			})}
		</View>
	);
};

export default Paginator;
