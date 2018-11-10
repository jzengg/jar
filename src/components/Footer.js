import React from 'react'
import styled from 'react-emotion'

import { FaMedium, FaGithub } from 'react-icons/fa'


const FooterLink = styled.a `
  font-size: 1.5rem;
  color: #484848;
  &:hover {
    color: black;
  }
`

export default () => {
  return (
    <div css={`
      border-top: 1px solid #ecf0f1;
      max-width: 1200px;
      width: 100%;
      display: flex;
      margin: 0 auto;
      padding: 1rem;
      justify-content: center;
      `}
    >
      <FooterLink href="https://medium.com/@jzengg/trials-and-tribulations-with-trendy-technology-2d0a0363f36a">
        <FaMedium />
      </FooterLink>

      <FooterLink css={`margin-left: 0.75rem;`} href="https://github.com/jzengg/jar">
        <FaGithub />
      </FooterLink>
    </div>
  )
}
