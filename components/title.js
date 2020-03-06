import React, { Fragment } from 'react'
import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <Fragment>
    <a href={siteMeta.siteUrl}>
      <img src="/static/logo.svg" width="80%" height="80%" alt="BlueBlood Trading Blog" className="svg"/>
    </a>
    {path === '/' ? (
      <h3 className="display-4">
        <a href={siteMeta.siteUrl}>
          { siteMeta.title }
        </a>
      </h3>
    ) : (
      <p>
        <Link href="/">
          <a rel="me">{siteMeta.title}</a>
        </Link>
      </p>
    )}
  </Fragment>
)

export default Title
