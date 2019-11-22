import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import SignUp  from './containers/SignUpComponent';
import LogIn  from './containers/LogInComponent';
import ListOfGoods from './containers/listOfGoods';
import  Header  from './containers/Header';
import Cart from './containers/Cart';
import  PrivateRoute  from './PrivatRouter';
import { CategoryList } from './containers/CategoryList';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch className="Switch">
          <Route exact path="/"  component={CategoryList}/>
          <Route path="/SignUp" component ={SignUp}/>
          <Route path="/LogIn" component ={LogIn}/>
          <Route path="/goods/:id" component ={ListOfGoods}/>
          <PrivateRoute path="/cart" component ={Cart}/>
      </Switch>
      <footer className="footer"/>
    </div>
  );
}

export default App;