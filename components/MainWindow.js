import { useState, useEffect } from "react";
import { View, Text, Vibration } from "react-native";
import styled from "styled-components";

import LevelBar from "./LevelBar";
import Info from "./Info";
import Word from "./Word";
import LetterOptions from "./LetterOptions";
import NextButton from "./NextButton";

import wordsData from "../data/words.json";

function shuffleArray(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

const Container = styled.View`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	border: 3px solid #252525;
	height: 100%;
	background-color: #f8f8f8;
`;

export default function MainWindow({ toggleVisible, taskInfo }) {
	const [words, setWords] = useState([]);
	const [filters, setFilters] = useState([]);
	const [visibleWords, setVisibleWords] = useState([]);
	const [stats, setStats] = useState({
		common: 0,
		correct: 0,
		level: 1,
		levelPoints: 0,
		levelCap: 100,
		multiplier: 1,
		streak: 0,
	});
	const [answerStatus, setAnswerStatus] = useState({
		answered: false,
	});
	const [handled, setHandled] = useState(false);
	useEffect(() => {
		const data = wordsData[taskInfo.number];
		setWords(data.words);
		setFilters(data.filters.map((item) => ({ ...item, active: true })));
		setVisibleWords(shuffleArray(data.words));
	}, []);
	const setFilteredWords = (filters) => {
		let newWords = [...words];
		filters.forEach(({ active, name }) => {
			if (!active) {
				newWords = newWords.filter(({ type }) => !type.includes(name));
			}
		});
		setVisibleWords(shuffleArray(newWords));
	};
	const setFilter = (changedIndex) => {
		const newFilters = filters.map((item, index) =>
			changedIndex === index ? { ...item, active: !item.active } : item,
		);
		setFilters(newFilters);
		setFilteredWords(newFilters);
	};

	const showNextWord = (correct) => {
		const newWords = [...visibleWords];
		const current = newWords.splice(0, 1)[0];
		if (correct) {
			newWords.push(current);
		} else {
			newWords.splice(15, 0, current);
		}
		setHandled(true);
		setTimeout(() => {
			setVisibleWords(newWords);
			setAnswerStatus({ answered: false });
			setHandled(false);
		}, 500);
	};

	const updateStats = (correct) => {
		const newStats = { ...stats };
		newStats.common += 1;
		if (correct) {
			newStats.correct += 1;
			newStats.streak += 1;
			newStats.multiplier = Math.floor(newStats.streak / 10) + 1;
			newStats.levelPoints += 10 * newStats.multiplier;
			if (newStats.levelPoints >= newStats.levelCap) {
				newStats.levelPoints -= newStats.levelCap;
				newStats.levelCap += 10;
				newStats.level += 1;
			}
		} else {
			newStats.streak = 0;
			newStats.multiplier = 1;
		}
		setStats(newStats);
	};

	const handleAnswer = (correct) => {
		const newAnswerStatus = {
			answered: true,
			correct: correct,
		};
		if (correct) {
			Vibration.vibrate(100);
			showNextWord(correct);
		} else {
			Vibration.vibrate(300);
		}
		updateStats(correct);
		setAnswerStatus(newAnswerStatus);
	};

	let wordContent;
	if (words.length == 0) {
		wordContent = <Text>Загрузка...</Text>;
	} else {
		wordContent = (
			<Word wordInfo={visibleWords[0]} answered={answerStatus.answered} />
		);
	}

	let OptionsContent;
	if (words.length == 0 || handled) {
		OptionsContent = <></>;
	} else if (!answerStatus.answered) {
		OptionsContent = (
			<LetterOptions
				correct={visibleWords[0].missedLetter}
				options={visibleWords[0].options}
				handleAnswer={handleAnswer}
			/>
		);
	} else if (!answerStatus.correct) {
		OptionsContent = <NextButton showNextWord={showNextWord} />;
	}
	return (
		<Container>
			<LevelBar stats={stats} />
			<Info toggleVisible={toggleVisible} taskInfo={taskInfo} stats={stats} />
			{wordContent}
			{OptionsContent}
		</Container>
	);
}
