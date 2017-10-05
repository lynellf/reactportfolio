import React from 'react';
import './css/styles.css';
import './css/flat-ui-pro.css';
import Mainsite from './Mainsite';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/" render={() => (<Mainsite />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
