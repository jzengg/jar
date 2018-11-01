import styled from 'react-emotion'

import { Container } from './BaseLayout'

export const WideInput = styled.input`
  border: 1px solid #d1d5da;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const WideLabel = styled.label`
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.3rem;
`

export const FormContainer = Container.withComponent('form')
