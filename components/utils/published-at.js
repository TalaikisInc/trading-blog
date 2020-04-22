import React, { Fragment } from 'react'

function PublishedAt (props) {
  const { link, date } = props
  return (
    <Fragment>
      <a href={link} {...props}>
        <time>
          { date }
        </time>
      </a>
    </Fragment>
  )
}

export default PublishedAt
