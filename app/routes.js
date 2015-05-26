//var JSX = require('node-jsx').install();
var React = require('react');
//var MoodComponent = require('./components/mood.react');

//var MoodMessage = React.createFactory(MoodComponent);

module.exports =  {

	main : function(req, res) {
		//var markup = React.renderComponentToString(MoodComponent());
		
		res.render('main');
	}
}
