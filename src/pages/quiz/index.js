import QuizCategory from "../../components/quiz-category";
import QuizQuestionAndIndex from "../../components/quiz-question-and-index";
import QuizAnswerButtons from "../../components/quiz-answer-buttons";

const Quiz = () => {
  return (
    <div className={"container"}>
      <QuizCategory />
      <QuizQuestionAndIndex />
      <QuizAnswerButtons />
    </div>
  );
};

export default Quiz;
