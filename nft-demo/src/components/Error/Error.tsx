import axios, { AxiosError } from "axios";
import React from "react";
import { Btn, Container, ErrorTitle, ErrorMsg, Box, BtnBox } from "./styled";

const Error: React.FC<ErrorComponent.Props> = ({ error, onClick }) => {
	// Handle on click Exit button
	const handleOnClick = () => {
		if (!onClick) window.location.reload();
		else onClick();
	};

	// Axios error page
	if (error instanceof AxiosError) return (
		<Container>
			<ErrorTitle>Opps! Error occurred😱</ErrorTitle>
			<Box>
				<ErrorMsg>{error.response?.data.code}</ErrorMsg>
				<ErrorMsg>{error.response?.data.message}</ErrorMsg>
				<BtnBox>
					<Btn onClick={handleOnClick}>Reload</Btn>
				</BtnBox>
			</Box>
		</Container>
	)

	// Normal Error page
	return (
		<Container>
			<ErrorTitle>Opps! Error occurred😱</ErrorTitle>
			<Box>
				<ErrorMsg>{error.name}</ErrorMsg>
				<ErrorMsg>{error.message}</ErrorMsg>
				<BtnBox>
					<Btn onClick={handleOnClick}>Reload</Btn>
				</BtnBox>
			</Box>
		</Container>
	);
};

export default Error;
