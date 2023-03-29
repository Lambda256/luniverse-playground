import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface OpenNavbarContainer {
  isOpen?: boolean;
}

export const OpenNavbarContainer = styled.div<OpenNavbarContainer>`
	position: fixed;
	z-index: ${({theme}) => theme.zIndex.openNavbar};
	width: 100%;
	height: 100%;
	background: ${({theme}) => theme.color.dark};
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.color.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const OpenNavbarWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
`;

export const OpenNavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.sm} {
    grid-template-rows: repeat(6, 5rem)
  };
`;

export const OpenNavbarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const OpenNavbarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${({ theme }) => theme.color.primary};
  white-space: nowrap;
  padding: 1rem 4rem;
  color: ${({ theme }) => theme.color.dark};
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.dark};
  }
`;