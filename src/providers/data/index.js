import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const ProvideData = ({ children }) => {
  const [answersResult, setAnswerResults] = useState([]);
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const nextQuestion = () => {
    if (currentQuestion.index !== data.length - 1) {
      setCurrentQuestion(data[currentQuestion.index + 1]);

      return;
    }

    // navega pra resultados
  };

  useEffect(() => {
    setCurrentQuestion(data[0]);
  }, [data]);

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        currentQuestion,
        nextQuestion,
        setAnswerResults,
        answersResult,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default ProvideData;
