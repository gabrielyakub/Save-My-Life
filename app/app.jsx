var React = require('react');
var ReactDOM = require('react-dom');


var {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Home = require('Home');
const UrgentContact = require('UrgentContact');
const Setting = require('Setting');
const Help = require('Help');


require('style!css!appStyle');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/urgentcontact" component={UrgentContact}></Route>
      <Route path="/setting" component={Setting}></Route>
      <Route path="/help" component={Help}></Route>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
