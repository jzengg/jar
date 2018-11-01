import styled, { css } from 'react-emotion'

const BaseContainer = css `
  border: 1px solid rgba(27,31,35,0.35);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const Container = styled.div `
  ${BaseContainer}
`
