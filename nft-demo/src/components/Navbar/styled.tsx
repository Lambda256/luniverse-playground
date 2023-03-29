import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
	position: fixed;
	top: 0;
	background: ${({ theme }) => theme.color.primary};
	z-index: ${({theme}) => theme.zIndex.navbar};
`;

export const Nav = styled.nav`
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
	position: relative;
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
	padding: 1rem 3rem;
`;

export const Logo = styled(LinkR)`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	width: 15rem;
	height: ${({ theme }) => theme.height.navbar};
	text-decoration: none;
`;

export const LogoImgBox = styled.div`
	height: 70%;
	padding: 0.25rem;
`;

export const LogoImg = styled.img`
	height: 100%;
	object-fit: cover;
`;

export const LogoH1 = styled.h1`
	font-size: 1.5rem;
	font-weight: ${({theme}) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.color.white};
`;

export const OpenMenu = styled.div`
	display: none;

	@media ${({ theme }) => theme.breakpoint.md} {
		display: block;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.color.white};
		cursor: pointer;
	}
`;

export const Menu = styled.ul`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
  gap: 1rem;

	@media ${({ theme }) => theme.breakpoint.md} {
		display: none;
	}
`;

export const MenuItem = styled.li`
  height: 100%;
	list-style: none;
`;

export const MenuLink = styled(LinkR)`
  font-size: 1rem;
	text-decoration: none;
  color: ${({theme}) => theme.color.white};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.color.quinary};
  }
`;

export const ConnectButton = styled.button`
	padding: 0.5rem;
	border: 2px solid ${({theme}) => theme.color.white};
	border-radius: 0.5rem;
	background: none;
	font-size: 1rem;
	text-decoration: none;
  color: ${({theme}) => theme.color.white};
	cursor: pointer;
	&:hover {
    color: ${({theme}) => theme.color.quinary};
    border: 2px solid ${({theme}) => theme.color.quinary};
  }

	&:disabled {
		cursor: default;
		&:hover {
			color: ${({theme}) => theme.color.white};
			border: 2px solid ${({theme}) => theme.color.white};
		}
	}
`;

export const EmptyBox = styled.div`
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
`;