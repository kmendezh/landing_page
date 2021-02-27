import React from "react";

// CSS Styles
// Flex Row style
const flexStyle = {
	display: "flex",
	flexDirection: "row",
	alignItems: "baseline",
	backgroundColor: "dimgray",
	paddingTop: "5px",
	paddingRight: "15%",
	paddingBottom: "5px",
	paddingLeft: "15%"
};

// Flex Item - Bootstrap Title
const flexItemBSName = {
	color: "white",
	flexGrow: "2",
	fontSize: "20px"
};

// Flex Item - Nav bar
const flexItemNavBar = {
	color: "white"
};

// Navbar component
export function Navbar() {
	return (
		<div style={flexStyle}>
			<div style={flexItemBSName}>Start Bootstrap</div>
			<div>
				<nav
					style={flexItemNavBar}
					className="navbar navbar-expand-lg navbar-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							Home
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
