import React from 'react'
import Link from 'next/link'

import { siteMeta } from '../../blog.config'
import Layout from './default'
import SyntaxHighlight from '../syntax-highlight'
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'

function BlogPost ({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article>
        <header>
          <h1 className="display-4">{meta.title}</h1>

          <div>
            <PublishedAt date={meta.publishedAt} link={path} />
          </div>
        </header>
        <div>{ children }</div>
        <footer>
          {(previousPost || nextPost) && (
            <div>
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </div>
          )}
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPost
