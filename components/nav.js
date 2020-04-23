import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="nav-link">
      <Link href="/performance">
        <a href="/performance">Performance</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="/faq">
        <a href="/faq">FAQ</a>
      </Link>
    </div>
    <div className="nav-link">
      <Link href="/about">
        <a href="/about">About</a>
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
      <Link href="/subscribe">
        <a href="/subscribe">Subscribe</a>
      </Link>
    </div>
  </nav>
)

export default Nav
