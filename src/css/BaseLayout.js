import styled, { css } from 'react-emotion'

const BaseContainer = css `
  border: 1px solid rgba(27,31,35,0.35);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const VerticallyCentered = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div `
  ${BaseContainer}
`
