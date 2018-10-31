import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import styled from 'react-emotion'

const JarContainer = styled.li(props => ({
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

class Jar extends React.Component {

  render () {
    return (
        <JarContainer active={this.props.active} onClick={this.props.handleClick.bind(this, this.props.jar)}>
          {this.props.jar.name}
        </JarContainer>
    )
  }
}

export default createFragmentContainer(Jar, graphql`
  fragment Jar_jar on Jar {
    id
    name
    description
  }
`)
