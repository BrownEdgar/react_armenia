import React from 'react'
import FlexComponent from './FlexComponent'

export default function App() {
  return (
    <div>
      <FlexComponent>
        <h1>Child 1</h1>
        <p>Child 2</p>
        <button >child 3</button>
      </FlexComponent>
      <FlexComponent >
        <ul>
          <li>element1</li>
          <li>element1</li>
          <li>element1</li>
          <li>element1</li>
          <li>element1</li>
        </ul>
      </FlexComponent>

    </div>
  )
}
