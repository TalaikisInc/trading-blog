import React from 'react'
import Layout from './default'

function Page ({ meta, path, children }) {
  return (
    <Layout path={path} pageTitle={meta.title} description={meta.summary} ogImage={meta.image}>
      <article>
        <header>
          <h1>{ meta.title }</h1>
        </header>
        <div>{ children }</div>
      </article>
    </Layout>
  )
}

export default Page
