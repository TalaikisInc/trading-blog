import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="nav-link">
      <Link href="/performance">
        <a>Performance</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="https://talaikis.com">
        <a>Contact</a>
      </Link>
    </div>
  </nav>
)

export default Nav
