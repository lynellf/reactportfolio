import React from 'react';
import './css/styles.css';
import Header from './Header.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return(
    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/" render={() => (<Header />)} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
