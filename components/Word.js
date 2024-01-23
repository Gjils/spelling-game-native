import React from "react";
import styled from "styled-components";
import { Text, Dimensions } from "react-native";

export default function Word({ wordInfo, answered }) {
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
	const LetterContainer = styled.View`
		display: flex;
		flex-direction: row;
	`;
	const StyledLetter = styled.Text`
		font-size: ${wordFontSize}px;
		font-weight: 900;
		color: #252525;
	`;
	const HighLetter = styled.Text`
		font-size: ${wordFontSize}px;
		font-weight: 900;
		text-transform: capitalize;
		color: #a8e4a0;
	`;
	const StyledContext = styled.Text`
		text-align: center;
		font-size: ${wordFontSize * 0.8}px;
		font-weight: 900;
		color: #515151;
	`;
	let splittedWord = word.split("");
	return (
		<WordContainer>
			<LetterContainer>
				{splittedWord.map((item, index) => {
					if (index == missedIndex) {
						if (answered) {
							return <HighLetter key={index}>{item}</HighLetter>;
						} else {
							return <StyledLetter key={index}>_</StyledLetter>;
						}
					}
					return <StyledLetter key={index}>{item}</StyledLetter>;
				})}
			</LetterContainer>
			{context ? <StyledContext>{context}</StyledContext> : ""}
		</WordContainer>
	);
}
