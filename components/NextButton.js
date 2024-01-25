import { Text, Pressable, View, Vibration, StyleSheet } from "react-native";
import { MaterialIcons as Icons } from "@expo/vector-icons";

export default function NextButton({ showNextWord }) {
	return (
		<View style={styles.buttonContainer}>
			<Pressable
				style={styles.button}
				onPress={() => {
					Vibration.vibrate(100);
					showNextWord(false);
				}}
			>
				<Text style={styles.buttonText}>Продолжить</Text>
				<Icons name="navigate-next" size={30} color={"#f8f8f8"} />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		position: "absolute",
		zIndex: 1,
		bottom: 80,
		left: 0,
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		padding: 15,
		backgroundColor: "#e63244",
		borderRadius: 15,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	buttonText: {
		position: "relative",
		bottom: 2,
		fontSize: 17,
		fontWeight: "900",
		color: "#f8f8f8",
	},
});
