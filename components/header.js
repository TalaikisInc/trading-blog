import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Head from './head'
import Nav from './nav'
import Title from './title'

function Header ({ path, pageTitle, ogImage, description }) {
  return (
    <Fragment>
      <Head title={pageTitle} ogImage={ogImage} description={description} url={path} />
      <header>
        <Nav />
        <div className="text-center">
          <Title path={path} />
        </div>
      </header>
    </Fragment>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}

export default Header
