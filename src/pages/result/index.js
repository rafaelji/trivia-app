import { Link } from "react-router-dom";
import useResult from "./hook";
import { HOME } from "../../config/routes";
import "./style.css";

const Result = () => {
  const { answersResult, data, score } = useResult();

  return (
    <div className="container">
      <h1>
        You scored <br /> {score()}/10
      </h1>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: item.question }}
            className={answersResult[index] ? "correct" : "wrong"}
          ></li>
        ))}
      </ul>
      <Link to={HOME}>PLAY AGAIN?</Link>
    </div>
  );
};

export default Result;
