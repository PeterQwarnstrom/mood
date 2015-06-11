var chartTypeConstants = require('../constants/chart/typeConstants');

Date.prototype.addHours= function(hours){
    this.setHours(this.getHours() + hours);
    return this;
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getDayByHourData() {
  var fromDate = new Date().addHours(-12);
  var toDate = new Date();

  var labels = [];
  var values = [];
  for (var i = 0; i < 24; i++) {
    labels.push(fromDate.getHours());
    values.push(randomIntFromInterval(1,5));
    fromDate = fromDate.addHours(1);
  }

  return {
    spefification : {
      type: chartTypeConstants.DAY_BY_HOUR,
      timeFrame: {
        from: new Date().addHours(-12),
        to: new Date()
      },
      users : null,
      tags: ['Tag1']
    },
    chartData: {
      labels: labels,
      series: [
        {
          name : "Tag1",
          values : values  
        }
      ]
    }
  };
}

function getMonthByDayData() {
  var fromDate = new Date().addDays(-30);
  var toDate = new Date();

  var labels = [];
  var values = [];
  for (var i = 0; i < 30; i++) {
    labels.push(fromDate.getDate());
    values.push(randomIntFromInterval(1,5));
    fromDate = fromDate.addDays(1);
  }

  return {
    spefification : {
      type: chartTypeConstants.MONTH_BY_DAY,
      timeFrame: {
        from: new Date().addHours(-30),
        to: new Date()
      },
      users : null,
      tags: ['Tag1']
    },
    chartData: {
      labels: labels,
      series: [
        {
          name : "Tag1",
          values : values  
        }
      ]
    }
  };
}

var chartData =  {
  monthByDay : function() {
    return getMonthByDayData();
  },

  dayByHour : function() {
    return getDayByHourData();
  }
};

module.exports = chartData;