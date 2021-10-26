import useData from "../../hooks/data";

const useResult = () => {
  const { data, answersResult } = useData();

  const score = () => answersResult.filter((item) => item === true).length;

  return { data, answersResult, score };
};

export default useResult;
