import React from 'react'

import Header from '../header'
import Footer from '../footer'
import Container from '../container'

function Layout ({ path, children, pageTitle, ogImage, description }) {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} description={description} />
      <main>{ children }</main>
      <Footer />
    </Container>
  )
}

export default Layout
