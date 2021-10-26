import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import { QUIZ, HOME, RESULT } from "./config/routes";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import ProvideData from "./providers/data";

const Router = () => {
  return (
    <BrowserRouter>
      <ProvideData>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <Route path={QUIZ}>
            <Quiz />
          </Route>
          <Route path={RESULT}>
            <Result />
          </Route>
        </Switch>
      </ProvideData>
    </BrowserRouter>
  );
};

export default Router;
