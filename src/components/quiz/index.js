import "./style.css";

const Quiz = ({ title, question, index }) => {
  return (
    <div className={"container"}>
      <h1>{title}</h1>
      <div className={"quiz-question-and-index-container"}>
        <div className={"quiz-question-container"}>
          <p>{question}</p>
        </div>
        <div className={"quiz-index-container"}>{index} of 10</div>
      </div>
      <div className={"quiz-button-container"}>
        <button>True</button>
        <button>False</button>
      </div>
    </div>
  );
};

export default Quiz;
