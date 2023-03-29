import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.components.container("column", "flex-start", "flex-start")}
  min-width: 100%;
  min-height: calc(100vh - ${({theme}) => theme.height.navbar});
  padding: 2rem;
  overflow: auto;
`;