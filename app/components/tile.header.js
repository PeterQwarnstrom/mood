/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	render: function (){
		var iconClass = 'fa fa-' + this.props.icon + ' fa-4x';
		return ( 
			<div className="header">
				<div className="icon"> 
					<i className={iconClass}></i>
				</div>
				<div className="text">
					<h3>{this.props.title}</h3>
				</div>
			</div>
		);
	}
});