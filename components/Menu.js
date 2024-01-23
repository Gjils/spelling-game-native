import React from "react";
import {
	Modal,
	Text,
	View,
	Button,
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ScrollView,
	Vibration,
} from "react-native";
import styled from "styled-components";

import MenuItem from "./MenuItem";

const StyledMenuWrapper = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 40px;
	background-color: rgba(0, 0, 0, 0.4);
`;
const StyledMenu = styled.View`
	width: 90%;
	background-color: #f8f8f8;
	border: 3px solid #252525;
	border-radius: 15px;
	overflow: hidden;
`;
const MenuTitleContainer = styled.View`
	padding-top: 20px;
	padding: 40px 0 5px 0;
	background-color: #252525;
`;
const MenuTitle = styled.Text`
	text-align: center;
	color: #f8f8f8;
	font-weight: 900;
	font-size: 25px;
`;
const MenuList = styled.View`
	background-color: #f8f8f8;
	padding: 20px 20px 5px 20px;
`;

export default function Menu({ visible, active, tasks, setActive, closeMenu }) {
	return (
		<Modal
			visible={visible}
			animationType="slide"
			transparent={true}
			onBackdropPress={closeMenu}
		>
			<StyledMenuWrapper
				activeOpacity={1}
				onPressOut={() => {
					Vibration.vibrate(100);
					closeMenu();
				}}
			>
				<TouchableWithoutFeedback>
					<StyledMenu>
						<MenuTitleContainer>
							<MenuTitle>Задания</MenuTitle>
						</MenuTitleContainer>
						<MenuList>
							{tasks.map(({ name, number }, index) => (
								<MenuItem
									key={index}
									name={name}
									number={number}
									isActive={index === active}
									setActive={() => {
										Vibration.vibrate(100);
										setActive(index);
									}}
									closeMenu={closeMenu}
								/>
							))}
						</MenuList>
					</StyledMenu>
				</TouchableWithoutFeedback>
			</StyledMenuWrapper>
		</Modal>
	);
}
