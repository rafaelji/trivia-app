import { Link } from "react-router-dom";
import useResult from "./hook";
import { HOME } from "../../config/routes";
import "./style.css";

const Result = () => {
  const { answersResult, data } = useResult();

  return (
    <div className="container">
      <h1>
        You scored <br /> 3/10
      </h1>
      <ul>
        {data.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item.question }} />
        ))}
      </ul>
      <Link to={HOME}>PLAY AGAIN?</Link>
    </div>
  );
};

export default Result;
