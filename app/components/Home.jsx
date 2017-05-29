const React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="home-container">
        <div>
          <div className="profile-picture-container">
            <img src="Assets/Images/profile.png" className="profile-image"></img>

          </div>
          <div>
              <span className="home-welcome">
                Welcome to Save My Life!
              </span>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Home;
