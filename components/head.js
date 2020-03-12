import React, { Fragment } from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { siteMeta } from '../blog.config'

const defaultDescription = siteMeta.description
const defaultOGImage = siteMeta.image

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{ props.title ? `${props.title} - ${siteMeta.title}` : siteMeta.title }</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="alternate" title="RSS Feed" type="application/json" href={`${siteMeta.siteUrl}/feed.json`} />
    { props.url === '/' ? <Fragment>
      <link href={siteMeta.siteUrl} rel="canonical" />
      <link href={siteMeta.siteUrl} rel="home" />
    </Fragment>
      : <link href={`${siteMeta.siteUrl}${props.url}`} rel="canonical" /> }

    <meta property="og:url" content={`${siteMeta.siteUrl}${props.url}`} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:site" content={siteMeta.social.twitter} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
