import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, image, url, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              facebook
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <title>{ `${title} | ${site.siteMetadata.title} `}</title>
      <meta name="description" content={metaDescription} />

      { url === '/' ? <Fragment>
        <link href={siteUrl} rel="canonical" />
        <link href={siteUrl} rel="home" />
      </Fragment>
        : <link href={`${siteUrl}${url}`} rel="canonical" /> }

      <meta property="og:url" content={`${siteUrl}${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${siteUrl}${url}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  image: 'https://arb-images.talaikis.com/arb-3-reinvested.png',
  description: 'BlueBlood Bitcoin trading signals blog.'
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default SEO
