import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-browser-router";
import Callback from '../Helpers/Callback/Callback';
import Auth from '../Helpers/Auth/Auth';
import history from '../Helpers/history';
import Home from '../Home/Index';
import ControlPanel from '../Admin/ControlPanel';
import NewPost from '../Admin/NewPost';
import EditResume from '../Admin/Resume/Index';
import UpdatePost from '../Admin/UpdatePost';
import Article from '../Blog/Article';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import UpdateJob from '../Admin/Resume/UpdateJob';
import UpdateSkill from '../Admin/Resume/UpdateSkill';
import UpdateEducation from '../Admin/Resume/UpdateEducation';
import Blog from '../Blog/Blog';
import About from '../About/About';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <BrowserRouter history={history} component={Home}>
        <Switch>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/resume" render={(props) => (<Resume auth={auth} {...props} />)} />
          <Route path="/about" render={(props) => (<About auth={auth} {...props} />)} />
          <Route path="/portfolio" render={(props) => (<Portfolio auth={auth} {...props} />)} />
          <Route path="/blog" render={(props) => (<Blog auth={auth} {...props} />)} />
          <Route path="/new" render={(props) => (<NewPost auth={auth} {...props} />)} />
          <Route path="/editresume" render={(props) => (<EditResume auth={auth} {...props} />)} />
          <Route path="/update/:id" render={(props) => (<UpdatePost auth={auth} {...props} />)} />
          <Route path="/post/:id" render={(props) => (<Article auth={auth} {...props} />)} />
          <Route path="/updateschool/:id" render={(props) => (<UpdateEducation auth={auth} {...props} />)} />
          <Route path="/updateskill/:id" render={(props) => (<UpdateSkill auth={auth} {...props} />)} />
          <Route path="/updatejob/:id" render={(props) => (<UpdateJob auth={auth} {...props} />)} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/controlpanel" render={(props) => <ControlPanel auth={auth} {...props} />} />
        </Switch>
      </BrowserRouter>
  );
}
