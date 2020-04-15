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
      <ul>
        { previous && (
          <li>
            <Link href={`/blog?page=${previous}`} as={`/blog/${previous}`}>
              <a>Previous</a>
            </Link>
          </li>
        ) }
        { range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog?page=${page}`} as={`/blog/${page}`}>
              <a>{page}</a>
            </Link>
          </li>
        )) }
        { next && (
          <li>
            <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
              <a>Next</a>
            </Link>
          </li>
        ) }
      </ul>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  )
}

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default withRouter(Blog)
