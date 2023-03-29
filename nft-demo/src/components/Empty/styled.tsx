import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.components.container("column", "center", "center")}
  position: relative;
  overflow: hidden;
`;

export const EmptyIMG = styled.img`
  height: 30rem;
  object-fit: cover;
`;

export const EmptyH1 = styled.h1`
  font-size: 2rem;
`;