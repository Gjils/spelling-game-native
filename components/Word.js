import React from "react";
import styled from "styled-components";
import { Text, Dimensions } from "react-native";

export default function Word({ wordInfo }) {
	const { word, missedIndex, context } = wordInfo;
	const windowWidth = Dimensions.get("window").width;
	const wordFontSize = Math.min(
		Math.floor((windowWidth / word.length) * 1.3),
		50,
	);
	const WordContainer = styled.View`
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
	`;
	const StyledWord = styled.Text`
		text-align: center;
		font-size: ${wordFontSize}px;
		font-weight: 900;
		color: #252525;
	`;
	const StyledContext = styled.Text`
		text-align: center;
		font-size: ${wordFontSize * 0.8}px;
		font-weight: 900;
		color: #515151;
	`;
	visibleWord = word.split("");
	visibleWord.splice(missedIndex, 1, "_");
	visibleWord = visibleWord.join("");
	return (
		<WordContainer>
			<StyledWord>{visibleWord}</StyledWord>
			{context ? <StyledContext>{context}</StyledContext> : ""}
		</WordContainer>
	);
}
