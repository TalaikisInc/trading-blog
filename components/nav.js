import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="nav-link">
      <Link href="https://blueblood.talaikis.com/performance">
        <a href="https://blueblood.talaikis.com/performance">Performance</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="https://blueblood.talaikis.com/faq">
        <a href="https://blueblood.talaikis.com/faq">FAQ</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="https://blueblood.talaikis.com/about">
        <a href="https://blueblood.talaikis.com/about">About</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="https://talaikis.com">
        <a href="https://talaikis.com">Contact</a>
      </Link>
    </div>
    <div className="nav-link">
      <a href="https://bitcoin.talaikis.com">App</a>
    </div>
    <div className="nav-link">
      <Link href="https://blueblood.talaikis.com/subscribe">
        <a href="https://blueblood.talaikis.com/subscribe">Subscribe</a>
      </Link>
    </div>
  </nav>
)

export default Nav
