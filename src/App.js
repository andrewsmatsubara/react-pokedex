import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Provider>
  );
}

export default App;
