import { useState, useEffect, useRef } from "react";
import { View, Text, Vibration } from "react-native";
import styled from "styled-components";

import LevelBar from "./LevelBar";
import Info from "./Info";
import Word from "./Word";
import LetterOptions from "./LetterOptions";
import NextButton from "./NextButton";

import wordsData from "../data/words.json";

import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	withSequence,
	withRepeat,
} from "react-native-reanimated";

// Array shuffle function
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

export default function MainWindow({ toggleVisible, taskInfo }) {

	const wordOpacity = useSharedValue(1);
	const wordShaking = useSharedValue(0);
	const shakingStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: wordShaking.value }],
	}));
	const progressWidth = useSharedValue("0%");
	// Init states
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
		progress: 0,
		previousProgress: 0,
	});
	const [answerStatus, setAnswerStatus] = useState({
		answered: false,
	});

	// Load data
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

	// Filters func
	const setFilter = (changedIndex) => {
		const newFilters = filters.map((item, index) =>
			changedIndex === index ? { ...item, active: !item.active } : item,
		);
		setFilters(newFilters);
		setFilteredWords(newFilters);
	};

	// Showing next word
	const showNextWord = (correct) => {
		const newWords = [...visibleWords];
		const current = newWords.splice(0, 1)[0];
		if (correct) {
			newWords.push(current);
		} else {
			newWords.splice(15, 0, current);
		}
		wordOpacity.value = withTiming(0, {
			duration: 400,
		});

		setTimeout(() => {
			setVisibleWords(newWords);
			setAnswerStatus({ answered: false });
			wordOpacity.value = withTiming(1, {
				duration: 100,
			});
		}, 400);
	};

	const updateStats = (correct) => {
		const newStats = { ...stats };
		newStats.common += 1;
		if (correct) {
			newStats.correct += 1;
			newStats.streak += 1;
			newStats.levelPoints += 10 * newStats.multiplier;
			newStats.multiplier = Math.floor(newStats.streak / 10) + 1;
			if (newStats.levelPoints >= newStats.levelCap) {
				newStats.levelPoints -= newStats.levelCap;
				newStats.levelCap += 10;
				newStats.level += 1;
			}
		} else {
			newStats.streak = 0;
			newStats.multiplier = 1;
		}
		newStats.previousProgress = newStats.progress;
		progressWidth.value = withTiming(
			Math.floor((newStats.levelPoints / newStats.levelCap) * 100) + "%",
		);
		newStats.progress = Math.floor(
			(newStats.levelPoints / newStats.levelCap) * 100,
		);
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
			const OFFSET = 10,
				TIME = 40;
			wordShaking.value = withSequence(
				// start from -OFFSET
				withTiming(-OFFSET, { duration: TIME / 2 }),
				// shake between -OFFSET and OFFSET 5 times
				withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
				// go back to 0 at the end
				withTiming(0, { duration: TIME / 2 }),
			);
		}
		updateStats(correct);
		setAnswerStatus(newAnswerStatus);
	};

	let wordContent;
	if (words.length == 0) {
		wordContent = <Text>Загрузка...</Text>;
	} else {
		wordContent = (
			<Word
				wordInfo={visibleWords[0]}
				answered={answerStatus.answered}
				wordOpacity={wordOpacity}
				shakingStyle={shakingStyle}
			/>
		);
	}

	let OptionsContent;
	if (words.length == 0) {
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
		<View style={container}>
			<LevelBar stats={stats} progressWidth={progressWidth} />
			<Info toggleVisible={toggleVisible} taskInfo={taskInfo} stats={stats} />
			{wordContent}
			{OptionsContent}
		</View>
	);
}

const container = {
	position: "relative",
	borderRadius: 20,
	overflow: "hidden",
	borderWidth: 3,
	borderColor: "#252525",
	height: "100%",
	backgroundColor: "#f8f8f8",
};
