import React from "react";
import styled from "styled-components";
import { View } from "react-native";

export default function LevelBar({ stats }) {
	const { levelPoints, levelCap } = stats;
	const StyledLevelBar = styled.View`
		height: 20px;
		border-radius: 15px 15px 0 0;
	`;

	const Progress = styled.View`
		width: ${Math.floor((levelPoints / levelCap) * 100)}%;
		height: 100%;
		background-color: #a8e4a0;
	`;
	return (
		<StyledLevelBar>
			<Progress></Progress>
		</StyledLevelBar>
	);
}
