import React from "react";
import { View, Text, Pressable, Vibration } from "react-native";
import styled from "styled-components";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

const TaskName = styled.Text`
	font-size: 25px;
	font-weight: 900;
	color: #252525;
`;
const TaskNumber = styled.Text`
	font-size: 15px;
	font-weight: 900;
	color: #515151;
`;
const StyledBars = styled.Pressable`
	margin-top: 5px;
`;
export default function TaskInfo({ toggleVisible, taskInfo }) {
	return (
		<View>
			<TaskNumber>Задание {taskInfo.number}</TaskNumber>
			<TaskName>{taskInfo.name}</TaskName>
			<StyledBars
				onPress={() => {
					Vibration.vibrate(100);
					toggleVisible();
				}}
			>
				<Icon name="bars" size={30} color="#252525"></Icon>
			</StyledBars>
		</View>
	);
}
