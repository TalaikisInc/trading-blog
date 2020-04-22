import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === 'next'
  return (
    <Fragment>
      <a href={path}>
        <small>Read {position} post </small>
        {title}
      </a>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: column;
          ${isNext ? 'text-align: right;' : ''}
          ${isNext ? 'grid-column: 2 / 2;' : ''}
        }
      `}</style>
    </Fragment>
  )
}

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['next', 'previous']),
}

export default NextPrevPost
