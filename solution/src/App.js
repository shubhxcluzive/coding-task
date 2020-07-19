import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/Home" exact component={Home} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
