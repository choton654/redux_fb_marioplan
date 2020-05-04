import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarLink from './components/layout/NavbarLink';
import Dashboard from './components/dashbord/Dashboard';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signout';
import CreateProject from './components/project/CreateProject';
import ProjectDetails from './components/project/ProjectDetails';
import Notfound from './notfound';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavbarLink />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/create' component={CreateProject} />
          <Route exact path='/project/:id' component={ProjectDetails} />
          <Route exact path='/:notfound' component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
