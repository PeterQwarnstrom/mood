/** @jsx React.DOM */
var React = require('react');
var ChartContainer = require('./components/chartContainer');

// Snag the initial state that was passed from the server side
//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

$(function() {
/*
	console.log('loaded');
	React.renderComponent(
  		<VoteTile title='Hur mår du?' background='#CD0000' />,
  			document.getElementById('tile_vote')
	);

	React.renderComponent(
  		<Profile background='#DAA520' />,
  			document.getElementById('tile_profile')
	);

	React.renderComponent(
  		<Chart background='#4682B4' data={moods.getMoods()} />,
  			document.getElementById('tile_chart')
	);
*/

	React.renderComponent(
  		<ChartContainer />,
  			document.getElementById('chartContainer')
	);

	
});