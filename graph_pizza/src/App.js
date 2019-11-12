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
import  Header  from './containers/Header';
// import Cart from './containers/Cart';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" />
          <Route path="/SignUp" component ={SignUp}/>
          <Route path="/LogIn" component ={LogIn}/>
          <Route path="/CreateNewGood" component ={CreateNewGood}/>
          <Route path="/CreateNewCategory" component ={CreateNewCategory}/>
          <Route path="/photos" component ={ListOfPhotos}/>
          {/* <Route path="/goods" component ={ListOfGoods}/> */}
          <Route path="/categories/" component ={ListOfCategories}/>
          <Route path="/orders" component ={ListOfOrders}/>
          <Route path="/goods/:id" component ={ListOfGoods}/>
          {/* 5dc94bd00e36db246e3049ee */}
          
          {/* <Route path="/cart" component ={Cart}/> */}
          

          
          
          
          {/* <Route exact path="/2" >lorem eg;vhSfivho;iafnkaflesv;baj;wfnsdvpiho;anwf/;sn;cohk;oijk/awmevocio;hubi;dnj</Route> */}
      </Switch>
      <footer>Footer</footer>
    </div>
  );
}

export default App;



// "data": {
//   "CategoryUpsert": {
//     "_id": "5dcabeeb6d09c45440d14cf6",
//     "createdAt": "1573568235000",
//     "name": "Pasta"
//   }



// "data": {
//   "CategoryUpsert": {
//     "_id": "5dcac6cf6d09c45440d14cfd",
//     "createdAt": "1573570255000",
//     "name": "Drinks"
//   }
// }
// }

// {
//   "data": {
//     "CategoryUpsert": {
//       "_id": "5dcacaeb6d09c45440d14d04",
//       "createdAt": "1573571307000",
//       "name": "Drinks"
//     }
//   }
// }
// {
//   "data": {
//     "CategoryUpsert": {
//       "_id": "5dcadc906d09c45440d14d11",
//       "createdAt": "1573575824000",
//       "name": "Суши"
//     }
//   }
// }