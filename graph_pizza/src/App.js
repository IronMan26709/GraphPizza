import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import SignUp  from './containers/SignUpComponent';
import LogIn  from './containers/LogInComponent';
import  CreateNewGood  from './containers/createNewGood';
import CreateNewCategory  from './containers/createNewCategory'
import ListOfPhotos from './containers/listOfPhotos';
import ListOfGoods from './containers/listOfGoods';
import ListOfCategories from './containers/listOfCategories';
import ListOfOrders from './containers/listOfOrders';
// import Cart from './containers/Cart';


function App() {
  return (
    <div className="App">
      <header>Header</header>
      <Switch>
          <Route exact path="/" />
          <Route path="/SignUp" component ={SignUp}/>
          <Route path="/LogIn" component ={LogIn}/>
          <Route path="/CreateNewGood" component ={CreateNewGood}/>
          <Route path="/CreateNewCategory" component ={CreateNewCategory}/>
          <Route path="/photos" component ={ListOfPhotos}/>
          <Route path="/goods" component ={ListOfGoods}/>
          <Route path="/categories" component ={ListOfCategories}/>
          <Route path="/orders" component ={ListOfOrders}/>
          {/* <Route path="/cart" component ={Cart}/> */}
          

          
          
          
          {/* <Route exact path="/2" >lorem eg;vhSfivho;iafnkaflesv;baj;wfnsdvpiho;anwf/;sn;cohk;oijk/awmevocio;hubi;dnj</Route> */}
      </Switch>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
