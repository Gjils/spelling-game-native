import { Component } from "react";
import styled from "styled-components";
import { Text, Dimensions, View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default class Word extends Component {
	render() {
		const { wordInfo, wordOpacity, shakingStyle, answered } = this.props;
		const { word, missedIndex, context } = wordInfo;
		const windowWidth = Dimensions.get("window").width;
		const wordFontSize = Math.min(
			Math.floor((windowWidth / word.length) * 1.3),
			50,
		);

		let splittedWord = word.split("");

		return (
			<Animated.View
				style={[
					{
						opacity: wordOpacity,
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						width: "100%",
						height: "100%",
						zIndex: 0,
					},
					shakingStyle,
				]}
			>
				<View style={styles.letterContainer}>
					{splittedWord.map((item, index) => {
						if (index == missedIndex) {
							if (answered) {
								return (
									<Text
										style={[
											styles.highLetter,
											{ fontSize: wordFontSize },
										]}
										key={index}
									>
										{item}
									</Text>
								);
							} else {
								return (
									<Text
										style={[styles.letter, { fontSize: wordFontSize }]}
										key={index}
									>
										_
									</Text>
								);
							}
						}
						return (
							<Text
								style={[styles.letter, { fontSize: wordFontSize }]}
								key={index}
							>
								{item}
							</Text>
						);
					})}
				</View>
				{context ? (
					<View
						context={[styles.context, { fontSize: wordFontSize * 0.8 }]}
					>
						{context}
					</View>
				) : (
					""
				)}
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	letterContainer: {
		flex: -1,
		flexDirection: "row",
	},
	letter: {
		fontWeight: "900",
		color: "#252525",
	},
	highLetter: {
		fontWeight: "900",
		textTransform: "capitalize",
		color: "#a8e4a0",
	},
	context: {
		textAlign: "center",
		fontWeight: "900",
		color: "#515151",
	},
});
