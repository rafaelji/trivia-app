import useHome from "./hook";

const Home = () => {
  const { showRightAction } = useHome();

  return (
    <div className="container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      {showRightAction()}
    </div>
  );
};

export default Home;
