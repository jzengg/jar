import React from 'react'
import Dropdown from 'react-dropdown'
import { createFragmentContainer, graphql } from 'react-relay'
import 'react-dropdown/style.css'
import { css } from 'react-emotion'

import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { SecondaryButton } from '../css/BaseButton'

import { allJarsCode } from './History'

const iconSize = css `
  font-size: 1rem;
`

class HistoryNav extends React.Component {
  render () {
    const { interval, intervalOptions, user, jarId } = this.props
    let jars = user.jars.edges.map(({ node }) => ({ label: node.name, value: node.id }))
    const jarOptions = [{ label: 'All Jars', value: allJarsCode }, ...jars]

    return (
        <nav>
          <div css={`display: flex; margin-bottom: 1rem;`}>
            <SecondaryButton onClick={this.props.setPrevInterval}>
              <MdArrowBack css={iconSize}/>
            </SecondaryButton>

            <Dropdown controlClassName={css` margin: 0 1rem; padding: 0.5rem 1rem; min-width: 150px;`} options={intervalOptions} onChange={this.props.updateInterval} value={interval} />

            <SecondaryButton onClick={this.props.setNextInterval}>
              <MdArrowForward css={iconSize} />
            </SecondaryButton>
          </div>

          <Dropdown controlClassName={css`padding: 0.5rem 1rem;`} options={jarOptions} onChange={this.props.updateJar} value={jarId} />
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
        }
      }
    }
  }
`)
