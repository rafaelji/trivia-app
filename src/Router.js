import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import { QUIZ, HOME, RESULT } from "./config/routes";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import ProvideData from "./providers/data";
import useData from "./hooks/data";

const Router = () => {
  return (
    <BrowserRouter>
      <ProvideData>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <ProtectedRoute path={QUIZ}>
            <Quiz />
          </ProtectedRoute>
          <ProtectedRoute path={RESULT}>
            <Result />
          </ProtectedRoute>
        </Switch>
      </ProvideData>
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  let { data } = useData();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data.length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Router;
