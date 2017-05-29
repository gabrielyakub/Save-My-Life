const React = require('react');
var Navigation = require('Navigation');


var Main = (props) => (
      <div >
        <Navigation/>
        <div className="child-container">
            {props.children}
        </div>
      </div>
);


module.exports = Main;
