import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.components.container("column", "center", "center")}
`;