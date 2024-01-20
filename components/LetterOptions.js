import React from "react";
import styled from "styled-components";
import { Pressable, Text, View } from "react-native";

const OptionsContainer = styled.View`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 60px;
	margin: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const LetterButton = styled.Pressable`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 5px;
	width: 50px;
	margin: 0 30px;
	border: 3px solid #252525;
	border-radius: 10px;
`;
const Letter = styled.Text`
	color: #252525;
	font-size: 40px;
	font-weight: 900;
`;

export default function LetterOptions({
	showNextWord,
	updateStats,
	options,
	correct,
}) {
	return (
		<OptionsContainer>
			{options.map((item, index) => (
				<LetterButton
					key={index}
					onPress={() => {
						showNextWord(correct == item);
						updateStats(correct == item);
					}}
				>
					<Letter>{item}</Letter>
				</LetterButton>
			))}
		</OptionsContainer>
	);
}
