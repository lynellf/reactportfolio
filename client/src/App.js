import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';
import './css/flat-ui-pro.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainsite from './Mainsite';
import Login from './Login';
import Register from './Register';
import DirectPost from './DirectPost';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (<Mainsite />)} />
        <Route path="/login" render={() => (<Login />)} />
        <Route path="/register" render={() => (<Register />)} />
        <Route path="/:id" component={DirectPost} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
