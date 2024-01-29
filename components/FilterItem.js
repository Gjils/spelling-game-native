import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function FilterItem({
	name,
	active,
	index,
	setFilter,
}) {
	return (
		<Pressable
			style={[styles.menuItem, { backgroundColor: active ? "#252525" : "" }]}
			onPress={() => {
				setFilter(index);
			}}
		>
			<Text
				style={[styles.taskName, { color: active ? "#f8f8f8" : "#252525" }]}
			>
				{name}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	menuItem: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5,
		marginBottom: 15,
		borderWidth: 3,
		borderColor: "#252525",
		borderRadius: 15,
	},
	taskName: {
		textAlign: "center",
		fontSize: 17,
		fontWeight: "900",
	},
});
