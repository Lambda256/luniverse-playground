import React from "react";
import { Container, EmptyH1, EmptyIMG } from "./styled";

const Empty = () => {
	return (
		<Container>
			<EmptyH1>No data found</EmptyH1>
			<EmptyIMG src="/assets/images/empty.png" />
		</Container>
	);
};

export default Empty;
