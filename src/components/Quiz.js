import React, { useState } from "react";
import Confetti from "react-confetti";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer === null) {
      return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    }

    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

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
        <p className="mt-2 text-gray-500">{`Score: ${score}`}</p>
      </div>
    </div>
  );
};

export default Quiz;
