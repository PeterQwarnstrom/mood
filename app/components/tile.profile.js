/** @jsx React.DOM */

var React = require('react');
var Header = require('./tile.header');

module.exports = React.createClass({

	render: function (){
		var tileStyle = {
		  backgroundColor: this.props.background
		};

		var profile = this.props.profile;

		return ( 
			<div className="tile" style={tileStyle}>
				<Header icon="user" title="Profile" />
				<div className="content">
			        <div className="panel-body">
			          <div className="row">
			            <div className="col-xs-12 col-sm-4 text-center">
			              <img className="center-block img-circle img-thumbnail img-responsive img-profile" src='https://lh3.googleusercontent.com/-BSlduqSetls/AAAAAAAAAAI/AAAAAAAAANI/A0CX9bFOiB4/photo.jpg?sz=50' alt="" />
			            </div>
			            <div className="col-xs-12 col-sm-8">
			              <h2>Peter Qwärnström</h2>
			              <p>
			                <strong>Email: </strong>peter.qwarnstrom@gmail.com
			              </p>
			            </div>
			          </div>
			      </div> 
				</div> 
			</div>
		);
	}
});