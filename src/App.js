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
function App() {
  const[age,setAge]=useState(<User/>);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Switch>
        <Route exact path="/" >
          <Index></Index>
        </Route>
        <Route exact path="/404" component={NoteFoundPage} />
        <Route exact path="/user" component={User} />
        <Route exact path="/popup" component={Pop} />
        <Route exact path="/navigation" component={Navigation} />
        <Route exact path="/dataentry" component={DataEntry} />
        <Route exact path="/viewrecords" component={ViewRecords} />
        <Route exact path="/test" component={Test} />
        <Redirect to="404" />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
