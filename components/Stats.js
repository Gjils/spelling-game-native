import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

const Common = styled.Text`
	text-align: right;
	font-size: 30px;
	font-weight: 900;
	color: #252525;
`;
const Accuracy = styled.Text`
	text-align: right;
	font-size: 25px;
	font-weight: 900;
	color: #252525;
`;
const StreakElement = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
const StreakText = styled.Text`
	text-align: right;
	font-size: 17px;
	font-weight: 900;
	color: #ed7e40;
`;
const FireIcon = styled.View`
	padding: 0 1% 0 5px;
`;
export default function Stats({ stats }) {
	const { common, correct, streak } = stats;
	return (
		<View>
			<Common>
				{correct}/{common}
			</Common>
			<Accuracy>
				{Math.floor((correct / (common ? common : 1)) * 100)}%
			</Accuracy>
			<StreakElement>
				<StreakText>Серия из</StreakText>
				<FireIcon>
					<Icon name="fire-alt" size={18} color="#ed7e40" />
				</FireIcon>
				<StreakText>{streak}!</StreakText>
			</StreakElement>
		</View>
	);
}
