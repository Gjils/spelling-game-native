import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

export default function Stats({ stats }) {
	const { common, correct, streak } = stats;
	return (
		<View>
			<Text style={styles.common}>
				{correct}/{common}
			</Text>
			<Text style={styles.accuracy}>
				{Math.floor((correct / (common ? common : 1)) * 100)}%
			</Text>
			{streak >= 3 ? (
				<View style={styles.streakElement}>
					<Text style={styles.streakText}>Серия из</Text>
					<View style={styles.fireIcon}>
						<Icon name="fire-alt" size={18} color="#ed7e40" />
					</View>
					<Text style={styles.streakText}>{streak}!</Text>
				</View>
			) : (
				""
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	common: {
		textAlign: "right",
		fontSize: 30,
		fontWeight: "900",
		color: "#252525",
	},
	accuracy: {
		textAlign: "right",
		fontSize: 25,
		fontWeight: "900",
		color: "#252525",
	},
	streakElement: {
		flex: -1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	streakText: {
		textAlign: "right",
		fontSize: 17,
		fontWeight: "900",
		color: "#ed7e40",
	},
	fireIcon: {
		paddingTop: 0,
		paddingRight: "1%",
		paddingBottom: 0,
		paddingLeft: 5,
	},
});
