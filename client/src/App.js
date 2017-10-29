import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainsite from './Mainsite';
import Login from './Login';
import Register from './Register';
import DirectPost from './DirectPost';
import CreatePost from './CreatePost';
import ControlPanel from './ControlPanel';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (<Mainsite />)} />
        <Route path="/login" render={() => (<Login />)} />
        <Route path="/post" render={() => (<CreatePost />)} />
        <Route path="/register" render={() => (<Register />)} />
        <Route path="/controlpanel" render={() => (<ControlPanel />)} />
        <Route path="/:id" component={DirectPost} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
