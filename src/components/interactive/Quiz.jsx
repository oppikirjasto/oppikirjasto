import React, { useState } from 'react';
import styles from './Quiz.module.css';

/**
 * Interactive quiz component for Oppikirjasto
 * 
 * @param {Object} props
 * @param {string} props.question - The quiz question
 * @param {Array<string>} props.options - Array of answer options
 * @param {number} props.correctAnswer - Index of the correct answer (0-based)
 * @param {string} props.explanation - Explanation shown after answering
 */
export default function Quiz({ question, options, correctAnswer, explanation }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const handleNextClick = () => {
    setShowExplanation(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="quiz">
      <h3>{question}</h3>
      
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`answer-button ${
              showResult && index === selectedAnswer
                ? isCorrect
                  ? styles.correct
                  : styles.incorrect
                : ''
            }`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showResult && (
        <div className={styles.result}>
          <p className={isCorrect ? styles.correct : styles.incorrect}>
            {isCorrect ? 'Oikein!' : 'Väärin. Yritä uudelleen!'}
          </p>
          {!showExplanation && (
            <button onClick={handleNextClick} className="next-button">
              Näytä selitys
            </button>
          )}
        </div>
      )}
      
      {showExplanation && (
        <div className={styles.explanation}>
          <h4>Selitys:</h4>
          <p>{explanation}</p>
          <button onClick={resetQuiz} className="next-button">
            Kokeile uudelleen
          </button>
        </div>
      )}
    </div>
  );
}
