import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.components.container("column", "flex-start", "center")}
`;

export const Content = styled.div`
  ${({ theme }) => theme.mixins.gridBox("center", "center", "center")}
  grid-template-columns: repeat(auto-fill, 18rem);
  gap: 2rem;
  position: relative;
  width: 100%;

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
  ${({ theme }) => theme.mixins.flexBox("column", "flex-start", "flex-start")}
  overflow: hidden;
  border: 2px solid ${({theme}) => theme.color.light};
  border-radius: 1rem;
  box-shadow: ${({theme}) => theme.boxShadow.style1};
  transition: all .3s ease-in-out;
  height: 22rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    border: 2px solid ${({theme}) => theme.color.primary};
  }
`;

export const ItemImgBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;

  @media ${({theme}) => theme.breakpoint.xs} {
    height: 100%;
    width: auto;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({theme}) => theme.color.light};
`;

export const ItemTextWrap = styled.div`  
  ${({ theme }) => theme.mixins.flexBox("column", "flex-start", "flex-start")}
  width: 100%;
  height: 30%;
  background: ${({theme}) => theme.color.bg};
  color: ${({theme}) => theme.color.dark};
  padding: 1rem;
`;

export const ItemTextBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
  width: 100%;
`;

export const ItemH1 = styled.h1`
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.fontWeight.semiBold};
  font-size: 1.2rem;
`;

export const ItemH3 = styled.h3`
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-size: 1rem;
`;