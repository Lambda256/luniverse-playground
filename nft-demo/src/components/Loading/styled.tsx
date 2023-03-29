import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.components.container("column", "center", "center")}
`;