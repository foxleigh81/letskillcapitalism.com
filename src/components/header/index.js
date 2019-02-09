import { Link } from 'gatsby'
import React from 'react'

import './style.scss'

const Header = () => (
  <header className="site-header">
    <h1>
      <Link to="/">Alex Foxleigh's Blog</Link>
    </h1>
  </header>
)

export default Header
