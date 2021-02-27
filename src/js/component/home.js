import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumpbotron } from "./jumpbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

// CSS Style

// Content style
const contenStyle = {
	marginRight: "20%",
	marginLeft: "20%",
	display: "flex",
	flexDirection: "column"
};

// column cards Style
const columnCards = {
	display: "flex",
	flexDirection: "row"
};

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div style={contenStyle}>
				<div>
					<Jumpbotron />
				</div>
				<div style={columnCards}>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
