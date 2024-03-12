import {
	View,
	Text,
	FlatList,
	Animated,
	Button,
	Pressable,
} from 'react-native';
import React, { useRef, useState } from 'react';
import SlideItem from '../components/SlideItem';
import Paginator from '../components/Paginator';
import ButtonCus from '../components/common/ButtonCus';

const slides = [
	{
		id: '1',
		image: require('../assets/images/slide-image1.png'),
		content: 'Chấm công qua GPS, Wifi, QR Code tích hợp sâu với AI',
	},
	{
		id: '2',
		image: require('../assets/images/slide-image2.png'),
		content: 'Đăng ký Ca làm, Xếp ca làm tự động',
	},
	{
		id: '3',
		image: require('../assets/images/slide-image3.png'),
		content: 'Giao việc, quản lý công việc, quy trình và tiến độ',
	},
	{
		id: '4',
		image: require('../assets/images/slide-image4.png'),
		content: 'Ứng lương, nhận phiếu lương và tiền lương hàng tháng',
	},
	{
		id: '5',
		image: require('../assets/images/slide-image5.png'),
		content: 'Số hóa 100% giấy tờ trong doanh nghiệp',
	},
	{
		id: '6',
		image: require('../assets/images/slide-image6.png'),
		content: 'Quản lý các thông báo, bản tin nội bộ',
	},
	{
		id: '7',
		image: require('../assets/images/slide-image7.png'),
		content: 'Quản lý vị trí nhân viên trên bản đồ số',
	},
];

const CarouselScreen = ({ navigation }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const onViewableItemsChanged = useRef(({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setCurrentIndex(viewableItems[0].index);
		}
	}).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
	return (
		<View style={{ flex: 1, padding: 10 }}>
			<View style={{ flex: 3 }}>
				<FlatList
					data={slides}
					renderItem={({ item }) => <SlideItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={(item) => item.id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={onViewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
				/>
			</View>
			<Paginator data={slides} currentIndex={currentIndex} />
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<View style={{ flex: 1 }}>
					<ButtonCus
						outline
						onPress={() =>
							navigation.navigate('Auth', { isLogin: true })
						}
					>
						Login
					</ButtonCus>
				</View>
				<View style={{ flex: 1 }}>
					<ButtonCus
						onPress={() =>
							navigation.navigate('Auth', { isLogin: false })
						}
					>
						Join Now
					</ButtonCus>
				</View>
			</View>
			<View style={{ marginTop: 20, marginBottom: 80 }}>
				<Text style={{ textAlign: 'center' }}>
					Sign in with Azure AD
				</Text>
			</View>
		</View>
	);
};

export default CarouselScreen;
