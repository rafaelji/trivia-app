import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import { HOME } from "./config/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
