import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Callback from '../Helpers/Callback/Callback';
import Auth from '../Helpers/Auth/Auth';
import history from '../Helpers/history';
import Home from '../Home/Index';
import ControlPanel from '../Admin/ControlPanel';
import NewPost from '../Admin/NewPost';
import EditResume from '../Admin/Resume/Index';
import UpdatePost from '../Admin/UpdatePost';
import DirectPost from '../Blog/DirectPost';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={Home}>
        <Switch>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/resume" render={(props) => (<Resume auth={auth} {...props} />)} />
          <Route path="/about" render={(props) => (<About auth={auth} {...props} />)} />
          <Route path="/portfolio" render={(props) => (<Portfolio auth={auth} {...props} />)} />
          <Route path="/new" render={(props) => (<NewPost auth={auth} {...props} />)} />
          <Route path="/editresume" render={(props) => (<EditResume auth={auth} {...props} />)} />
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
