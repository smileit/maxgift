import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import routes from './routes'
import ErrorPage from './pages/error'
import './App.less';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          {
            routes.map((route) => {
              return <Route key={route.path} component={route.Cmp} path={route.path} exact />
            })
          }
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
  );
  }
}

export default App;
