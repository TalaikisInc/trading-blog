import React from 'react'
import Latex from 'react-latex'

export default function Sharpe ({ tex }) {
  return (
    <Latex displayMode={true}>{ tex }</Latex>
  )
}
