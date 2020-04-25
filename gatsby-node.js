const { resolve } = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require("lodash/kebabCase")
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = resolve("./src/templates/blog-post.js")
  const result = await graphql(
    `
      {
        postRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                image
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.postRemark.edges
  const tags = result.data.tagsGroup.group
  const tagTemplate = resolve("./src/templates/tags.js")

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    pathPrefix: '/',
    component: resolve('./src/templates/blog-list.js')
  })

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
