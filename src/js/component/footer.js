import React from "react";

const flexFooter = {
	display: "flex",
	flexDirection: "row",
	backgroundColor: "dimgray",
	justifyContent: "center",
	paddingTop: "15px",
	paddingBottom: "15px"
};

const flexFooterItem = {
	color: "white"
};

export function Footer() {
	return (
		<div style={flexFooter}>
			<div style={flexFooterItem}>Copyright @ Your Website 2021</div>
		</div>
	);
}
