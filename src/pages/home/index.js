import { Link } from "react-router-dom";
import useHome from "./hook";
import "./style.css";

const Home = () => {
  const { loading } = useHome();

  return (
    <div className="container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      {loading ? <p>Loading game...</p> : <Link>Begin</Link>}
    </div>
  );
};

export default Home;
