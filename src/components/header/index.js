import React from 'react'
import { Link } from 'gatsby'
import './header.styl'

export default () =>
  <nav className="header">
    <ul className="header__container">
      <li>
        <Link to="/example">ExampleList</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
