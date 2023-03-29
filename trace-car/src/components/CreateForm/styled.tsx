import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.main`
	${({ theme }) => theme.components.container("column", "center", "center")}
	padding: 2rem;
`;

export const FormWrap = styled.div`
	position: relative;
	top: 0;
	width: ${({ theme }) => theme.width.lg};
	min-height: 44rem;
	background: ${({ theme }) => theme.color.bg};
	box-shadow: ${({ theme }) => theme.boxShadow.style2};
	border-radius: 1rem;
	padding: 2rem;
	overflow: hidden;

	@media ${({ theme }) => theme.breakpoint.lg} {
		width: ${({ theme }) => theme.width.xs};
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		width: ${({ theme }) => theme.width.xxs};
		padding: 1rem;
		margin: 1rem;
	}
`;

export const Title = styled.h1`
	${({ theme }) => theme.components.title("2rem")}
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	margin-bottom: 1rem;
`;

export const Form = styled.form`
	${({ theme }) => theme.mixins.gridBox("column", "flex-start", "flex-start")}
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	margin-top: 1rem;
	margin: auto;

	@media ${({ theme }) => theme.breakpoint.lg} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const IMG = styled.img`
	width: 16rem;
	height: 13rem;
	object-fit: cover;

	@media ${({ theme }) => theme.breakpoint.lg} {
		width: 10rem;
		height: 8rem;
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		width: 9rem;
		height: 7rem;
	}
`;

export const InputBox = styled.div`
	${({ theme }) =>
		theme.mixins.flexBox("column", "space-between", "flex-start")}
	margin: 1.5rem 1rem;
	height: 5rem;

	&:last-child {
		grid-column-end: span 2;
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 1.2rem;

		&:last-child {
			grid-column-end: span 1;
		}
	}
`;

export const InputLabel = styled.label<InputFormComponent.InputLabel>`
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};

	&::after {
		content: "*";
		${({ required }) => !required && "display: none"};
		position: absolute;
		font-size: 1.2rem;
		color: red;
		opacity: 0.5;
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1.2rem;
	}
`;

export const Input = styled.input<InputFormComponent.Input>`
	width: 100%;
	overflow: hidden;
	color: ${({ theme, readOnly }) =>
		readOnly ? theme.color.black : theme.color.quaternary};
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	background: none;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.color.dark};
	text-transform: ${({ textTransform }) => textTransform};
	transition: all 0.2s ease-in-out;

	&:focus {
		outline: none;
		color: ${({ theme }) => theme.color.dark};
		border-bottom: 2px solid ${({ theme }) => theme.color.tertiary};
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1.2rem;
	}
`;

export const BtnWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
	height: 100%;
	margin-top: 1rem;
	padding-right: 2rem;
`;

export const Btn = styled(LinkR)`
	font-size: 1.2rem;
	text-decoration: none;
	border-radius: 0.75rem;
	padding: 1rem 1.5rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};

	&:hover {
		transform: scale(1.04);
		background: ${({ theme }) => theme.color.quaternary};
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1rem;
		padding: 0.75rem 1rem;
	}
`;
