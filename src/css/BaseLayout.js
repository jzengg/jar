import styled, { css } from 'react-emotion'

const BaseContainer = css `
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  background-color: white;
  padding: 1rem;
  margin-bottom: 1.25rem;
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
    height: calc(100vh - var(--vh-offset, 0px));
  }
`

export const Container = styled.div `
  ${BaseContainer}
`
