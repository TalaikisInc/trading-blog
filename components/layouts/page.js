import React from 'react'
import Layout from './default'
import Stats from './stats'
import Share from './share'

function Page ({ meta, path, children, stats }) {
  return (
    <Layout path={path} pageTitle={meta.title} description={meta.summary} ogImage={meta.image}>
      <article>
        <header>
          <h1>{ meta.title }</h1>
          <Share link={path} />
        </header>
        <div>{ children }</div>
        { stats !== 'test' ? <Stats stats={stats} /> : null }
      </article>
    </Layout>
  )
}

export default Page
