import React from "react";
import { View, Text, Pressable, Vibration, StyleSheet } from "react-native";

import { FontAwesome5 as Icon } from "@expo/vector-icons";

export default function TaskInfo({
	toggleMenuVisible,
	toggleFiltersVisible,
	taskInfo,
}) {
	return (
		<View>
			<Text style={styles.taskNumber}>Задание {taskInfo.number}</Text>
			<Text style={styles.taskName}>{taskInfo.name}</Text>
			<View style={styles.row}>
				<Pressable
					style={styles.bars}
					onPress={() => {
						Vibration.vibrate(100);
						toggleMenuVisible();
					}}
				>
					<Icon name="bars" size={30} color="#252525"></Icon>
				</Pressable>
				<Pressable
					style={styles.bars}
					onPress={() => {
						Vibration.vibrate(100);
						toggleFiltersVisible();
					}}
				>
					<Icon name="filter" size={25} color="#252525"></Icon>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	taskName: {
		fontSize: 25,
		fontWeight: "900",
		color: "#252525",
	},
	taskNumber: {
		fontSize: 15,
		fontWeight: "900",
		color: "#515151",
	},
	bars: {
		marginRight: 15,
	},
	row: {
		marginTop: 5,
		height: 35,
		flex: -1,
		flexDirection: "row",
		alignItems: "center",
	},
});
