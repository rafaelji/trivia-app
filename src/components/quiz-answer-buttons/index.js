import useQuizAnswerButtons from "./hook";
import "./style.css";

const QuizAnswerButtons = () => {
  const { answerQuestion } = useQuizAnswerButtons();

  return (
    <div className={"quiz-button-container"}>
      <button onClick={() => answerQuestion(true)}>True</button>
      <button onClick={() => answerQuestion(false)}>False</button>
    </div>
  );
};

export default QuizAnswerButtons;
