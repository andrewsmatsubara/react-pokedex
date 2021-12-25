import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';
import Main from './pages/Main';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id" component={PokemonDetails} />
      </Switch>
    </Provider>
  );
}

export default App;
