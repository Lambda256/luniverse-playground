import styled from 'styled-components';
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Container = styled.main`
  ${({ theme }) => theme.components.container("column", "flex-start", "center")}
`;

export const Content = styled.div`
  ${({ theme }) => theme.mixins.gridBox("center", "center", "center")}
  grid-template-columns: repeat(auto-fill, 15rem);
  gap: 2rem;
  position: relative;
  width: 100%;
  padding: 2rem;

  @media ${({theme}) => theme.breakpoint.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({theme}) => theme.breakpoint.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({theme}) => theme.breakpoint.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({theme}) => theme.breakpoint.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ItemWrap = styled.div`
  overflow: hidden;
  border: 2px solid ${({theme}) => theme.color.bg};
  border-radius: 1rem;
  background: ${({theme}) => theme.color.bg};
  padding: 1rem;
  box-shadow: ${({theme}) => theme.boxShadow.style1};
  transition: all .3s ease-in-out;
  min-height: 22rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    border: 2px solid ${({theme}) => theme.color.primary};
  }

  &:first-child {
    /* AddIcon Wrap */
    background: ${({theme}) => theme.color.white};
    box-shadow: none;
    ${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
    border: 2px solid ${({theme}) => theme.color.quaternary};
  }
`;

export const AddIcon = styled(AiOutlinePlusCircle)`
  font-size: 3rem;
  color: ${({theme}) => theme.color.quaternary};
`;

export const ItemH1 = styled.h1`
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.fontWeight.semiBold};
  font-size: 2rem;
  @media ${({theme}) => theme.breakpoint.sm} {
    font-size: 1.5rem;
  }

  @media ${({theme}) => theme.breakpoint.xs} {
    font-size: 1.2rem;
  }
`;

export const ItemH3 = styled.h3`
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-size: 1rem;
  @media ${({theme}) => theme.breakpoint.sm} {
    font-size: 0.9rem;
  }

  @media ${({theme}) => theme.breakpoint.xs} {
    font-size: 0.8rem;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`;