import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const StyledRow = styled.View`
	display: flex;
	flex-direction: row;
`;

const RowElement = styled.Text`
	font-size: 15px;
	font-weight: 900;
	color: #252525;
	margin-left: 5px;
`;
const StreakElement = styled(RowElement)`
	color: #ed7e40;
`;
export default function LevelInfo({ stats }) {
	const { level, levelCap, levelPoints, multiplier } = stats;
	return (
		<StyledRow>
			{multiplier > 1 ? <StreakElement>x{multiplier}</StreakElement> : ""}
			<RowElement>{levelPoints}/{levelCap}</RowElement>
			<RowElement>Уровень {level}</RowElement>
		</StyledRow>
	);
}
