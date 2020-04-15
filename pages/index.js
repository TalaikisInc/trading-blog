import React from 'react'
import { withRouter } from 'next/router'
import _range from 'lodash.range'
import Link from 'next/link'
import pagination from 'pagination'

import Layout from '../components/layouts/default'
import Post from '../components/blog-index-item'
import blogPosts from '../posts/index'
import { siteMeta } from '../blog.config'

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogPosts.length
  })

  const { previous, range, next, fromResult, toResult } = paginator.getPaginationData()
  const results = _range(fromResult - 1, toResult)

  return (
    <Layout pageTitle={siteMeta.title} path={router.pathname} description={siteMeta.description} ogImage={siteMeta.image}>
      { blogPosts
        .filter((_post, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <Post
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path} />
        )) }
      <div className="pagination">
        { previous && (
          <Link href={`/?page=${previous}`} as={`/blog/${previous}`}>
            <a>&laquo; Previous</a>
          </Link>
        ) }
        { range.map((page, index) => (
          <Link key={index} href={`/?page=${page}`} as={`/blog/${page}`}>
            <a>{page}</a>
          </Link>
        )) }
        { next && (
          <Link href={`/?page=${next}`} as={`/blog/${next}`}>
            <a>Next &raquo;</a>
          </Link>
        ) }
      </div>
    </Layout>
  )
}

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default withRouter(Blog)
