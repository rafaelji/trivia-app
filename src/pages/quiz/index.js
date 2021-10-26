import "./style.css";
import useData from "../../hooks/data";
import QuizTitle from "../../components/quiz-title";

const Quiz = () => {
  const { currentQuestion } = useData();

  return (
    <div className={"container"}>
      <QuizTitle title={currentQuestion.category} />
      <div className={"quiz-question-and-index-container"}>
        <div className={"quiz-question-container"}>
          <p>{currentQuestion.question}</p>
        </div>
        <div className={"quiz-index-container"}>
          {currentQuestion.index} of 10
        </div>
      </div>
      <div className={"quiz-button-container"}>
        <button>True</button>
        <button>False</button>
      </div>
    </div>
  );
};

export default Quiz;
