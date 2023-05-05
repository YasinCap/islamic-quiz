import React, { useState } from "react";
import Confetti from "react-confetti";

const AnswerOption = ({ answer, isSelected, isCorrect, onAnswerSelect }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    onAnswerSelect(answer);
    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  return (
    <div>
      <button
        className={`block w-full py-3 px-4 rounded-md text-left ${
          isSelected
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 border border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out`}
        onClick={handleClick}
      >
        {showConfetti && <Confetti />}
        {answer}
      </button>
    </div>
  );
};

export default AnswerOption;
