/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			profile: this.props.profile
		}
	},
	render: function (){
		return ( 
			<div className="mood">
				<h1>{this.state.profile}</h1>
			</div>
		);
	}
});