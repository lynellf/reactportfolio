import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import HomePage from './HomePage';
import ControlPanel from './ControlPanel';
import PostNew from './PostNew';
import UpdatePost from './UpdatePost';
import DirectPost from './DirectPost';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={HomePage}>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage auth={auth} {...props} />} />
          <Route path="/new" render={(props) => (<PostNew auth={auth} {...props} />)} />
          <Route path="/update/:id" render={(props) => (<UpdatePost auth={auth} {...props} />)} />
          <Route path="/post/:id" render={(props) => (<DirectPost auth={auth} {...props} />)} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/controlpanel" render={(props) => <ControlPanel auth={auth} {...props} />} />
          
        </Switch>
      </Router>
  );
}
