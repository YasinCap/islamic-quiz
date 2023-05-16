import React, { useState } from "react";

const Rules = ({ language, onStartQuiz }) => {
  const [showButton, setShowButton] = useState(true);

  const handleStartQuiz = () => {
    onStartQuiz();
    setShowButton(false);
  };

  let rulesContent = null;

  if (language === "english") {
    rulesContent = (
      <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Quiz Rules</h2>
        <p className="text-gray-700">
          Welcome to the quiz! Once you select an answer, it is set and cannot
          be changed. Answer all the questions to complete the quiz. Your score
          will be displayed at the end. Good luck!
        </p>
        {showButton && (
          <button
            className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        )}
      </div>
    );
  } else if (language === "dutch") {
    rulesContent = (
      <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Quizregels</h2>
        <p className="text-gray-700">
          Welkom bij de quiz! Zodra je een antwoord selecteert, wordt het
          vastgelegd en kan het niet meer worden gewijzigd. Beantwoord alle
          vragen om de quiz te voltooien. Je score wordt aan het einde
          weergegeven. Succes!
        </p>
        {showButton && (
          <button
            className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        )}
      </div>
    );
  } else if (language === "turkish") {
    rulesContent = (
      <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Quiz Kuralları
        </h2>
        <p className="text-gray-700">
          Quiz'e hoş geldiniz! Bir cevap seçtikten sonra, değiştirilemez ve
          sabitlenir. Quiz'i tamamlamak için tüm soruları yanıtlayın. Puanınız
          sonunda gösterilecektir. İyi şanslar!
        </p>
        {showButton && (
          <button
            className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset
-2 focus:ring-blue-500"
            onClick={handleStartQuiz}
          >
            Quiz'e Başla
          </button>
        )}
      </div>
    );
  }

  return <div>{rulesContent}</div>;
};

export default Rules;
