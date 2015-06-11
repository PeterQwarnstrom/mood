var AppDispatcher = require('../dispatchers/AppDispatcher');
var actionConstants = require('../constants/app/actionConstants');
var chartTypeConstants = require('../constants/chart/typeConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var chartData = require('../lib/chartData');

var CHANGE_EVENT = 'change';

var _store = {
  spefification : {
      type: chartTypeConstants.MONTH_BY_DAY
  }
};

var changeSpecification = function(specification){
  switch(specification.type){
    case chartTypeConstants.DAY_BY_HOUR:
      _store = chartData.dayByHour();
      break;
    case chartTypeConstants.MONTH_BY_DAY:
      _store = chartData.monthByDay();
      break;
    default:
      return true;
  } 
};

var chartStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getData: function(){
    return _store.chartData;
  },
  getSpecification: function(){
    return _store.spefification;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case actionConstants.CHANGE_CHART_SPECIFICATIONS:
      changeSpecification(action.data);
      chartStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = chartStore;