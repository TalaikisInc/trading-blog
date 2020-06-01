import React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Bio from '../components/bio'
// import Stats from '../components/stats'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import Share from '../components/share'
import { rhythm, scale } from '../utils/typography'

const Tags = ({ tags }) => {
  return tags.map((tag, i, arr) => {
    if (i === arr.length - 1) {
      return (
        <a href={`/tags/${kebabCase(tag)}`} key={i}>{ tag }</a>
      )
    } else {
      return (
        <span key={i}><a href={`/tags/${kebabCase(tag)}`}>{ tag }</a>, </span>
      )
    }
  })
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const url = data.site.siteMetadata.siteUrl
  const { previous, next } = pageContext
  const title = post.frontmatter.title
  const image = post.frontmatter.image
  const description = post.frontmatter.description

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} url={location} image={image} />
      <article>
        <header>
          <Title title={title} />
          <p style={{ ...scale(-1 / 5), display: `block`, marginBottom: rhythm(1) }}>
            { post.frontmatter.date } | <Tags tags={post.frontmatter.tags} />
          </p>
          <Share link={`${url}${location.pathname}`}/>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {/*<Stats stats={stats} />*/}
        <hr style={{ marginBottom: rhythm(1) }} />
        <footer>
          <Bio />
        </footer>
      </article>

      <ul className="bottom-nav"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0
        }}>
        <li>
          { previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          { next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        image
      }
    }
  }
`
