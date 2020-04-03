import React from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'

import { pageView } from '../posts/gtag'
import './style.css'
Router.events.on('routeChangeComplete', (url) => pageView(url))

class Custom extends App {
  render () {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default Custom
