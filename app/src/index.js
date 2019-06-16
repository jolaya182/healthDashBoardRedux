/* *
  title: index.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that handles the main logic for accessing and organizing the 
         
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './css/pages.scss'

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Appointments,
  Profile,
  Membership,
  Location,
  Physicians,
  Whoops404
} from './pages/pages';

window.React = React;
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* define the state properties of the  */
ReactDom.render((
  
    <HashRouter>
      <div className="main">
        <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Appointments} />
          <Route path="/Appointments" component={Appointments} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Membership" component={Membership} />
          <Route path="/Location" component={Location} />
          <Route path="/Physicians" component={Physicians} />
          <Route path="/Whoops404" component={Whoops404} />
          </Provider>
        </Switch>
      </div>
    </HashRouter>
  
), document.getElementById("app"));