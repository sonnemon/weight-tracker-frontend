import { Route, Switch } from "wouter";
import SingInPage from "./singin";
import SingUpPage from "./signup";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/signin" component={SingInPage} />
      <Route path="/signup" component={SingUpPage} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
};

export default MainRouter;
