/** @jsx React.DOM */

var React = require('react');
var Header = require('./tile.header');
var store = require('../stores/moodsStore');

module.exports = React.createClass({


	getInitialState: function() {
		return {
			chartData: this.props.data
		};
	},	
	componentDidMount: function() {
	    this.loadDataFromServer();
    	setInterval(this.loadDataFromServer, 10000);
  	},
	loadDataFromServer: function() {
		this.setState(
			{ 
				chartData: store.getMoods() 
			}
		);
		this.renderChart();
	},
	renderChart: function() {
		var chartData = {
			labels : this.state.chartData.labels,
			series : []
		};

		for (var i = 0; i < this.state.chartData.moods.length; i++) {
			chartData.series.push(this.state.chartData.moods[i].values);
		}

		console.log(chartData.series[0]);

		new Chartist.Line('.ct-chart', chartData);
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