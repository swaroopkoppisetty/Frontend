import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ViewHotel from "components/hotelComponents/ViewHotel"
import PrivateRouteAdmin from "./PrivateRouteAdmin"
import PrivateRouteCustomer from "./PrivateRouteCustomer"
import Customer from "views/Components/Customer/Customer"


import App from './App';

import thunk from 'redux-thunk';

//import { createStore,applyMiddleware } from "redux";
import reducer from "components/store/reducer";
import creducer  from  "customer/store/reducer"
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import hist from "./hist"
import {AuthProvider} from "views/contexts/AuthContext"
import Signup from "views/LoginPage/Signup";
import ForgotPassword from "views/LoginPage/ForgotPassword"



const rootReducer = combineReducers({
  admin: reducer,
  customer: creducer,
  
});
const store = createStore(rootReducer,applyMiddleware(thunk));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router history={hist}>
      <AuthProvider>
    <Switch>
      
      <PrivateRouteAdmin path="/admin" component={Components} />

      <PrivateRouteCustomer path="/customer" component={Customer} />
      <Route exact path='/forgot-password' component={ForgotPassword} />

      <Route exact path ='/signup' component={Signup}/>
      <Route exact path ='/' component={LoginPage}/>
    </Switch>
    </AuthProvider>
  </Router>
    </Provider>
  </React.StrictMode>,

 
  document.getElementById("root")
);
