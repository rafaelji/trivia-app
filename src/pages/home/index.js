import { Link } from "react-router-dom";
import useHome from "./hook";
import { GAME } from "../../config/routes";
import "./style.css";

const Home = () => {
  const { loading } = useHome();

  return (
    <div className="container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      {loading ? <p>Loading game...</p> : <Link to={GAME}>Begin</Link>}
    </div>
  );
};

export default Home;
