import React, { useState } from 'react';
import allQuestions from './quizzes.json';

export default function Quiz({subject, chapter}) {

	const questions = allQuestions[subject][chapter]

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [quizHasEnded, setQuizHasEnded] = useState(false);

	const handleAnswerOptionClick = (i) => {
		setSelectedAnswer(i)
		setShowResult(true)
	};

	const handleNextClick = () => {
		setShowResult(false)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setQuizHasEnded(true);
		}
	};

	return (
		<div className='quiz'>
			{quizHasEnded ? (
				<div className='end-section'>
					Kaikki tehty!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<>
						{showResult ? (
							<div className='result-section'>
								<div className='result-text'>{questions[currentQuestion].answerOptions[selectedAnswer].answerWhy}</div>
								<button className="next-button" onClick={() => handleNextClick()}>Seuraavaan</button>
							</div>
						) : (
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption, i) => (
									<button className="answer-button" key={i} onClick={() => handleAnswerOptionClick(i)}>{answerOption.answerText}</button>
								))}
							</div>
						)}
					</>
				</>
			)}
		</div>
	);
}
