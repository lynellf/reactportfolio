import React from 'react';
import './css/styles.css';
import './css/flat-ui-pro.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainsite from './Mainsite';
import Login from './Login';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/" render={() => (<Mainsite />)} />
      <Route path="/login" render={() => (<Login />)} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
