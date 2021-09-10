import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Onboarding from './components/Onboarding';
import Root from './components/Root';
import ProtectedRoute from './components/ProtectedRoute';
import Upload from './components/Upload';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/discover' />
        <Route path='/licensing' />
        <Route path='/licensing/contribute' />
        <Route path='/licensing/requirements' />
        <Route path='/licensing/content' />
        <Route path='/licensing/distribution' />
        <Route path='/licensing/grants' />
        <Route path='/resource_hub' />
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <ProtectedRoute path='/manage/upload' component={Upload} />
        <Route path='/' component={Root} />
      </Switch>
    </>
  );
}

export default App;
