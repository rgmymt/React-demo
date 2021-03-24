import { Route, Router } from "react-router";
// import createHashHistory from 'history/createHashHistory';
import React from 'react';

import App from "../App";
import Home from '../pages/Home/index'
const hashHistory = require("history").createHashHistory()
function WithRouter (){
  return (
    <Router history={hashHistory}>
      <App path='/' component={App}>
        <Route path='/home' component={Home}></Route>
      </App>
    </Router>
  )
}

export default WithRouter
