import useData from "../../hooks/data";

const useQuizAnswerButtons = () => {
  const { nextQuestion, currentQuestion, total, setTotal } = useData();

  const answerQuestion = (value) => {
    if (value === JSON.parse(currentQuestion.correct_answer.toLowerCase())) {
      setTotal(total + 1);
    }

    nextQuestion();
  };

  return { answerQuestion };
};

export default useQuizAnswerButtons;
