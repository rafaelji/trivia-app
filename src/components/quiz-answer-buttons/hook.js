import useData from "../../hooks/data";

const useQuizAnswerButtons = () => {
  const { nextQuestion, currentQuestion, setAnswerResults, answersResult } =
    useData();

  const answerQuestion = (value) => {
    const resultList = [...answersResult];

    if (value === JSON.parse(currentQuestion.correct_answer.toLowerCase())) {
      resultList.push(true);
    } else {
      resultList.push(false);
    }

    setAnswerResults(resultList);
    nextQuestion();
  };

  return { answerQuestion };
};

export default useQuizAnswerButtons;
