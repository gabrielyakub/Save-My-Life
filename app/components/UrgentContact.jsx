const React = require('react');
const ContactCard = require('ContactCard');

var UrgentContact = React.createClass({
  render: function(){
    return (
      <div className="col-md-12">
        <div className="title">
          Urgent Contacts
        </div>
        <div className="col-md-12 contact-card-container">
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
        </div>
        <div className="footer-container">
          <div className="pull-right">
            <button className="action-button trash-icon">
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
            <button className="action-button">
              +
            </button>
          </div>
        </div>
      </div>
    )
  }

});
module.exports = UrgentContact;
