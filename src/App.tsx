import React from 'react';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from "history";
import routes from './router/index'

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route></Route>
    </Router>
  );
};

export default App;
