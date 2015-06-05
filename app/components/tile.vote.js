/** @jsx React.DOM */

var React = require('react');
var Header = require('./tile.header');

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
				<Header icon="star" title="Hur känns det just nu?" />
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
