import styled, { css } from 'react-emotion'

const BaseContainer = css `
  border: 1px solid rgba(27,31,35,0.35);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`
const HCentered = css `
display: flex;
justify-content: center;
`

export const AbsCenteredDesktop = styled.div `
  ${HCentered}
  @media (min-width: 414px) {
    height: 100vh;
    align-items: center;
  }
`

export const AbsCentered = styled.div `
  ${HCentered}
  height: 100vh;
  align-items: center;
  @media (max-width: 414px) {
    height: calc(100vh - 150px)
  }
`

export const Container = styled.div `
  ${BaseContainer}
`
