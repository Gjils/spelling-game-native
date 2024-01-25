import React from "react";
import {
	StyleSheet,
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

export default function Menu({ visible, active, tasks, setActive, closeMenu }) {
	return (
		<Modal
			visible={visible}
			animationType="slide"
			transparent={true}
			onBackdropPress={closeMenu}
		>
			<TouchableOpacity
				style={styles.menuWrapper}
				activeOpacity={1}
				onPressOut={() => {
					Vibration.vibrate(100);
					closeMenu();
				}}
			>
				<TouchableWithoutFeedback>
					<View style={styles.menu}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Задания</Text>
						</View>
						<View style={styles.list}>
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
						</View>
					</View>
				</TouchableWithoutFeedback>
			</TouchableOpacity>
		</Modal>
	);
}

const styles = StyleSheet.create({
	menuWrapper: {
		flex: 1,
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingTop: 40,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	menu: {
		width: "90%",
		backgroundColor: "#f8f8f8",
		borderWidth: 3,
		borderColor: "#252525",
		borderRadius: 15,
		overflow: "hidden",
	},
	titleContainer: {
		paddingTop: 40,
		paddingBottom: 5,
		backgroundColor: "#252525",
	},
	title: {
		textAlign: "center",
		color: "#f8f8f8",
		fontWeight: "900",
		fontSize: 25,
	},
	list: {
		backgroundColor: "#f8f8f8",
		padding: 20,
		paddingBottom: 5,
	},
});
