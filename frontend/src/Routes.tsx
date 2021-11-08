// eslint-disable-next-line import/no-unresolved
import Dashboard from 'pages/Dashboard';
// eslint-disable-next-line import/no-unresolved
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
