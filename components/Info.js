import React from "react";
import styled from "styled-components";
import { View, Text, StyleSheet } from "react-native";

import TaskInfo from "./TaskInfo";
import GameStatus from "./GameStatus";

const StyledInfo = styled.View``;
export default function Info({ toggleVisible, taskInfo, stats }) {
	return (
		<View style={styles.info}>
			<TaskInfo toggleVisible={toggleVisible} taskInfo={taskInfo} />
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
