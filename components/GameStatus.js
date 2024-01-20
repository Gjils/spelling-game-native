import React from "react";
import styled from "styled-components";
import { View } from "react-native";

import LevelInfo from "./LevelInfo";
import Stats from "./Stats";

export default function GameStatus({ stats }) {
	return (
		<View>
			<LevelInfo stats={stats}></LevelInfo>
			<Stats stats={stats}/>
		</View>
	);
}
