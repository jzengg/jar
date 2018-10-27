import React, { Component } from 'react'

import Header from './Header'

import { css } from 'react-emotion'

class Layout extends Component {

  render() {
    return (
      <div className={css`
          max-width: 900px;
          padding: 2rem;
          `
        }
      >
        <Header />
        {this.props.children}
      </div>
    )
  }

}

export default Layout
