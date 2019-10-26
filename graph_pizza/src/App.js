import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import  SignUp  from './containers/SignUpComponent';


function App() {
  return (
    <div className="App">
      <header>Header</header>
      <Switch>
          {/* <Route exact path="/" >lorem eg;vh;oijk/awmevocio;hubi;dnj</Route> */}
          <SignUp/>
          {/* <Route exact path="/2" >lorem eg;vhSfivho;iafnkaflesv;baj;wfnsdvpiho;anwf/;sn;cohk;oijk/awmevocio;hubi;dnj</Route> */}
      </Switch>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
