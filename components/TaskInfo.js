import React from "react";
import { View, Text, Pressable, Vibration, StyleSheet } from "react-native";
import styled from "styled-components";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

export default function TaskInfo({ toggleVisible, taskInfo }) {
	return (
		<View>
			<Text style={styles.taskNumber}>Задание {taskInfo.number}</Text>
			<Text style={styles.taskName}>{taskInfo.name}</Text>
			<Pressable
				style={styles.bars}
				onPress={() => {
					Vibration.vibrate(100);
					toggleVisible();
				}}
			>
				<Icon name="bars" size={30} color="#252525"></Icon>
			</Pressable>
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
		marginTop: 5,
	},
});
