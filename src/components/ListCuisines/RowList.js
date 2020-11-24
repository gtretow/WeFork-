import React from "react";
import { Link } from "react-router-dom";

function RowList(props) {
	return (
		<div>
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<Link to={`/cuisines/${props.title}`}>
							<img
								src={`images/countries/${props.title.toLowerCase()}.png`}
								className="card-img"
								alt="..."
							/>
						</Link>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							<p className="card-text">{props.description}</p>
							<Link className="btn btn-primary" to={`/cuisines/${props.title}`}>
								See meals
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RowList;
