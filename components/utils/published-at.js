import React, { Fragment } from 'react'
import Link from 'next/link'

function PublishedAt (props) {
  const { link, date } = props
  return (
    <Fragment>
      <Link href={link}>
        <a href={link} mcolor="#aaa" {...props}>
          <time>
            { date }
          </time>
        </a>
      </Link>
    </Fragment>
  )
}

export default PublishedAt
