import styled, { css } from 'react-emotion'

export const BaseButton = css `
  color: white;
  display: inline-block;
  padding: 3px 10px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`

const PrimaryBase = css `
  ${BaseButton}
  font-weight: 600;
  background-color: #0366d6;
  border: 1px solid #0366d6;
  padding: 6px 12px;
  font-size: 14px;
  align-self: flex-start;
`
const PrimaryHover = css `
  &:hover {
    background-color: #0078ff;
  }
`

export const PrimaryButton = styled.button `
  ${PrimaryBase}
  ${PrimaryHover}
`

export const SmallPrimaryButton = styled.button `
  ${PrimaryBase}
  ${PrimaryHover}
  padding: 3px 10px;
  font-size: 0.85rem;
`

export const DisabledPrimaryButton = styled.button `
  ${PrimaryBase}
  cursor: auto;
  opacity: 0.6;
`

export const SecondaryButton = styled.button `
  ${BaseButton}
  color: black;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
  border: 1px solid rgba(27,31,35,0.2);
  &:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);
    background-position: -.5em;
    border-color: rgba(27,31,35,.35);
  }
`

export const LinkButton = styled.a `
  font-size: 1rem;
  font-weight: 600;
  color: #0366d6;
  cursor: pointer;
`

export const HeaderLink = css `
  cursor: pointer;
  padding: 0.75rem;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  @media (max-width: 414px) {
      font-size: 0.9rem;
    }
`
