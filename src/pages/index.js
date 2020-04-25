import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Paginator = ({ numPages }) => {
  return Array.from({ length: numPages }, (v, i) => i + 1)
    .map((page) => {
      if (page === 1) {
        return <span />
      } else {
        return (
          <Link key={page} to={`/${page}`}>
            { page }
          </Link>
        )
      }
    })
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const next = '/2'
  const numPages = parseInt(posts.length / 10) + 1

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" url={location} />
      <Bio />
      { posts.slice(0, 10).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 style={{ marginBottom: rhythm(1 / 4), }} >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  { title }
                </Link>
              </h3>
              <small>{ node.frontmatter.date }</small>
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
            </section>
          </article>
        )
      })}
      <div className="pagination">
        <Paginator numPages={numPages} />
        { next && (
          <Link to={next}>
            Next &raquo;
          </Link>
        ) }
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
