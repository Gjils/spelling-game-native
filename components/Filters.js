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

import FilterItem from "./FilterItem";

export default function Filters({ visible, filters, setFilter, closeMenu }) {
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
							<Text style={styles.title}>Фильтры</Text>
						</View>
						<View style={styles.list}>
							{filters.map(({ name, active }, index) => (
								<FilterItem
									key={index * 10 + active}
									name={name}
									active={active}
									setFilter={() => {
										Vibration.vibrate(100);
										setFilter(index);
									}}
									index={index}
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
		paddingTop: 80,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	menu: {
		width: "80%",
		backgroundColor: "#f8f8f8",
		borderWidth: 3,
		borderColor: "#252525",
		borderRadius: 15,
		overflow: "hidden",
	},
	titleContainer: {
		paddingTop: 10,
		paddingBottom: 5,
		backgroundColor: "#252525",
	},
	title: {
		textAlign: "center",
		color: "#f8f8f8",
		fontWeight: "900",
		fontSize: 20,
	},
	list: {
		backgroundColor: "#f8f8f8",
		padding: 15,
		paddingBottom: 5,
	},
});
