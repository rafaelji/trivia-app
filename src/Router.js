import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import { QUIZ, HOME } from "./config/routes";
import Quiz from "./pages/quiz";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={QUIZ}>
          <Quiz />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
