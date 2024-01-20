import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

import TaskInfo from "./TaskInfo";
import GameStatus from "./GameStatus";

const StyledInfo = styled.View`
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	padding: 0 10px;
	margin-top: 5px;
`;
export default function Info({ toggleVisible, taskInfo, stats }) {
	return (
		<StyledInfo>
			<TaskInfo toggleVisible={toggleVisible} taskInfo={taskInfo} />
			<GameStatus stats={stats} />
		</StyledInfo>
	);
}
