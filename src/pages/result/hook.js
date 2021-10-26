import useData from "../../hooks/data";

const useResult = () => {
  const { data, answersResult } = useData();

  return { data, answersResult };
};

export default useResult;
