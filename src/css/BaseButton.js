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
  background-color: #28a745;
  background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
  border: 1px solid rgba(27,31,35,0.2);
  padding: 6px 12px;
  font-size: 14px;
  align-self: flex-start;
`

export const PrimaryButton = styled.button `
  ${PrimaryBase}
  &:hover {
    background-color: #269f42;
    background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%);
    border: 1px solid rgba(27,31,35,0.5);
  }
`

export const DisabledPrimaryButton = styled.button `
  ${PrimaryBase}
  cursor: auto;
  color: hsla(0,0%,100%,0.75);
  background-color: #94d3a2;
  background-image: none;
  border-color: rgba(27,31,35,0.2);
  box-shadow: none;
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
