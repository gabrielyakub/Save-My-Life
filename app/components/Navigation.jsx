const React = require('react');
var {Link, IndexLink} = require('react-router');


var Navigation = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top navigation-main">
         <IndexLink to="/" activeStyle={{color: "white"}}>
           <span className="glyphicon glyphicon-home nav-icon" aria-hidden="true"></span>
         </IndexLink>
         <Link to="/urgentcontact" activeStyle={{color: "white"}}>
            <span  className="glyphicon glyphicon-user nav-icon"></span>
         </Link>
         <Link to="/setting" activeStyle={{color: "white"}}>
           <span className="glyphicon glyphicon-cog  nav-icon" aria-hidden="true"></span>
         </Link>
         <Link to="/help" activeStyle={{color: "white"}}>
            <span className="glyphicon glyphicon-question-sign nav-icon" aria-hidden="true"></span>
         </Link>
      </nav>
    )

  }
});



module.exports = Navigation;
