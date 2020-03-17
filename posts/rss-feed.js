const { writeFileSync } = require('fs')
const { join } = require('path')
const RSS = require('rss')

const posts = require('./get-blog-posts')
const { siteMeta } = require('../blog.config')
const feedOptions = {
  title: siteMeta.title,
  description: siteMeta.description,
  feed_url: `${siteMeta.siteUrl}/feed.rss`,
  site_url: siteMeta.siteUrl,
  image_url: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  copyright: '2019 Tadas Talaikis',
  language: 'en',
  categories: ['trading', 'quantitative trading', 'finance', 'python', 'retirement']
}
const rss = new RSS(feedOptions)

posts.map((post) => rss.item({
  guid: post.path,
  url: `${siteMeta.siteUrl}${post.path}`,
  title: post.title,
  description: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
  date: post.publishedAt,
  author: siteMeta.author
}))

const xml = rss.xml({ indent: true })

writeFileSync(join('./.next/static', 'feed.rss'), xml)
