import useData from "../../hooks/data";

const QuizCategory = () => {
  const { currentQuestion } = useData();

  return <h1>{currentQuestion.category}</h1>;
};

export default QuizCategory;
