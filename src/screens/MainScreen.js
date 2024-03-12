import { View, Text } from 'react-native';
import React from 'react';
import Modal, { ModalContent } from 'react-native-modals';

import { Ionicons } from '@expo/vector-icons';

import ButtonCus from '../components/common/ButtonCus';

const MainScreen = ({ navigation }) => {
	return (
		<View>
			<Modal visible={true} style={{ padding: 20 }}>
				<ModalContent style={{ alignItems: 'center', padding: 30 }}>
					<Ionicons
						name="checkmark-circle"
						size={75}
						color="#1ECC78"
					/>
					<Text
						style={{
							fontWeight: '600',
							fontSize: 23.5,
							color: '#303E65',
							textAlign: 'center',
							marginVertical: 10,
						}}
					>
						Chúc mừng bạn đã đăng ký thành công
					</Text>
					<Text
						style={{
							fontWeight: '400',
							fontSize: 16.5,
							color: '#7A8CB4',
							textAlign: 'center',
							marginBottom: 40,
						}}
					>
						Tanca đưa ra các giải pháp chấm công toàn diện cho doanh
						nghiệp.
					</Text>
					<View style={{ width: '50%' }}>
						<ButtonCus
							onPress={() => {
								navigation.navigate('Carousel');
							}}
						>
							Đồng ý
						</ButtonCus>
					</View>
				</ModalContent>
			</Modal>
		</View>
	);
};

export default MainScreen;
