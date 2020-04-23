import React from 'react'
import Link from 'next/link'

function PublishedAt (props) {
  const { link, date } = props
  return (
    <Link href={link} {...props}>
      <a href={link} {...props}>
        <time>
          { date }
        </time>
      </a>
    </Link>
  )
}

export default PublishedAt
