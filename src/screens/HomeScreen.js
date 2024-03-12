import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';

import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

const DATA = [
	{
		id: '1',
		name: 'Coffee House',
		address: '64A Lữ Gia, P. 15, Q. 11, HCM',
		leader: 'Trịnh Quốc Doanh',
	},
	{
		id: '2',
		name: 'Trà sữa Gongcha Bình Tân',
		address: '385 Đường số 7, Bình Trị Đông B, Q. 12, HCM',
		leader: 'Trịnh Quốc Doanh',
	},
];

const JobItem = ({ item }) => {
	return (
		<Pressable
			style={{
				flex: 1,
				borderRadius: 5,
				backgroundColor: 'white',
				marginBottom: 20,
			}}
		>
			<View
				style={{
					padding: 10,
					flexDirection: 'row',
					alignItems: 'center',
					gap: 10,
				}}
			>
				<FontAwesome name="building" size={24} color="#1ECC78" />
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontWeight: '600',
							fontSize: 19,
							color: '#303E65',
						}}
					>
						{item.name}
					</Text>
					<Text
						style={{
							fontWeight: '400',
							fontSize: 13,
							color: '#8793B4',
						}}
					>
						{item.address}
					</Text>
				</View>
				<FontAwesome
					name="arrow-circle-right"
					size={24}
					color="#1ECC78"
				/>
			</View>
			<View
				style={{
					borderTopWidth: 1,
					borderColor: '#F2F7FF',
					padding: 10,
					flexDirection: 'row',
					alignItems: 'center',
					gap: 10,
				}}
			>
				<Feather name="users" size={16} color="#8793B4" />
				<Text
					style={{
						fontWeight: '400',
						fontSize: 15,
						color: '#303E65',
					}}
				>
					{item.leader}
				</Text>
			</View>
		</Pressable>
	);
};

const HomeScreen = ({ navigation }) => {
	const [data, setData] = useState(DATA);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#F3FBF9',
				padding: 20,
				paddingTop: 40,
			}}
		>
			<View>
				<Pressable onPress={() => navigation.navigate('Carousel')}>
					<MaterialIcons
						name="arrow-back-ios"
						size={24}
						color="#A3B0D6"
					/>
				</Pressable>
			</View>
			<Text
				style={{
					color: '#344268',
					fontSize: 30,
					fontWeight: '600',
					marginVertical: 20,
				}}
			>
				Chọn của hàng
			</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => <JobItem item={item} />}
			/>
		</View>
	);
};

export default HomeScreen;
