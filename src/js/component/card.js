import React from "react";

export function Card() {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://i.picsum.photos/id/1063/500/325.jpg?hmac=S695ywpLiFRXU_-Hmnhco3N-FO0uZjdnVRqM-0E1nhY"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h4 className="card-title">Card title</h4>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#!" className="btn btn-primary">
					Find out more
				</a>
			</div>
		</div>
	);
}
