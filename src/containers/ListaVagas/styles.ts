import styled from 'styled-components'

export const VagasStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 32px;

  @media screen {
    grid-template-columns: 1fr;
  }
`
