import { Route, Switch } from 'wouter';
import SingInPage from './singin';
import SingUpPage from './signup';
import AdminPage from './admin';
import SetsPage from './admin/sets';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/signin" component={SingInPage} />
      <Route path="/signup" component={SingUpPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/admin/sets" component={SetsPage} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
};

export default MainRouter;
