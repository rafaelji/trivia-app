import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import { GAME, HOME } from "./config/routes";
import Game from "./pages/game";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={GAME}>
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
