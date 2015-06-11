module.exports =  {

	getMoods : function() {
		//var markup = React.renderComponentToString(MoodComponent());
		
		return dummyMoodsTasgDayByHour;
	}
}

var dummyMoodsTasgDayByHour =  {
  timeFrame: {
    from: '2015-06-04T00:00:00',
    to: '2015-06-04T23:59:59',
  },
  labels : ['12 AM', '1 AM', '2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM'],
  moods : [
    {
      name : 'Team Betala-Kort',
      values : ['3','4','4','5','5','4','2','4','4','5','3'] 
    },
    {
      name : 'Utvecklare',
      values : ['4','3','3','5','4','5','3','3','5','4','2'] 
    },
    {
      name : 'Testare',
      values : ['2','3','2','4','4','5','5','4','4','5','3'] 
    }
  ]
};