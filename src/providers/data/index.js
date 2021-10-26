import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RESULT } from "../../config/routes";

export const dataContext = createContext();

const ProvideData = ({ children }) => {
  const history = useHistory();
  const [answersResult, setAnswerResults] = useState([]);
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const nextQuestion = () => {
    if (currentQuestion.index !== data.length - 1) {
      setCurrentQuestion(data[currentQuestion.index + 1]);

      return;
    }

    history.push(RESULT);
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
        setCurrentQuestion,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default ProvideData;
