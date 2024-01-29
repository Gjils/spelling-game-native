import { StatusBar, View } from "react-native";

import { useState } from "react";

import Menu from "./components/Menu";
import MainWindow from "./components/MainWindow";


export default function App() {
	const [menuVisible, setMenuVisible] = useState(false);
	const [tasksList, setTasksList] = useState([
		{
			name: "Корни",
			number: 9,
		},
		{
			name: "Приставки",
			number: 10,
		},
		{
			name: "Суффиксы",
			number: 11,
		},
		{
			name: "Глаголы",
			number: 12,
		},
	]);
	const [activeTask, setActiveTask] = useState(0);

	return (
		<View style={container}>
			<MainWindow
				toggleMenuVisible={() => {
					setMenuVisible(!menuVisible);
				}}
				taskInfo={tasksList[activeTask]}
				key={tasksList[activeTask].number}
			/>
			<Menu
				visible={menuVisible}
				tasks={tasksList}
				active={activeTask}
				setActive={setActiveTask}
				closeMenu={() => {
					setMenuVisible(false);
				}}
			/>
			<StatusBar style="auto"></StatusBar>
		</View>
	);
}

const container = {
	width: "100%",
	height: "100%",
	padding: 15,
	backgroundColor: "#ccccff",
};
