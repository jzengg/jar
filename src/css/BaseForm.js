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

export const RadioContainer = styled.li(props => ({
  padding: '0.5rem 0.75rem',
  '&:hover': {
    border: '1px solid black'},
  cursor: 'pointer',
  margin: '0 1rem 0 0',
  borderRadius: '3px',
  backgroundColor: props.active ? '#eff3f6' : 'lightgrey',
  backgroundImage: props.active ? 'linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)': 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
  border: props.active ? '1px solid black' : '1px solid rgba(27,31,35,0.2)',
  boxShadow: props.active && '0 2px rgba(27,31,35,0.35)',
  transform: props.active && 'translateY(2px)',
  fontWeight: props.active && '600'
}))

export const FormContainer = Container.withComponent('form')
