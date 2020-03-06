import React from 'react'
import App from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'pages/style.css'

class Custom extends App {
  render () {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default Custom
