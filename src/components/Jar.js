import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import styled from 'react-emotion'

const JarContainer = styled.li(props => ({
  background: 'lightgrey',
  padding: '0.5rem 0.75rem',
  '&:hover': {border: '1px solid black'},
  cursor: 'pointer',
  margin: '1rem',
  borderRadius: '3px',
  backgroundColor: '#eff3f6',
  backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
  border: '1px solid rgba(27,31,35,0.2)',
  fontWeight: props.active && '600'
}))

class Jar extends React.Component {

  render () {
    return (
        <JarContainer active={this.props.active} onClick={this.props.handleClick.bind(this, this.props.jar.id)}>
          {this.props.jar.name}
        </JarContainer>
    )
  }
}

export default createFragmentContainer(Jar, graphql`
  fragment Jar_jar on Jar {
    id
    name
  }
`)
