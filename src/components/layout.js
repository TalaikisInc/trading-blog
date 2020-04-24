import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 50,
        }}
      >
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`} >
          { title }
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 50,
        }}
      >
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`}>
          { title }
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <nav>
        <div className="nav-link">
          <Link to="/performance">
            Performance
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/faq">
            FAQ
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/about">
            About
          </Link>
        </div>
        <div className="nav-link">
          <a href="https://talaikis.com">Contact</a>
        </div>
        <div className="nav-link">
          <a href="https://bitcoin.talaikis.com">App</a>
        </div>
        <div className="nav-link">
          <Link to="/subscribe">
            Subscribe
          </Link>
        </div>
      </nav>
      <header>{ header }</header>
      <main>{ children }</main>
      <footer>
        <p className="copyright">
          © {new Date().getFullYear()}, Developed by <a href="https://talaikis.com">Talaikis Ltd.</a> | <a href="/feed.rss">RSS</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
