import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import questionAPI from './question';
import QuestionBox from './components/QuestionBox';
import Result from './components/ResultBox';
import Navbar from "./components/Navbar";

function App() {
	const [questionBank, setQuestionBank] = useState([]);
	const [score, setScore] = useState(0);
	const [responses, setResponses] = useState(0);

	
	// Function to get question from ./question
	const getQuestions = () => {
		questionAPI().then(question => {
			setQuestionBank(question);
		});
	};

	// Set state back to default and call function
	const playAgain = () => {
		getQuestions();
		setScore(0);
		setResponses(0);
	};

	// Function to compute scores
	const computeAnswer = (answer, correctAns) => {
		if (answer === correctAns) {
			setScore(score + 1);
		}
		setResponses(responses < 5 ? responses + 1 : 5);
	};
	
	// useEffect function to get question
	useEffect(() => {
		getQuestions();
	}, []);
	

	return (
		<div className="container">
			<Navbar/>
			<div className="title">
				QuizOn
			</div>

			{questionBank.length > 0 && responses < 5 &&
				questionBank.map(({question, answers, correct, questionId}) =>
					<QuestionBox question={question} options={answers} key={questionId}
						selected={answer => computeAnswer(answer, correct)}
					/>
				)
			}

			{responses === 5 && <Result score={score} playAgain={playAgain} />}

		</div>
	);
}

export default App;