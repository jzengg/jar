import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNavLink = ({ component: Component, ...rest }) => (
  <NavLink
    activeClassName="active"
    exact
    {...rest}
  />
);

export default HeaderNavLink
