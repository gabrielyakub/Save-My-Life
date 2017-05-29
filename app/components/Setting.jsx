const React = require('react');


var Setting = React.createClass({
  render: function(){
    return (
      <div className="col-md-12">
        <div className="title">
          Settings
        </div>
        <div className="col-md-12 settings-container">
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Panic Button Shortcut</label>
                <input type="email" className="form-control shortcut-input" id="exampleInputEmail1" />
              </div>
              <div width="100%" className="form-group">
                <button className="btn btn-primary logout-btn">Log out</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

});
module.exports = Setting;
