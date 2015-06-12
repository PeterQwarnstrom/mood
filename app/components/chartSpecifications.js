/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');
var chartTypeConstants = require('../constants/chart/typeConstants');

var ChartSpecifications = React.createClass({

	getInitialState: function(){
    	return {
      		spec: this.props.spec
      	}
  	},
	handleSetDayByHour: function(){
		this.state.spec.type = chartTypeConstants.DAY_BY_HOUR;
  	},
  	handleSetMonthByDay: function(){
		this.state.spec.type = chartTypeConstants.MONTH_BY_DAY;
    	//this.props.change(spec);
  	},
  	handleAddSerie: function() {
  		var newSerie = {
  			id: this.state.spec.series.length,
  			name: '',
  			users: [],
  			tags: []
  		};
  		this.state.spec.series.push(newSerie);
		this.setState({ spec : this.state.spec });
	},
	handleAddUser: function(self, index, event) {
		this.state.spec.series[index].users.push(self.refs.textboxUser.state.value);
		this.setState({ spec : this.state.spec });	
		self.refs.textboxUser.state.value = '';
		this.refs.textboxUser.getDOMNode().focus();
	},
	handleAddTag: function(self, index, event) {
		this.state.spec.series[index].tags.push(self.refs.textboxTag.state.value);
		this.setState({ spec : this.state.spec });	
		self.refs.textboxTag.state.value = '';
		this.refs.textboxTag.getDOMNode().focus();
	},
	showSpec : function() {
		alert(JSON.stringify(this.state.spec));
	},
	handleUpdateSerie: function(index, serie) {
		this.state.spec.series[index] = serie;		
	},
	handleTextChange: function(index, event) {
		this.state.spec.series[index].name = event.target.value;
		this.setState({ spec : this.state.spec});
	},
	renderUsers: function(serie) {
		var self = this;
			return _.map(serie.users, function(user) {
				return (
					<span className="btn btn-default btn-md user" >{user}</span>
				);
			});
	},
	renderTags: function(serie) {
		var self = this;
			return _.map(serie.tags, function(tag) {
				return (
					<span className="btn btn-default btn-md tag" >{tag}</span>
				);
			});
	},
	renderSeries: function() {
		var self = this;
		return _.map(this.state.spec.series, function(serie) {
			return (
				<li className="list-group-item" key={serie.id}>
  					<div className="form-horizontal">
		    			<div className="form-group">
							<label htmlFor="textBoxSerieName" className="col-sm-1 control-label">Name</label>
							<div className="col-sm-11">
			      				<input type="text" className="form-control"  name="textboxSerieName" value={serie.name} onChange={self.handleTextChange.bind(self, serie.id)} />
			      			</div>
				        </div>
				        <div className="form-group">
				        	<label className="col-sm-1 control-label">Users</label>
				        	<div className="col-sm-11">
					        	<div className="col-sm-12">
					        		{self.renderUsers(serie)}
					        	</div>
				      			<div className="col-sm-8">
				      				<input type="text" className="form-control"  ref="textboxUser" />
				      			</div>
				      			<div className="col-sm-4">
				      				<button type="button" className="btn btn-primary btn-addListItem" onClick={self.handleAddUser.bind(self, self, serie.id)}>Add User</button>
				      			</div>
							</div>
				       	</div>
				        <div className="form-group">
							<label className="col-sm-1 control-label">Tags</label>
							<div className="col-sm-11">
					        	<div className="col-sm-12">
					        		{self.renderTags(serie)}
					        	</div>
				      			<div className="col-sm-8">
				      				<input type="text" className="form-control"  ref="textboxTag" />
				      			</div>
				      			<div className="col-sm-4">
				      				<button type="button" className="btn btn-primary btn-addListItem" onClick={self.handleAddTag.bind(self, self, serie.id)}>Add Tag</button>
				      			</div>
							</div>
		    			</div>
	        		</div>
  				</li>
			);
		});
	},
  	render: function(){
    	return (
        	<div className="form-horizontal">
        		<div className="form-group">
        			<label htmlFor="dropdownType" className="col-sm-1 control-label">Type</label>
            		<div className="col-sm-11">
      					<select className="form-control" id="dropdownType">
						    <option value="DAY_BY_HOUR">Day By Hour</option>
						    <option value="MONTH_BY_DAY">Month By Day</option>
						</select>
    				</div>
        		</div>
        		<div className="form-group">
        			<label  className="col-sm-1 control-label">Series</label>
            		<div className="col-sm-11 clearfix">
            			<ul className="list-group">
            				{this.renderSeries()}
  						</ul>
  						<button type="button" onClick={this.showSpec} className="btn btn-primary pull-left">Show Spec</button>
  						<button type="button" onClick={this.handleAddSerie} className="btn btn-primary pull-right">Add Serie</button>
    				</div>
        		</div>
        	</div>
    	);
	}
})

module.exports = ChartSpecifications;