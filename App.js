import { View } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import Navigation from './src/Navigation';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<Navigation />
			<ModalPortal />
		</View>
	);
}
