const App = () => {
  const [language, setLanguage] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
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
        {quizCompleted ? (
          <div>Quiz Completed! Thank you for participating.</div>
        ) : quizStarted ? (
          <Quiz
            questions={translatedQuestions}
            onQuizComplete={handleQuizComplete}
          />
        ) : (
          <div>
            <LanguageSelection
              languages={["english", "dutch", "turkish"]}
              onLanguageSelect={handleLanguageSelect}
            />
            {language && (
              <div>
                <Rules language={language} onStartQuiz={handleQuizStart} />
                <button onClick={handleQuizStart}>Start Quiz</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
