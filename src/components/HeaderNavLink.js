import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'


const HeaderNavLink = ({ component: Component, ...rest }) => (
  <NavLink
    activeStyle={{
      fontWeight: 'bold',
      color: 'black'
    }}
    exact
    className={css`
      padding: 0.75rem;
      text-decoration: none;
      color: grey;
      `}
    {...rest}
  />
);

export default HeaderNavLink
