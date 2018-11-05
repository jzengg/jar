import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'

import { HeaderLink } from '../css/BaseButton'


const HeaderNavLink = ({ component: Component, ...rest }) => (
  <NavLink
    activeStyle={{
      fontWeight: '600',
      color: 'white'
    }}
    exact
    className={css`${HeaderLink}`}
    {...rest}
  />
);

export default HeaderNavLink
