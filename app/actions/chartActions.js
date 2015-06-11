var AppDispatcher = require('../dispatchers/AppDispatcher');
var actionConstants = require('../constants/app/actionConstants');

var chartActions = {
  changeSpecifications: function(specifications){
    AppDispatcher.handleAction({
      actionType: actionConstants.CHANGE_CHART_SPECIFICATIONS,
      data: specifications
    });
  }
};

module.exports = chartActions;