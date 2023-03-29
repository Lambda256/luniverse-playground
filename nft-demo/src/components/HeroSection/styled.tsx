import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const Container = styled.section`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	position: relative;
	width: 100vw;
	min-height: calc(100vh - ${({ theme }) => theme.height.navbar});
	z-index: ${({ theme }) => theme.zIndex.container};
	transition: all 0.3s ease-in-out;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({theme}) => theme.color.bg};
		opacity: 0.1;
		z-index: calc(${({ theme }) => theme.zIndex.container} + 1);
	}
`;

export const BgWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const BgImg = styled.img`
	width: 80%;
	height: 80%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: absolute;
	max-width: ${({ theme }) => theme.width.sm};
	z-index: ${({ theme }) => theme.zIndex.content};
	padding: 2rem;
`;

export const TextWrap = styled.div`
	
`;

export const H1 = styled.h1`
	color: ${({ theme }) => theme.color.white};
	font-size: 3rem;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
	/* text-align: center; */

	@media ${({ theme }) => theme.breakpoint.md} {
		font-size: 2.5rem;
	}

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 2rem;
	}
`;

export const P = styled.p`
	margin-top: 1rem;
	color: ${({ theme }) => theme.color.white};
	font-size: 1.5rem;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);

	@media ${({ theme }) => theme.breakpoint.md} {
		font-size: 1.2rem;
	}

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 1rem;
	}
`;

export const BtnWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
	margin-top: 2rem;
`;

export const Btn = styled(LinkR)`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
	border-radius: 1rem;
	background: ${({ theme }) => theme.color.tertiary};
	padding: 1rem 2rem;
	white-space: nowrap;
	text-decoration: none;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color.white};
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.color.quaternary};
		transform: scale(1.05, 1.05);
	}
`;

export const Icon = styled(MdArrowForward)`
	margin-left: 0.5rem;
	font-size: 1.25rem;
`;

export const HoverIcon = styled(MdKeyboardArrowRight)`
	margin-left: 0.5rem;
	font-size: 1.25rem;
`;