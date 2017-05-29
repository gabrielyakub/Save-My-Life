const React = require('react');


var ContactCard = React.createClass({
  render: function(){
    return (
      <div className="contact-card">
        <div className="profile-picture-container">
          <img className="profile-image" src="Assets/Images/profile.png"></img>
        </div>
        <div className="contact-name">
          Name
        </div>
        <div className="contact-number">
          +62xxxxxxxxxx
        </div>
      </div>
    )
  }

});
module.exports = ContactCard;
