/** @jsx React.DOM */

var React = require('react');
var Header = require('./tile.header');

module.exports = React.createClass({

	

	componentDidMount: function() {
		var data = {
	    	// A labels array that can contain any sort of values
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			// Our series array that contains series objects or in this case series data arrays
			series: [
				[4,3,3,4,5,5,4,3,2,3]
			]
		};
		var options = {
		    width: 300,
    		height: 200
  		};
  		var a = new Chartist.Line('.ct-chart', data);
	 },
	render: function (){
		var tileStyle = {
		  backgroundColor: this.props.background
		};

		return ( 
			<div className="tile" style={tileStyle}>
				<Header icon="area-chart" title="Chart" />
				<div className="content">
					<div className="ct-chart ct-double-octave"></div>
				</div>
			</div>
		);
	}
});