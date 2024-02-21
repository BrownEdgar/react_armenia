import React from 'react'
import Component from './Component'

const posts = {
  id: 1,
  userId: 2,
  title: "ok",
  body: "ok",
  a: 1
}

export default function App() {
  return (
    <div>
      <Component title="Garun" arr={[1, 2, 3, 4]} posts={posts} />
    </div>
  )
}
