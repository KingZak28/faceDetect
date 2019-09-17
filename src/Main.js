import React from 'react';
import Signin from './components/Signin/Signin';
import App from './App';
import Register from './components/Register/Register';
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  return (
    <Switch>
      <Route path='/main' component={App}/>
      <Route exact path='/' component={Signin}/>
      <Route path='/register' component={Register} />
    </Switch>
  )
}

export default Main;
