import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default function LevelBar({ stats, progressWidth }) {
	return (
		<View style={styles.levelBar}>
			<Animated.View
				style={{ ...styles.progress, width: progressWidth }}
			></Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	levelBar: {
		height: 20,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	progress: {
		height: "100%",
		backgroundColor: "#a8e4a0",
	},
});
