import React, { useState } from "react";
import Confetti from "react-confetti";

const Quiz = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer === null) {
      return;
    }

    const currentCorrectAnswer =
      questions[currentQuestionIndex].translations.english.correctAnswer;
    const isAnswerCorrect = Array.isArray(currentCorrectAnswer)
      ? currentCorrectAnswer.includes(selectedAnswer)
      : currentCorrectAnswer === selectedAnswer;

    if (isAnswerCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex].translations.english;

  if (quizCompleted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Quiz Completed!
          </h2>
          <p className="text-gray-700">Your Score: {score}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {showConfetti && <Confetti />}
      <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
        <h2 className="text-xl font-medium text-gray-900 mb-2">
          {currentQuestion.question}
        </h2>
        {currentQuestion.answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswerSelect(answer)}
            className={`${
              selectedAnswer === answer
                ? currentQuestion.correctAnswer === answer
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
                : "bg-gray-200 hover:bg-gray-300"
            } rounded-full px-4 py-2 text-sm font-medium text-gray-700 mr-2 mb-2`}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        ))}
        {selectedAnswer && (
          <button
            className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleNextButtonClick}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
