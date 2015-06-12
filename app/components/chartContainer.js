/** @jsx React.DOM */
var React = require('react');
var Chart = require('./chart');
var Header = require('./tile.header');
var ChartSpecifications = require('./chartSpecifications');
var chartStore = require('../stores/chartStore');
var chartActions = require('../actions/chartActions');

var ChartContainer = React.createClass({
  getInitialState: function(){
    return {
      chartSpecifications: chartStore.getSpecification(),
      chartData: chartStore.getData()
    }
  },
  componentDidMount: function(){
    chartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    chartStore.removeChangeListener(this._onChange);
  },
  handleChangeSpecifiactions: function(newSpec){
    chartActions.changeSpecifications(newSpec);
  },
  _onChange: function(){
    this.setState({
      chartSpecifications: chartStore.getSpecification(),
      chartData: chartStore.getData()
    });
  },
  render: function(){
    var tileStyle = {
      backgroundColor: '#4682B4'
    };

    return (
      <div className="tile" style={tileStyle}>
        <Header icon="area-chart" title="Chart" />
        <div className="content">
          <ChartSpecifications spec={this.state.chartSpecifications} change={this.handleChangeSpecifiactions}/>
          <Chart data={this.state.chartData}/>
        </div>
      </div>
    )
  }
});

module.exports = ChartContainer;