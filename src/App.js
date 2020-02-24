import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
//pages
import Index from "./pages/index";
import NoteFoundPage from "./pages/404";
import User from "./pages/user";
import Pop from "./pages/popup";
import Navigation from "./pages/navigation";
import DataEntry from "./pages/dataentry";
import ViewRecords from "./pages/viewrecords";
import Test from "./pages/test";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Nav from "./pages/navbar";
import About from "./pages/about";
import Contactadmin from "./pages/contactadmin";
import Help from "./pages/help";
import Userprofile from "./pages/userprofile";
export const auth = {
  isAuthenticated: false,
  islogout: false,
  authenticate(cb) {
    auth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    auth.islogout = true;
    setTimeout(cb, 100);
  }
};
function App() {
  function PrivateRoute ({component: Component, ...rest}) {
   var tv="loggedout";
   if(auth.isAuthenticated)
   { 
    tv="loggedin";
    localStorage.setItem('loggedin',1);
   }
   else if(auth.islogout)
   {
     tv="loggedout";
     localStorage.setItem('loggedin',0);
   }else if(localStorage.getItem('loggedin')==1)
   tv="loggedin";
   if(tv=="loggedout"&&rest.path!="/")
   return(<Redirect to="/" />); 
   if(tv=="loggedin")
    {
      var sethome="yes";
      if(rest.path=="/")
      sethome="no";
      return (
      <div>
      <Nav home={sethome}/>
    <Component {...rest} />
    </div>
    );}
    else if(tv=="loggedout"){return (
    <div>
      <Nav home="no"/>
    <Index />
    </div>
    );}
  }
  return (
    <div>
      
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/404" component={NoteFoundPage} />
        <PrivateRoute exact path="/user" component={User} />
        <PrivateRoute exact path="/popup" component={Pop} />
        <PrivateRoute exact path="/dataentry" component={DataEntry} />
        <PrivateRoute exact path='/viewrecords' component={ViewRecords} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/contactadmin" component={Contactadmin} />
        <PrivateRoute exact path="/help" component={Help} />
        <PrivateRoute exact path="/userprofile" component={Userprofile} />
        <PrivateRoute exact path="/" component={Navigation} />
        <Redirect to="404" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
