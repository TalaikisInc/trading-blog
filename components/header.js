import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Head from './head'
import Nav from './nav'
import Title from './title'

function Header ({ path, pageTitle, ogImage }) {
  return (
    <Fragment>
      <Head title={pageTitle} ogImage={ogImage} />
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
}

export default Header
