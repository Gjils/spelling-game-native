import React from "react";

import { Pressable, Text, View, StyleSheet } from "react-native";

export default function LetterOptions({ options, correct, handleAnswer }) {
	return (
		<View style={styles.optionsContainer}>
			{options.map((item, index) => (
				<Pressable
					style={styles.letterButton}
					key={index}
					onPress={() => {
						handleAnswer(correct == item);
					}}
				>
					<Text style={styles.letter}>{item}</Text>
				</Pressable>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	optionsContainer: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 60,
		margin: "auto",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	letterButton: {
		position: "relative",
		zIndex: 1,
		flex: -1,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 5,
		width: 60,
		marginTop: 0,
		marginBottom: 0,
		marginRight: 20,
		marginLeft: 20,
		borderWidth: 3,
		borderColor: "#252525",
		borderRadius: 10,
	},
	letter: {
		color: "#252525",
		fontSize: 40,
		fontWeight: "900",
	},
});
