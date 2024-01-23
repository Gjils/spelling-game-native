import styled from "styled-components";
import { Text, Pressable, View, Vibration } from "react-native";
import { MaterialIcons as Icons } from "@expo/vector-icons";

const ButtonContainer = styled.View`
	position: absolute;
	bottom: 80px;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledButton = styled.Pressable`
	padding: 15px;
	background-color: #e63244;
	border-radius: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const ButtonText = styled.Text`
	position: relative;
	bottom: 2px;
	font-size: 17px;
	font-weight: 900;
	display: flex;
	color: #f8f8f8;
`;
export default function NextButton({ showNextWord }) {
	return (
		<ButtonContainer>
			<StyledButton
				onPress={() => {
					Vibration.vibrate(100);
					showNextWord(false);
				}}
			>
				<ButtonText>Продолжить</ButtonText>
				<Icons name="navigate-next" size={30} color={"#f8f8f8"} />
			</StyledButton>
		</ButtonContainer>
	);
}
