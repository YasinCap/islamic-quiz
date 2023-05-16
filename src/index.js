import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./components/Quiz";
import LanguageSelection from "./components/LanguageSelection";
import SampleQuestions from "./components/SampleQuestions"; // Import the SampleQuestions

const App = () => {
  const [language, setLanguage] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleQuizComplete = () => {
    setQuizComplete(true);
  };

  const translatedQuestions = language
    ? SampleQuestions.map((question) => ({
        ...question,
        question: question.translations[language].question,
        answers: question.translations[language].answers,
      }))
    : [];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 max-w-md">
        {quizComplete ? (
          <div>Quiz Completed! Thank you for participating.</div>
        ) : language ? (
          <Quiz
            questions={translatedQuestions}
            onQuizComplete={handleQuizComplete}
          />
        ) : (
          <LanguageSelection
            languages={["english", "dutch", "turkish"]}
            onLanguageSelect={handleLanguageSelect}
          />
        )}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Keep this line
document.body.classList.add("gradient-background");
