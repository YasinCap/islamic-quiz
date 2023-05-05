import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./components/Quiz";
import LanguageSelection from "./components/LanguageSelection";

const sampleQuestions = [
  {
    question: "What is the first pillar of Islam?",
    translations: {
      english: {
        question: "What is the first pillar of Islam?",
        answers: [
          "Salah (Prayer)",
          "Shahada (Declaration of faith)",
          "Zakat (Almsgiving)",
          "Sawm (Fasting)",
        ],
      },
      dutch: {
        question: "Wat is de eerste pilaar van de islam?",
        answers: [
          "Salah (Gebed)",
          "Shahada (Geloofsbelijdenis)",
          "Zakat (Aalmoezen geven)",
          "Sawm (Vasten)",
        ],
      },
      turkish: {
        question: "İslamın ilk şartı nedir?",
        answers: [
          "Salah (Namaz)",
          "Şehadet (İman etmek)",
          "Zekat (Sadaka vermek)",
          "Sawm (Oruç)",
        ],
      },
    },
    correctAnswer: "Shahada (Declaration of faith)",
  },
  // Add more questions here
];

const App = () => {
  const [language, setLanguage] = useState(null);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const translatedQuestions = language
    ? sampleQuestions.map((question) => ({
        ...question,
        question: question.translations[language].question,
        answers: question.translations[language].answers,
      }))
    : [];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 max-w-md">
        {language ? (
          <Quiz questions={translatedQuestions} />
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
