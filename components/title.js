import React, { Fragment } from 'react'
import Link from 'next/link'

import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <Fragment>
    <Link href={siteMeta.siteUrl}>
      <a href={siteMeta.siteUrl}>
        <img src="/static/logo.svg" width="80%" height="80%" alt="BlueBlood Trading Blog" className="svg"/>
      </a>
    </Link>
    {path === '/' ? (
      <h3 className="display-4">
        <Link href={siteMeta.siteUrl}>
          <a href={siteMeta.siteUrl}>
            { siteMeta.title }
          </a>
        </Link>
      </h3>
    ) : (
      <p>
        <Link href="/">
          <a rel="/">{siteMeta.title}</a>
        </Link>
      </p>
    )}
  </Fragment>
)

export default Title
