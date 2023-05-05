import React from "react";

const LanguageSelection = ({ languages, onLanguageSelect }) => {
  const flags = {
    english: "🇬🇧",
    dutch: "🇳🇱",
    turkish: "🇹🇷",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Islamic Quiz 🌙</h1>
      <h2 className="text-2xl font-semibold mb-4">Please choose a language:</h2>
      <div className="grid grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-blue-500 text-white rounded-md transition duration-200 ease-in-out hover:bg-blue-600"
            onClick={() => onLanguageSelect(language)}
          >
            <span className="text-4xl">{flags[language]}</span>
            <span>{language}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
