import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link>Begin</Link>
    </div>
  );
};

export default Home;
