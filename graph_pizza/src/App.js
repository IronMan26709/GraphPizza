import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import SignUp  from './containers/SignUpComponent';
import LogIn  from './containers/LogInComponent';
// import  CreateNewGood  from './containers/createNewGood';
// import CreateNewCategory  from './containers/createNewCategory'
// import ListOfPhotos from './containers/listOfPhotos';
import ListOfGoods from './containers/listOfGoods';
// import ListOfCategories from './containers/listOfCategories';
// import ListOfOrders from './containers/listOfOrders';
import  Header  from './containers/Header';
import Cart from './containers/Cart';
import  PrivateRoute  from './PrivatRouter';
import { CategoryList } from './containers/CategoryList';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/"  component={CategoryList}/>
          <Route path="/SignUp" component ={SignUp}/>
          <Route path="/LogIn" component ={LogIn}/>
          {/* <Route path="/CreateNewGood" component ={CreateNewGood}/>
          <Route path="/CreateNewCategory" component ={CreateNewCategory}/>
          <Route path="/photos" component ={ListOfPhotos}/> */}
          {/* <Route path="/goods" component ={ListOfGoods}/> */}
          {/* <Route path="/categories/" component ={ListOfCategories}/> */}
          {/* <Route path="/orders" component ={ListOfOrders}/> */}
          <Route path="/goods/:id" component ={ListOfGoods}/>
          
          <PrivateRoute path="/cart" component ={Cart}/>
          

          {/* приват : cart */}
          
          
      </Switch>
      <footer className="footer"/>
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