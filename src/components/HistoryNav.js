import React from 'react'
import Dropdown from 'react-dropdown'
import { createFragmentContainer, graphql } from 'react-relay'
import 'react-dropdown/style.css'
import { css } from 'react-emotion'

import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { SecondaryButton } from '../css/BaseButton'

const iconSize = css `
  font-size: 1rem;
`

class HistoryNav extends React.Component {
  render () {
    const { interval, intervalOptions, user, jarId } = this.props
    const jarOptions = user.jars.edges.map(({ node }) => ({ label: node.name, value: node.id }))

    return (
        <nav css={`
            display: flex;
            flex-direction: column;
            `}>
          <div css={`display: flex; justify-content: center;`}>
            <SecondaryButton onClick={this.props.setPrevInterval}>
              <MdArrowBack css={iconSize}/>
            </SecondaryButton>
            <div css={`margin: 0 1rem;`} >
              <Dropdown options={intervalOptions} onChange={this.props.updateInterval} value={interval} />
            </div>
            <SecondaryButton onClick={this.props.setNextInterval}>
              <MdArrowForward css={iconSize} />
            </SecondaryButton>
          </div>
          <div>
            <Dropdown options={jarOptions} onChange={this.props.updateJar} value={jarId} />
          </div>
        </nav>
    )
  }
}

export default createFragmentContainer(HistoryNav, graphql`
  fragment HistoryNav_user on User {
    jars(last: 100, orderBy: createdAt_DESC)
      @connection(key: "HistoryNav_jars", filters: []) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`)
