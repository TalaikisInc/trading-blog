import React from 'react'

import { rhythm } from "../utils/typography"

const Title = ({ title }) => (
  <h1 style={{ marginTop: rhythm(1), marginBottom: rhythm(1 / 2) }}>
    { title }
  </h1>
)

export default Title
