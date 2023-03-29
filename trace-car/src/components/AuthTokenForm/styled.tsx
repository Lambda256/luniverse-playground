import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {IoMdCopy} from "react-icons/io"

export const Container = styled.main`
	${({ theme }) => theme.components.container("column", "center", "center")}
	padding: 2rem;
`;

export const FormWrap = styled.div`
	position: relative;
	top: 0;
	width: 50rem;
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
	}
`;

export const Title = styled.h1`
	${({ theme }) => theme.components.title("2rem")}
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	margin-bottom: 1rem;
`;

export const Form = styled.form`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
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

	@media ${({ theme }) => theme.breakpoint.sm} {
		width: 9rem;
		height: 7rem;
	}
`;

export const InputBox = styled.div`
	${({ theme }) =>
		theme.mixins.flexBox("column", "space-between", "flex-start")}
	margin: 1.5rem 1rem;
	width: 65%;
`;

export const InputLabel = styled.label<AuthTokenFormComponent.InputLabel>`
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

export const Input = styled.input<AuthTokenFormComponent.Input>`
	width: 100%;
	color: ${({ theme }) => theme.color.quaternary};
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	background: none;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.color.dark};
	text-transform: ${({ textTransform }) => textTransform};
	transition: all 0.2s ease-in-out;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:focus {
		outline: none;
		color: ${({ theme }) => theme.color.dark};
		border-bottom: 2px solid ${({ theme }) => theme.color.tertiary};
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1.2rem;
	}
`;

export const CopyIcon = styled(IoMdCopy)`
	&:hover {
		cursor: pointer;
	}
`;

export const BtnWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
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
