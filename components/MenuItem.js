import React from "react";

import { Pressable, Text, StyleSheet } from "react-native";

export default function MenuItem({
	name,
	number,
	isActive,
	setActive,
	closeMenu,
}) {

	return (
		<Pressable
			style={[styles.menuItem, { backgroundColor: isActive ? "#252525" : "" }]}
			onPress={() => {
				setActive();
				closeMenu();
			}}
		>
			<Text
				style={[styles.taskNumber, { color: isActive ? "#ccccff" : "#515151" }]}
			>
				Задание {number}
			</Text>
			<Text
				style={[styles.taskName, { color: isActive ? "#f8f8f8" : "#252525" }]}
			>
				{name}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	menuItem: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
		marginBottom: 15,
		borderWidth: 3,
		borderColor: "#252525",
		borderRadius: 15,
	},
	taskNumber: {
		textAlign: "center",
		fontSize: 15,
		fontWeight: "900",
	},
	taskName: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "900",
	},
});
