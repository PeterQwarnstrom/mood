/** @jsx React.DOM */
var React = require('react');
var chartTypeConstants = require('../constants/chart/typeConstants');

var Chart = React.createClass({
  componentDidUpdate: function() {
    this.renderChart();
    //setInterval(this.renderChart, 20000);
  },
  renderChart: function() {
    //console.log(this.props.data.labels);
    var chartData = {
      labels : this.props.data.labels,
      series : []
    };

    //console.log(this.props.data.series[i].values);

    for (var i = 0; i < this.props.data.series.length; i++) {
      console.log(this.props.data.series[i].values);
      chartData.series.push(this.props.data.series[i].values);
    }

    new Chartist.Line('.ct-chart', chartData);
  },
  render: function(){
    return ( 
      <div className="ct-chart ct-double-octave"></div>
    );
  }
})

module.exports = Chart;