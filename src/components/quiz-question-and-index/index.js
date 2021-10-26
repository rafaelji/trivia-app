import "./style.css";
import useData from "../../hooks/data";

const QuizQuestionAndIndex = () => {
  const { currentQuestion } = useData();

  return (
    <div className={"quiz-question-and-index-container"}>
      <div className={"quiz-question-container"}>
        <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      </div>
      <div className={"quiz-index-container"}>
        {currentQuestion.index + 1} of 10
      </div>
    </div>
  );
};

export default QuizQuestionAndIndex;
