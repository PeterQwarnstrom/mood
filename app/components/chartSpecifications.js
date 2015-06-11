/** @jsx React.DOM */
var React = require('react');
var chartTypeConstants = require('../constants/chart/typeConstants');

var ChartSpecifications = React.createClass({

	handleSetDayByHour: function(){
  		var spec = {
      		type: chartTypeConstants.DAY_BY_HOUR
    	};

    	this.props.change(spec);
  	},
  	handleSetMonthByDay: function(){
  		var spec = {
      		type: chartTypeConstants.MONTH_BY_DAY
    	};
    
    	this.props.change(spec);
  	},
  	render: function(){
    	return (
        	<div>
          		<div>{this.props.spec.type}</div>
          		<button onClick={this.handleSetDayByHour}> Day By Hour </button>
          		<button onClick={this.handleSetMonthByDay}> Month By Day </button>
        	</div>
    	);
	}
})

module.exports = ChartSpecifications;