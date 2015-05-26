/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	render: function (){
//		var title = this.props.title || 'Rösta';
//		var background = this.props.background || '#DAA520'; 

		var tileStyle = {
		  backgroundColor: this.props.background
		};

		console.log(tileStyle);

		return ( 
			<div className="tile" style={tileStyle}>
				<div className="header">
					<div className="icon">
						<i className="fa fa-star fa-4x" />
					</div>
					<div className="text">
						<h3>{this.props.title}</h3>
					</div>
				</div>
				<div className="content">
					<div className="rate-group">
						<div className="rate-item">
							<button id="btnRate1" className="btn btn-info">
								<img className="rate" src="public/images/Weather-Rate-1.png" />
							</button>
						</div>
						<div className="rate-item">
							<button id="btnRate2" className="btn btn-info">
								<img className="rate" src="public/images/Weather-Rate-2.png" />
							</button>
						</div>
						<div className="rate-item">
							<button id="btnRate3" className="btn btn-info">
								<img className="rate" src="public/images/Weather-Rate-3.png" />
							</button>
						</div>
						<div className="rate-item">
							<button id="btnRate4" className="btn btn-info">
								<img className="rate" src="public/images/Weather-Rate-4.png" />
							</button>
						</div>
						<div className="rate-item">
							<button id="btnRate5" className="btn btn-info">
								<img className="rate" src="public/images/Weather-Rate-5.png" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
