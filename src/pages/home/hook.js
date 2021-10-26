import { useCallback, useEffect, useState } from "react";
import { getData } from "../../services/Trivia";
import useData from "../../hooks/data";
import { QUIZ } from "../../config/routes";
import { Link } from "react-router-dom";

const useHome = () => {
  const { setData, setAnswerResults, setCurrentQuestion } = useData();
  const [loading, setLoading] = useState(false);
  const [errorHappened, setErrorHappened] = useState(false);

  const showRightAction = () => {
    if (errorHappened) {
      return (
        <>
          <p>An error happened when trying to load game data.</p>
          <button onClick={getQuizData}>Try Again</button>
        </>
      );
    }

    if (loading) {
      return <p>Loading game...</p>;
    }

    return <Link to={QUIZ}>Begin</Link>;
  };

  const getQuizData = useCallback(async () => {
    try {
      setErrorHappened(false);
      setLoading(true);
      const result = await getData();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorHappened(true);
    }
  }, [setData]);

  useEffect(() => {
    setData([]);
    setAnswerResults([]);
    setCurrentQuestion({});
  }, [setAnswerResults, setCurrentQuestion, setData]);

  useEffect(() => {
    getQuizData();
  }, [getQuizData]);

  return { loading, showRightAction };
};

export default useHome;
