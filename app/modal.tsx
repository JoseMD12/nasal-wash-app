import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
	return (
		<View className='bg-[#151718]' style={styles.container}>
			<Text className='text-3xl font-bold leading-8 text-white'>
				This is a modal
			</Text>
			<Link href='/modal' dismissTo style={styles.link}>
				<Text className='leading-[30px] text-base text-[#0a7ea4]'>
					Go to home screen
				</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
