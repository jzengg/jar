import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'


const HeaderNavLink = ({ component: Component, ...rest }) => (
  <NavLink
    activeStyle={{
      fontWeight: '600',
      color: 'white'
    }}
    exact
    className={css`
      padding: 0.75rem;
      text-decoration: none;
      color: hsla(0,0%,100%,.75);
      font-size: 1.25rem;
      &:hover {
        font-weight: 500;
        color: white;
      }
      `}
    {...rest}
  />
);

export default HeaderNavLink
