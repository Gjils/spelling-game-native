import React from "react";

import { View, Text, StyleSheet } from "react-native";

import TaskInfo from "./TaskInfo";
import GameStatus from "./GameStatus";

export default function Info({
	toggleMenuVisible,
	toggleFiltersVisible,
	taskInfo,
	stats,
}) {
	return (
		<View style={styles.info}>
			<TaskInfo
				toggleMenuVisible={toggleMenuVisible}
				toggleFiltersVisible={toggleFiltersVisible}
				taskInfo={taskInfo}
			/>
			<GameStatus stats={stats} />
		</View>
	);
}

const styles = StyleSheet.create({
	info: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 5,
		position: "relative",
		zIndex: 1,
	},
});
