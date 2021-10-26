import { useCallback, useEffect, useState } from "react";
import { getData } from "../../services/Trivia";

const useHome = () => {
  const [loading, setLoading] = useState(false);

  const getQuizData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getData();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getQuizData();
  }, [getQuizData]);

  return { loading };
};

export default useHome;
