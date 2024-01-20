import React from "react";
import styled from "styled-components";
import { Pressable, Text } from "react-native";

export default function MenuItem({
	name,
	number,
	isActive,
	setActive,
	closeMenu,
}) {
	const StyledMenuItem = styled.Pressable`
		padding: 10px 5px;
		margin-bottom: 15px;
		border: 3px solid #252525;
		background-color: ${isActive ? "#252525" : ""};
		border-radius: 15px;
	`;
	const TaskNumber = styled.Text`
		text-align: center;
		font-size: 15px;
		font-weight: 900;
		color: ${isActive ? "#ccccff" : "#515151"};
	`;
	const TaskName = styled.Text`
		text-align: center;
		font-size: 20px;
		font-weight: 900;
		color: ${isActive ? "#f8f8f8" : "#252525"};
	`;
	return (
		<StyledMenuItem
			onPress={() => {
				setActive();
				closeMenu();
			}}
		>
			<TaskNumber>Задание {number}</TaskNumber>
			<TaskName>{name}</TaskName>
		</StyledMenuItem>
	);
}
