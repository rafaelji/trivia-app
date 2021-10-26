import { useCallback, useEffect, useState } from "react";
import { getData } from "../../services/Trivia";
import useData from "../../hooks/data";

const useHome = () => {
  const { setData, setAnswerResults, setCurrentQuestion } = useData();
  const [loading, setLoading] = useState(false);

  const getQuizData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getData();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setData([]);
    setAnswerResults([]);
    setCurrentQuestion({});
  }, []);

  useEffect(() => {
    getQuizData();
  }, [getQuizData]);

  return { loading };
};

export default useHome;
