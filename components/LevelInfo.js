import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
		<View style={styles.row}>
			{multiplier > 1 ? (
				<Text style={styles.streakElement}>x{multiplier}</Text>
			) : (
				""
			)}
			<Text style={styles.rowElement}>
				{levelPoints}/{levelCap}
			</Text>
			<RowElement>Уровень {level}</RowElement>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flex: -1,
		flexDirection: "row",
	},
	rowElement: {
		fontSize: 15,
		fontWeight: "900",
		color: "#252525",
		marginLeft: 5,
	},
	streakElement: {
		fontSize: 15,
		fontWeight: "900",
		marginLeft: 5,
		color: "#ed7e40",
	},
});
