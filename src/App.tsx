import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from '@/router/index';
import RouteControl from '@/components/public/RouteControl';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <RouteControl routes={routes}></RouteControl>
      </Switch>
    </Router>
  );
};

export default App;
